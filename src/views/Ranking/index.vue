<template>
  <div class="echarts" v-loading='loading'>
    <div :style="{ height: height, width: width }" ref="myEchart"></div>
    <slidernav />
    <div class="drawer">
      <div @click="drawerClick" class="drawerClick" :class="{ buttonshow: isshow }">
        <img src="@/assets/rank/arrow-left.png" alt="" />
      </div>
      <div class="setbox" :class="{ show: isshow }">
        <div class="title">全球TOP100大学</div>
        <div class="input-container">
          <div class="img" @click="showdialog = !showdialog">
            <el-link style="  font-size: 22px;" class='el-icon-setting' :underline="false" :type='showdialog?"primary":""'></el-link>
             
          </div>
          <el-input clearable v-model="panelFrom.keyword" @change="searchSchool" placeholder="请输入相关内容"></el-input>
          <div class="input-btn" @click="search">
            <img src="@/assets/rank/search.png" alt="" />
          </div>
          <div class="panel-container">
            <el-collapse-transition>
              <div v-show="showdialog">
                <panel :years="years" @selectYear="selectYear" @selectSource="selectSource" @selectCoutry="selectCoutry" />
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <transition name="right">
          <div class="tab" v-show="showTab">
            <!-- tab组件需要传值tabs和currentTabComponent，currentTabComponent为某个tab页 -->
            <tab :tabs="tabs" @openTuition="openTuition" :school_name="school_name"></tab>
          </div>
        </transition>
      </div>
    </div>
    <footerbtn @closedraw="closedraw" />
    <div class="roammap">
      <!-- <div class="roammap-left" @click="restore"></div> -->
      <div class="roammap-right">
        <div @click="roamMap(0)">+</div>
        <div @click="roamMap(1)">-</div>
      </div>
    </div>
    <tuition :visible="visible" :id="schoolId" @close="closeTuition" />
  </div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/world.js";
import "echarts/map/js/china.js"; // 引入中国地图数据
// import $ from "jquery";
import area from "./area.js";
import slidernav from "./slidernav.vue";
import footerbtn from "./footerbtn.vue";
import panel from "./panel.vue";
import tab from "./tab.vue";
import tuition from "./tables/tuition";
import { getSchools } from "@/api/ranking";
export default {
  name: "echarts",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100vh",
    },
  },
  data() {
    return {
      gc:[],//各个国家学校分布
      loading:true,
      center: ["60%", "60%"], //设置地图中心
      allSchools: [], //所有顶尖的大学
      //  currentTabComponent: "tab1",
      // tab根据既定格式定义
      tabs: [
        {
          id: "tab1",
          desc: "学校简介",
        },
        {
          id: "tab2",
          desc: "综合排名",
        },
        {
          id: "tab3",
          desc: "各专业学费",
        },
        {
          id: "tab4",
          desc: "招生要求",
        },
        {
          id: "tab5",
          desc: "招生信息",
        },
      ],
      chart: null,
      //  areaChart: null,
      show: false,
      hookToolTip: "",
      isshow: false, //控制上方抽屉的展开和收起
      showdialog: false, //控制面板的展开与收起
      visible: false, //控制表格的打开和关闭
      schoolId: 0, //学校id
      school_name: 0, //学校名称
      showTab: false, //控制tab的左滑右滑
      years: [], //展示面板的年份
      panelFrom: {
        sources: "times",
        year: "2021",
        country: "",
        rank_cate: "",
        keyword: "", //根据学校的名字进行查询学校信息
      },
      // introduction:{},//学校的详细信息
      // ranking:[],//学校的综合排名
      // weights:[],//专业排名的权重
      schoolInfo: {}, //学校的信息
    };
  },
  components: {
    slidernav,
    tab,
    footerbtn,
    panel,
    tuition,
  },
  mounted() {
    this.getAllSchools();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    // if (!this.areaChart) {
    //   return;
    // }
    this.chart.dispose();
    this.chart = null;
    // this.areaChart.dispose();
    // this.areaChart = null;
  },
  watch: {
    draw: function (newV, oldV) {
      if (this.newV == true) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
    hookToolTip: function (name) {
      this.$nextTick(() => {
        document.querySelector("#btn-tooltip").addEventListener("click", () => {
          console.log(name);
          this.isshow = true;
          this.shcoolId = name.data.id;
          this.school_name = name.data.id;
          this.showdialog = false; // 展示信息来源面板关闭
          this.showTab = true; //展示学校信息面板
          // if(this.school_name=='')
          //   return
          //    this.getSchoolDesc()
        });
      });
    },
  },
  methods: {
    //获取所有全球的top100的学校
    getAllSchools() {
      getSchools(this.panelFrom)
        .then((res) => {
          if (res.code == "200") {
            var gps = res.mes.gps;
            for (let i = 0; i < gps.length; i++) {
              if (gps[i].hasOwnProperty("coord") === false) {
                gps.splice(i, 1);
                i = i - 1;
              }
            }
            if (gps.length == 1) {
              this.center = gps[0]["coord"];
            }
            this.allSchools = gps;
            this.years = res.mes.year;
            this.gc=res.mes.gc
            this.loading=false
            this.initChart();
          }
        })
        .catch((err) => {});
    },

    //选择年份
    selectYear(year) {
      console.log(year);
      this.panelFrom.year = year;
      this.chart.dispose();
      this.getAllSchools();
    },
    //选择数据来源
    selectSource(value) {
      this.panelFrom.sources = value;
      this.chart.dispose();
      this.getAllSchools();
    },
    //选择数据来源取决国家
    selectCoutry(value) {
      this.panelFrom.country = value;
      this.chart.dispose();
      this.getAllSchools();
    },
    //对于学校进行搜索
    searchSchool(value) {
      this.panelFrom.keyword = value;
    },
    openTuition(key) {
      this.visible = true;
      this.schoolId = key;
    },
    closeTuition() {
      this.visible = false;
    },
    //点击放大缩小功能
    roamMap(flag) {
      if (this.chart) {
        console.log(this.chart);
        let currentZoom = this.chart.getOption().geo[0].zoom; // 当前的缩放比例

        let increaseAmplitude = 1.2; // 点击按钮每次 放大/缩小 比例
        if (flag == 1) {
          increaseAmplitude = 0.8;
        }

        this.chart.setOption({
          geo: {
            zoom: currentZoom * increaseAmplitude,
          },
        });
      } else {
        console.log("this.area", this.areaChart);
        let currZoom = this.areaChart.getOption().geo[0].zoom; // 当前的缩放比例

        let increaseAmplitude = 1.2; // 点击按钮每次 放大/缩小 比例
        if (flag == 1) {
          increaseAmplitude = 0.8;
        }

        this.areaChart.setOption({
          geo: {
            zoom: currZoom * increaseAmplitude,
          },
        });
      }
    },
    //复原地图的大小
    restore() {
      if (this.chart) {
        this.chart.setOption({
          geo: {
            zoom: 1.2,
          },
        });
      } else {
        this.areaChart.setOption({
          geo: {
            zoom: 1.2,
          },
        });
      }
    },
    drawerClick() {
      this.isshow = !this.isshow;
      this.showdialog = true;
    },
    search() {
      this.showTab = false;
      this.chart.dispose();
      this.getAllSchools();
      //  this.showTab=true
      this.showdialog = false;
    },
    //打开信息聊天后关闭弹框
    closedraw() {
      this.isshow = false;
    },

    //绘制世界地图
    initChart() {
      console.log(this.center);
      //  console.log(this.allSchools);
      var that = this;
      this.chart = echarts.init(this.$refs.myEchart);
      window.onresize = echarts.init(this.$refs.myEchart).resize;
      // 把配置和数据放这里
      this.chart.setOption(
        {
          // 进行相关配置
          backgroundColor: "#A6C2DE",
          nameMap: area.nameMap,
          tooltip: {
            trigger: "item",
            triggerOn: "click",
            showDelay: 3, //浮层显示的延迟
            transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间
            enterable: true,
            formatter: (params) => {
              if (params.data&&params.componentType=="markPoint") {  //只有当鼠标点击了svg图片，且componentType==‘markPoint’才会显示信息弹框
                that.hookToolTip = params;
                let info = params.data || {};
                let html = `
          <div style='width:170px'>
          <div style='height:36px;display:flex;justify-content: center;align-items: center;'><div style='background:#FF8900;font-size:18px;color:#fff;width:54px;text-align:center;padding:5px'>${
            info.rank
          }</div><div style='width:116px;color:#4A4A4A;font-size:18px;text-align:center;padding:5px;font-family: YouSheBiaoTiHei;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;'>${
                  info.name_cn || info.name
                }</div></div>
          <div style='color:#000A25;font-size:14px;padding:5px;font-family:PangMenZhengDao'>申请人数：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>30</span></div>
           <div style='color:#000A25;font-size:14px;padding:5px;font-family:PangMenZhengDao'>申请成功率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>95%</span></div>
          <div style='color:#6D6D6D;font-size:14px;padding:5px;font-family:PangMenZhengDao'>就业率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>90%</span></div>
          <div style='color:#6D6D6D;font-size:14px;padding:5px;font-family:PangMenZhengDao'>科研深造率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>20%</span></div>
          <div id='btn-tooltip' style='color:#fff;font-size:16px;text-align:center;background:rgba(0,0,0,.68);padding:5px;font-family:PangMenZhengDao'>点我查看详情</div>
					</div>
        `;
                return html;
              } else {
                return;
              }
            },
            // position: [800,300],
            HorizontalOffset: "50",
            VerticalOffset: "50",
            backgroundColor: "rgba(255,255,255,.84)",
          },
          dataRange: {
            show: true,
            type: "piecewise",
            pieces: [
              {
                min: 20,
                max: 99,
              },
              {
                min: 15,
                max: 20,
              },
              {
                min: 8,
                max: 15,
              },
              {
                min: 2,
                max: 8,
              },
              {
                min: 0,
                max: 2,
              },
            ],
            text: ["图例"],
            realtime: true,
            left: 20,
            bottom: 10,
            calculable: true,
            showLabel: true,
            backgroundColor: "#fff",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            color: ["#4795E0", "#67ABE6", "#86C1EC", "#A7D7F2", "#C6EDF9"],
          },
          geo: {
            // 这个是重点配置区
            map: "world", // 表示中国地图
            roam: true,
            zoom: 1.2,
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: "rgba(0,0,0,0.4)",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                // shadowBlur: 20,
                borderWidth: 0,
                // shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
          series: [
            {
              type: "scatter",
              coordinateSystem: "geo", // 对应上方配置
            },
            {
              type: "map",
              mapType: "world",
              geoIndex: 0,
              markPoint: {
                symbol:
                  "path://M511.99736 0.00768a349.693377 349.693377 0 0 0-248.894133 597.627518L511.99736 845.217341l248.958133-247.582143A349.693377 349.693377 0 0 0 511.99736 0.071679z m0 505.596208a155.99883 155.99883 0 0 1-156.510826-155.518834 155.93483 155.93483 0 0 1 156.446826-155.518833 155.99883 155.99883 0 0 1 156.510827 155.518833 155.93483 155.93483 0 0 1-156.318828 155.454834h-0.191999zM355.486534 958.944488c0 35.903731 70.079474 65.023512 156.510826 65.023512s156.510826-29.119782 156.510826-65.023512-70.079474-65.023512-156.510826-65.023512-156.510826 29.151781-156.510826 65.055512z", //"image://" + require("@/assets/img/address.png")
                symbolSize: [25, 32], // 图片大小
                label: {
                  position: "top",
                  color: "#fff",
                },
                itemStyle: {
                  normal: {
                    color: "#007AFF", //标志颜色
                  },
                  emphasis: {
                    color: "#FF8900",
                  },
                },
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "stroke",
                },
                hoverAnimation: true,
                zlevel: 1,
                 layoutCenter: ["20%", "60%"], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
                // center: that.center,
                layoutSize: "100%",

                // coord数组存放地址坐标
                data: that.allSchools,
              },
              data:that.gc
            },
          ],
        },
        true
      );
      this.chart.on("click", function (params) {
        console.log(params);
        // if (params.data) {
        //   return false
        // } 
      }
      );
    },
    //绘制中国地图，省市区
    // chinaArea() {
    //   var that = this;
    //   this.chart.dispose();
    //   this.chart = null;
    //   this.areaChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
    //   window.onresize = echarts.init(this.$refs.myEchart).resize;
    //   initEcharts("china");
    //   function initEcharts(map) {
    //     let option = {
    //       // 进行相关配置
    //       backgroundColor: "#A6C2DE",
    //       tooltip: {
    //         trigger: "item",
    //         triggerOn: "click",
    //         showDelay: 3, //浮层显示的延迟
    //         transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间
    //         enterable: true,
    //         formatter: (params) => {
    //           if (params.data) {
    //             that.hookToolTip = params;
    //             let info = params.data.info || {};
    //             let html = `
    //       <div style='width:170px'>
    //       <div style='height:36px;display:flex;justify-content: center;align-items: center;'><div style='background:#FF8900;font-size:18px;color:#fff;width:54px;text-align:center;padding:5px'>${params.value}</div><div style='width:116px;color:#4A4A4A;font-size:18px;text-align:center;padding:5px;font-family: YouSheBiaoTiHei;'>浙江大学</div></div>
    //       <div style='color:#000A25;font-size:14px;padding:5px;font-family:PangMenZhengDao'>申请人数：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>30</span></div>
    //        <div style='color:#000A25;font-size:14px;padding:5px;font-family:PangMenZhengDao'>申请成功率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>95%</span></div>
    //       <div style='color:#6D6D6D;font-size:14px;padding:5px;font-family:PangMenZhengDao'>就业率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>90%</span></div>
    //       <div style='color:#6D6D6D;font-size:14px;padding:5px;font-family:PangMenZhengDao'>科研深造率：<span style='color:#0038FF;font-size:20px;margin-left:14px;font-family: YouSheBiaoTiHei;'>20%</span></div>
    //       <div id='btn-tooltip' style='color:#fff;font-size:16px;text-align:center;background:rgba(0,0,0,.68);padding:5px;font-family:PangMenZhengDao'>点我查看详情</div>
    // 			</div>
    //     `;
    //             return html;
    //           } else {
    //             return;
    //           }
    //         },
    //         // position: [800,300],
    //         HorizontalOffset: "50",
    //         VerticalOffset: "50",
    //         backgroundColor: "rgba(255,255,255,.84)",
    //       },
    //       dataRange: {
    //         show: true,
    //         type: "piecewise",
    //         pieces: [
    //           {
    //             min: 20,
    //             max: 99,
    //           },
    //           {
    //             min: 15,
    //             max: 20,
    //           },
    //           {
    //             min: 8,
    //             max: 15,
    //           },
    //           {
    //             min: 2,
    //             max: 8,
    //           },
    //           {
    //             min: 0,
    //             max: 2,
    //           },
    //         ],
    //         text: ["图例"],
    //         realtime: true,
    //         left: 20,
    //         bottom: 10,
    //         calculable: true,
    //         showLabel: true,
    //         backgroundColor: "#fff",
    //         borderColor: "#ccc",
    //         borderWidth: 0,
    //         padding: 5,
    //         color: ["#4795E0", "#67ABE6", "#86C1EC", "#A7D7F2", "#C6EDF9"],
    //       },
    //       geo: {
    //         // 这个是重点配置区
    //         map: map, // 表示中国地图
    //         roam: true,
    //         zoom: 1.2,
    //         label: {
    //           normal: {
    //             show: true, // 是否显示对应地名
    //             textStyle: {
    //               color: "rgba(0,0,0,0.4)",
    //             },
    //           },
    //         },
    //         itemStyle: {
    //           normal: {
    //             borderColor: "rgba(0, 0, 0, 0.2)",
    //           },
    //           emphasis: {
    //             areaColor: null,
    //             shadowOffsetX: 0,
    //             shadowOffsetY: 0,
    //             //shadowBlur: 20,
    //             borderWidth: 0,
    //             //shadowColor: "rgba(0, 0, 0, 0.5)",
    //           },
    //         },
    //       },
    //       series: [
    //         {
    //           type: "scatter",
    //           coordinateSystem: "geo", // 对应上方配置
    //         },
    //         {
    //           name: "", // 浮动框的标题
    //           type: "map",
    //           mapType: map,
    //           geoIndex: 0,
    //           markPoint: {
    //             symbol:
    //               "path://M511.99736 0.00768a349.693377 349.693377 0 0 0-248.894133 597.627518L511.99736 845.217341l248.958133-247.582143A349.693377 349.693377 0 0 0 511.99736 0.071679z m0 505.596208a155.99883 155.99883 0 0 1-156.510826-155.518834 155.93483 155.93483 0 0 1 156.446826-155.518833 155.99883 155.99883 0 0 1 156.510827 155.518833 155.93483 155.93483 0 0 1-156.318828 155.454834h-0.191999zM355.486534 958.944488c0 35.903731 70.079474 65.023512 156.510826 65.023512s156.510826-29.119782 156.510826-65.023512-70.079474-65.023512-156.510826-65.023512-156.510826 29.151781-156.510826 65.055512z", //"image://" + require("@/assets/img/address.png")
    //             symbolSize: [25, 32], // 图片大小
    //             label: {
    //               position: "top",
    //               color: "#fff",
    //             },
    //             itemStyle: {
    //               normal: {
    //                 color: "#007AFF", //标志颜色
    //               },
    //               emphasis: {
    //                 color: "#FF8900",
    //               },
    //             },
    //             showEffectOn: "render",
    //             rippleEffect: {
    //               brushType: "stroke",
    //             },
    //             hoverAnimation: true,
    //             zlevel: 1,
    //             layoutCenter: ["60%", "60%"], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
    //             layoutSize: "100%",

    //             // coord数组存放地址坐标
    //             data: [
    //               {
    //                 name: "长乐区",
    //                 coord: ['119.533479','25.968762'],
    //                 value: 50,
    //               },
    //               {
    //                 name: "",
    //                 coord: [119.3347, 25.968761],
    //                 value: 40,
    //               },
    //             ],
    //           },
    //           data:[
    //                {
    //               name: "浙江",
    //               value: 3,
    //             },
    //           ]
    //         },
    //       ],
    //     };

    //     that.areaChart.setOption(option, true);
    //   }
    //   that.areaChart.off("click");
    //   //鼠标双击事件
    //   that.areaChart.on("dblclick", (param) => {
    //     initEcharts("china");
    //   });
    //   //去除默认的鼠标事件
    //   document.oncontextmenu = function () {
    //     return false;
    //   };
    //   //新加上鼠标右击事件
    //   that.areaChart.on("contextmenu", function (params) {
    //     that.initChart();
    //   });
    //   // 点击触发
    //   // that.areaChart.on("click", (param) => {
    //   //   if (param.name in area.provinces) {
    //   //     // 处理省模块
    //   //     let names = param.name;

    //   //     for (let key in area.provinces) {
    //   //       if (names == key) {
    //   //         console.log(area.provinces[key], key);
    //   //         showProvince(area.provinces[key], key);
    //   //         break;
    //   //       }
    //   //     }
    //   //   }
    //     //  else if (param.name in area.cityMap) {
    //     //   // 处理市模块
    //     //   let names = param.name;
    //     //   for (let key in area.cityMap) {
    //     //     if (names == key) {
    //     //       showCitys(area.cityMap[key], key);
    //     //       break;
    //     //     }
    //     //   }
    //     // }
    //  // });

    //   //展示对应的省
    //   // function showProvince(eName, param) {
    //   //   // console.log(eName, param);
    //   //   $.getJSON(`/map/province/${eName}.json`, (data) => {
    //   //     that.$echarts.registerMap(param, data);
    //   //     initEcharts(param);
    //   //   });
    //   // }

    //   //展示对应市
    //   // function showCitys(cName, param) {
    //   //   console.log(cName, param);
    //   //   // 显示县级地图
    //   //   $.getJSON(`/map/city/${cName}.json`, (data) => {
    //   //     that.$echarts.registerMap(param, data);
    //   //     initEcharts(param);

    //   //   });
    //   // }
    // },
  },
};
</script>
<style lang="scss" scoped>
.echarts {
  position: relative;
}

.drawer {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .drawerClick {
    width: 40px;
    height: 72px;
    position: fixed;
    z-index: 1000;
    top: 0px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    right: 0;
    background-color: #192a65;
    opacity: 0.35;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .setbox {
    position: fixed;
    z-index: 1000;
    top: 0px;
    bottom: 0px;
    width: 500px;
    height: 850px;
    background: linear-gradient(181deg, #10215d 0%, #ffffff 100%);
    box-shadow: 4px -33px 65px 0px rgba(27, 44, 102, 0.23);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    right: -500px;
    // padding:0px 0px 0px 20px;
    .title {
      width: 250px;
      height: 42px;
      font-size: 32px;
      margin: 40px auto;
      color: #ffffff;
      line-height: 42px;
      font-family: YouSheBiaoTiHei;
    }
    .input-container {
      width: 468px;
      height: 52px;
      background-color: #fff;
      margin: 0 auto;
      display: flex;
      position: relative;
      .img {
        width: 74px;
        height: 52px;
        text-align: center;
        line-height: 52px;
      
      }
      .el-input {
        flex: 1;
      }
      .input-btn {
        width: 60px;
        height: 52px;
        background: #4e75ff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 27px;
          height: 27px;
        }
      }
    }

    .input-container {
      ::v-deep .el-input__inner {
        height: 50px;
        width: 173px;
        border: 0;
        border-radius: 0px;
        box-shadow: none;
        background: none;
        font-size: 16px;
        color: #343434;
      }
    }
  }
  .show {
    right: 0;
  }
  .buttonshow {
    right: 500px;
  }
}
.roammap {
  position: fixed;
  bottom: 10px;
  left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .roammap-left {
    width: 52px;
    height: 44px;
    background: #ffffff;
    margin-right: 6px;
  }
  .roammap-right {
    width: 100px;
    height: 44px;
    background: #ffffff;
    color: #7b7b7b;
    display: flex;
    align-items: center;
    font-size: 20px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.panel-container {
  margin-top: 20px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: -20px;
  z-index: 1000;
}
.right-enter-active {
  animation: rightOut 0.5s ease;
}
.right-leave-active {
  animation: rightLevel 0.5s ease;
}
@keyframes rightOut {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes rightLevel {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>