<template>
  <div class="index_box">
    <div class="index_top">
      <img src="../assets/about/top_bg.png" class="index_top_img" />
      <div class="index_top_company">公司简介</div>
      <div class="index_top_container">
        <div class="top_container_text" v-for="(item, index) in textData" :key="index">{{ item.text }}</div>
      </div>
    </div>
    <div class="index_second">
      <div class="index_second_left">
        <div class="second_left">
          <div class="second_left_line"></div>
          <span class="second_left_word">核心产品</span>
        </div>
        <div class="second_left_text">专业的服务让留学更简单</div>
        <div class="second_left_container">“学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案与服务。”</div>
      </div>
      <img class="index_second_right" src="../assets/about/second.png" />
    </div>
    <div class="index_third">
      <img src="../assets/about/oneImg.png" class="index_third_img" />
    </div>
    <div class="index_fourth">
      <img src="../assets/about/twoImg.png" class="index_fourth_img" />
      <div class="clear"></div>
    </div>
    <div class="index_xitong">
      <div class="index_xitong_line"></div>
      <span class="index_xitong_word">核心系统</span>
    </div>
    <div class="index_xitong_text">打造企业核心技术</div>
    <div class="index_xitong_container">
      <div class="xitong_container_image">
        <img :src="imageD" class="container_image"/>
      </div>
      <div class="xitong_container_container">
        <div class="xitong_data" :style="getStyle(item)" v-for="(item, index) in systemData" :key="index" @click="systemBtn(item, index)">
          <div class="xitong_data_text">{{ item.title }}</div>
          <div class="xitong_data_container">{{ item.titleContainer }}</div>
        </div>
      </div>
    </div>
    <div class="index_footer"> 
      <img class="index_footer_left" src="../assets/about/footer_bg.png">
      <div class="index_footer_right">
        <div class="footer_right_text">衡学个人综合实力提升数字化工作平台</div>
        <div class="footer_right_container">学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案与服务。学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决…</div>
      </div>
    </div>
  </div>
</template>
 
<script>
import pic from "../assets/about/aiiskill.png";
import pic1 from "../assets/about/cloundCompute.png";
import systemImages1 from "../assets/about/xitong_bg.png";
import systemImages2 from "../assets//about/195048738.png";
import systemImages3 from "../assets/about/xitong_bg.png";
import systemImages4 from "../assets/about/xitong_bg.png";

export default {
  data() {
    return {
      aiData: [
        {
          image: pic,
          text: "人工智能",
          littleText: "Aiiskill",
        },
        {
          image: pic1,
          text: "云计算",
          littleText: "Cloud Compute",
        },
      ],
      textData: [
        {
          text:
            "衡学教育，为客户提供学业及职业生涯规划的全周期服务。公司在逐步建立学业规划评估体系与职业生涯规划评估体系，为客户提供学业规划评估系统和职业生涯规划评估系统。",
        },
        {
          text:
            "同时，公司利用云计算、大数据等技术优势，搭建全球高校数字化全景系统与留学动态信息监测系统，为客户出国留学提供最新动态数据，帮助客户精准定位目标留学院校。",
        },
        {
          text:
            "客户可根据系统评估报告与留学动态信息，有目的的选择背景提升、出国留学、升学指导、家庭规划、职业生涯规划与就业指导、职业培训等项目。公司自主开发衡学个人综合实力提升数字化工作平台，平台为签约客户提供实时查询项目进度、个人学力提升、一对一顾问在线指导等产品与服务。",
        },
      ],
      systemData: [
        {
          index: 0,
          title: "学业规划评估系统",
          titleContainer: "学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案与什么绝对时间",
          colorStatus: false,
        },
        {
          index: 1,
          title: "职业生涯规划评估系统",
          titleContainer: "学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案史蒂芬霍金施工方",
          colorStatus: false,
        },
        {
          index: 2,
          title: "全球高校数字化全景系统",
          titleContainer: "学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案与什么绝对时间",
          colorStatus: false,
        },
        {
          index: 3,
          title: "留学动态信息监测系统",
          titleContainer: "学业评估旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案与什么绝对时间",
          colorStatus: false,
        },
      ],
      imageD: systemImages1,
      imgData: [
        {
          index: 0,
          images: systemImages1,
        },
        {
          index: 1,
          images: systemImages2,
        },
        {
          index: 2,
          images: systemImages3,
        },
        {
          index: 3,
          images: systemImages4,
        },
      ],
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    getStyle(item) {
      if (item.colorStatus) {
        return { "background-color": "#FBFBFB", "border-bottom": "6px solid #235DF3" };
      }
    },
    systemBtn(item, index) {
      let currentState = item.colorStatus;
      this.systemData.forEach((el) => {
        el.colorStatus = false;
      });
      item.colorStatus = !currentState;
      this.imageD = this.imgData[index].images;
    },
  },
};
</script>
 
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
.index_box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .index_top {
    width: 100%;
    height: 644px;
    position: relative;
    .index_top_img {
      width: 100%;
      height: 100%;
    }
    .index_top_company {
      width: inherit;
      position: absolute;
      top: 20%;
      font-size: 32px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      line-height: 21px;
      letter-spacing: 10px;
      text-align: center;
    }
    .index_top_container {
      width: 42%;
      height: 200px;
      position: absolute;
      top: 30%;
      left: 29%;
      font-size: 9px;
      font-weight: 400;
      color: #f8f5f5;
      line-height: 32px;
      letter-spacing: 2px;
      .top_container_text {
        margin-bottom: 20px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
      }
    }
  }
  .index_second {
    width: 85%;
    height: 682px;
    margin: 12px auto;
    margin-bottom: unset;
    display: flex;
    justify-content: space-between;
    .index_second_left {
      width: 263px;
      margin-top: 123px;
      margin-left: 184px;
      .second_left {
        display: flex;
        .second_left_line {
          width: 6px;
          height: 26px;
          background: #0068fe;
        }
        .second_left_word {
          font-size: 30px;
          font-family: SourceHanSansSC-Bold, SourceHanSansSC;
          font-weight: bold;
          color: #3e3e3e;
          line-height: 24px;
          letter-spacing: 10px;
          margin-left: 8px;
        }
      }
      .second_left_text {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3e3e3e;
        line-height: 25px;
        letter-spacing: 5px;
        margin-top: 20px;
      }
      .second_left_container {
        font-size: 14px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
        font-weight: 400;
        color: #3b3b3b;
        line-height: 20px;
        letter-spacing: 1px;
        margin-top: 35px;
      }
    }
    .index_second_right {
      width: 1026px;
      height: inherit;
    }
  }
  .index_third {
    width: 70%;
    height: 297px;
    background: rgba(216, 228, 255, 0.11);
    margin: 80px auto;
    margin-bottom: unset;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    .index_third_img {
      width: 514px;
      height: inherit;
      border-radius: 16px;
    }
  }
  .index_fourth {
    width: 70%;
    height: 297px;
    background: rgba(216, 228, 255, 0.11);
    margin: 160px auto;
    margin-bottom: unset;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    .index_fourth_img {
      width: 514px;
      height: inherit;
      border-radius: 16px;
      float: right;
    }
    .clear {
      clear: both;
    }
  }
  .index_xitong {
    width: 70%;
    margin: 210px auto;
    margin-bottom: unset;
    display: flex;
    .index_xitong_line {
      width: 6px;
      height: 26px;
      background: #0068fe;
    }
    .index_xitong_word {
      font-size: 30px;
      font-family: SourceHanSansSC-Bold, SourceHanSansSC;
      font-weight: bold;
      color: #3e3e3e;
      line-height: 24px;
      letter-spacing: 10px;
      margin-left: 8px;
    }
  }
  .index_xitong_text {
    width: 70%;
    margin: 28px auto;
    margin-bottom: unset;
    font-size: 18px;
    font-family: SourceHanSansSC-Normal, SourceHanSansSC;
    font-weight: 400;
    color: #3b3b3b;
    line-height: 27px;
    letter-spacing: 5px;
  }
  .index_xitong_container {
    width: 70%;
    height: 660px;
    margin: 32px auto;
    margin-bottom: unset;
    position: relative;
    .xitong_container_image {
      width: 100%;
      height: 420px;
      display: inline-block;
      overflow: hidden;
      .container_image {
        width: 100%;
        height: 420px;
      }
    }
    .xitong_container_container {
      width: 100%;
      height: 240px;
      position: absolute;
      bottom: 0;
      display: flex;
      .xitong_data {
        width: 335px;
        height: inherit;
        background-color: rgba(105, 108, 116, 0.06);
        .xitong_data_text {
          width: 240px;
          font-size: 20px;
          font-family: SSRuiYuanTi;
          color: #444444;
          font-weight: bold;
          line-height: 20px;
          letter-spacing: 1px;
          margin-left: 50px;
          padding-top: 71px;
          box-sizing: border-box;
        }
        .xitong_data_container {
          width: 220px;
          margin-left: 50px;
          margin-top: 18px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          vertical-align: middle;
          box-sizing: border-box;
          font-size: 14px;
          font-family: SourceHanSansSC-Normal, SourceHanSansSC;
          font-weight: 400;
          color: #3b3b3b;
          line-height: 20px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .index_footer{
    width: 70%;
    height: 320px;
    margin: 160px auto;
    margin-bottom: unset;
    padding-bottom: 160px;
    display: flex;
    .index_footer_left{
      width: 50%;
      height: inherit;
    }
    .index_footer_right{
      width: 50%;
      height: inherit;
      background-color: #FBFCFF;
      .footer_right_text{
        width: 432px;
        margin-left: 144px;
        font-size: 20px;
        font-family: SSRuiYuanTi;
        color: #444444;
        line-height: 20px;
        letter-spacing: 1px;
        font-weight: bold;
        margin-top: 114px;
      }
      .footer_right_container{
        width: 432px;
        margin-left: 144px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        vertical-align: middle;
        box-sizing: border-box;
        font-size: 14px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
        font-weight: 400;
        color: #3B3B3B;
        line-height: 25px;
        letter-spacing: 1px;
        margin-top: 24px;
      }
    }
  }
}
</style>