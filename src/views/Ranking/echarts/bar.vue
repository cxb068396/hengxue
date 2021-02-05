<template>
  <div id="myChart"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "hello",
  props: {
    ranking: {
      type: Array,
    },
    schoolName:{
      type:String
    }
  },
  data() {
    return {
    yearnum:[],
    rank:[],
    sName:''
    };
  },
  watch: {
       schoolName:function(newVal,oldVal){
      this.sName=newVal
    },
    ranking: function (newVal, oldVal) {
      var yearnum = [];
      var rank = [];
      newVal.forEach((item) => {
        yearnum.push(item.yearnum+'年');
        rank.push(Number(item.rank));
      });
      this.yearnum=yearnum,
      this.rank=rank
      this.drawLine();
    },
  },
  mounted() {

  },
  methods: {
    drawLine() {
      var that=this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: `2018年-2021年${that.sName}综合排名变化趋势`,
          top: "bottom",
          left: 120,
          textStyle: { color: "#3F3F3F", fontSize: "12px", fontFamily: "PangMenZhengDao" },
        },
        tooltip: {},
        grid: {
          left: 120,
        },
        xAxis: {
          data:that.yearnum,
        },
        yAxis: {},
        series: [
          {
            name: "排名",
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  let colors = ["#849FFF", "#B087FF", "#FCC085", "#6A53FF"];
                  return colors[params.dataIndex];
                },
              },
            },

            data:that.rank,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#myChart{
  width:468px;
  height: 280px;
}
</style>
