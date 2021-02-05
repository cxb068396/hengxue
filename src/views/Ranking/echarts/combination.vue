<template>
    <div ref="myChart" id='myChart'></div>
</template>
 
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  created() {},

  computed: {},
  mounted() {
    this.showEcharts();
  },
  methods: {
    showEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      myChart.setOption({
        legend: {
          selectedMode: true, //可点击
          data: ["年录取率（%）", "年就业率（%）"],
          bottom: 0,
          left:120
        },
        tooltip: {},    
        grid: {
          left: 120,
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
            splitLine: {
              //不显示分割线
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "年录取率（%）",
            splitLine: {
              //显示分割线
              show: true,
            },
          },
          {
            type: "value",
            name: "年就业率（%）",
            splitLine: {
              show: true,
            },
          },
        ],
        series: [
          {
            name: "年录取率（%）",
            type: "bar",
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 30.7, 35.6, 50.2],
            itemStyle: {
              color: "rgba(121, 103, 255, 1)",
            },
          },
          {
            name: "年就业率（%）",
            type: "line",
            yAxisIndex: 1, //索引从0开始
            data: [20.0, 20.2, 30.3, 40.5, 60.3, 70.2, 80.3, 90.4],
            smooth: true,
            // itemStyle成为面积图的关键。
            itemStyle: {
              normal: {
                color: "#0099ff",
                areaStyle: { type: "default" },
                lineStyle: { color: "#FF6F11" },
              },
            },
            areaStyle: {
              // 实现渐变色
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255, 111, 17, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 149, 120, 1)",
                  },
                ]),
              },
            },
          },
        ],
      });
      //建议加上以下这一行代码，不加，当浏览器窗口缩小时，echarts显示不全。
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
 
<style lang="scss" scoped>
.a{
    text-align:center;
}
#myChart{
  width: 468px;
  height: 280px;
}
</style>