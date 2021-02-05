<template>
  <div id="myChart2"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      weight: [],
    };
  },
  props: {
    weights: {
      types: Array,
    },
  },
  watch: {
    weights: function (newVal, oldVal) {
      var arr = [];
      console.log(newVal);
      if (newVal.length > 0) {
        var newA = newVal.slice(0, 2);
        console.log(newA);
        newA.forEach((item) => {
          item.name = item.yearnum;

          var temp = [];
          // for(var i in item){
          //   console.log(item[i])
          // }
          Object.keys(item).forEach(function (key) {
            //console.log(item[key])

            if (key == "name" || key == "yearnum") {
            } else {
              temp.push(Number(item[key]));
            }
          });
          item.value = temp;
        });
        newVal[0].areaStyle = "#4E75FF";
        console.log(newVal);
        this.weight = newVal;
        this.drawLine();
      }
    },
  },
  mounted() {},
  methods: {
    drawLine() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        tooltip: {}, //提示层
        radar: {
          name: {
            textStyle: {
              color: "#fff", //字体颜色
              fontSize: "14px",
              color: "#5F5F5F",
            },
          },
          center: ["50%", "50%"],
          radius: "60%",
          startAngle: 90,
          indicator: [
            {
              name: "Academic_Reputation",
              max: 100,
            },
            {
              name: "Citations_per_Faculty",
              max: 100,
            },
            {
              name: "Employer_Reputation",
              max: 100,
            },
            {
              name: "Faculty_Student",
              max: 100,
            },
            {
              name: "International_Faculty",
              max: 100,
            },
            {
              name: "International_Students",
              max: 100,
            },
            {
              name: "overall",
              max: 100,
            },
          ],
          splitArea: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "radar",
            itemStyle: {
              //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
              color: "#8AA4FF",
              borderColor: "#8AA4FF",
            },
            areaStyle: {
              color: "#8AA4FF",
            },
            data: that.weight,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#myChart2 {
  width: 468px;
  height: 280px;
}
</style>
