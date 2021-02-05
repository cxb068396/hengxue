<template>
  <div class="studyPlan">
    <div class="studyPlan_header">
      <div class="header_img">
        <div class="header_title">iskill学力调查与评估系统</div>
        <div class="header_desc">定制你的专属规划</div>
      </div>

      <div class="gist">
        <div class="title">科学的调查评估依据</div>
        <div class="subtitle">iSkill学力调查与评估系统以一种科学的方法调查评估学生受学校教育而在内部认知和外部行为方面的积极变化程度。</div>
      </div>
    </div>


    <!--评估表单-->
    <div id="spurt" class="study_form" @click="goLogin">
      <div class="study_left">
        <div class="study_left_item" v-for="(item, index) in navs" :class="{ active: index == num }" @click="tab(index)" :key="index">{{ item }}</div>
      </div>
      <div class="study_right">
        <alevel v-show="num == 0" />
        <advancedPlacement v-show="num == 1" />
        <ib v-show="num == 2" />
        <gaokao v-show="num == 3" />
      </div>
    </div>

    <!--学历发展因素-->
    <div class="factor">
      <div class="factor_header">
        <img src="@/assets/plan/test.png" alt="" />
        <div class="header_right">
          <div class="what">想知道更多实测数据吗？</div>
          <div class="test">那就快来填写问卷测试吧！</div>
          <div class="btn">点击填写问卷</div>
        </div>
      </div>
      <div class="factor_middle">
        <div class="middle_title">学力发展的影响因素</div>
        <div class="middle_desc">学力是学生因学校教育而在内部认知与外部行为发生方面的积极变化，具体包括认知与思维力、行为力、动力、效力。</div>
      </div>
      <div class="factor_fotter">
        <div class="fotter_navs">
          <div
            class="navs_item"
            v-for="(item, index) in fotterList"
            :class="{ active_item: index == current }"
            @click="navsChange(index)"
            :key="index"
          >
            <img :src="item.icon" alt="" />
            <div class="item_name" :class="{ item_name_active: index == current }">{{ item.name }}</div>
            <div class="item_desc" :class="{ item_desc_active: index == current }">{{ item.desc }}</div>
          </div>
        </div>
        <div class="fotter_content">
          <course v-show="current == 0" />
          <teacher v-show="current == 1" />
          <school v-show="current == 2" />
          <student v-show="current == 3" />
        </div>
      </div>
    </div>
    <el-tooltip placement="top" content="返回顶部">
      <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="0"></back-to-top>
    </el-tooltip>
  </div>
</template>
 
<script>
import BackToTop from "@/components/BackToTop";
import alevel from "./alevel.vue";
import gaokao from "./gaokao.vue";
import advancedPlacement from "./advancedPlacement.vue";
import ib from "./IB.vue";
import course from "./navsContent/course";
import student from "./navsContent/student";
import teacher from "./navsContent/teacher";
import school from "./navsContent/school";
import { getToken } from '@/utils/token.js'

export default {
  components: { BackToTop, alevel, gaokao, advancedPlacement, ib, course, school, teacher, student },
  data() {
    return {
      navs: ["A-LEVEL", "AP课程", "IB课程", "高考"],
      num: 0,
      current: 0,
      fotterList: [
        {
          icon: require("@/assets/plan/course.png"),
          name: "课程",
          desc: "课程是如何影响学力发展的",
        },
        {
          icon: require("@/assets/plan/teacher.png"),
          name: "老师",
          desc: "老师是如何影响学力发展的",
        },
        {
          icon: require("@/assets/plan/school.png"),
          name: "院校",
          desc: "院校是如何影响学力发展的",
        },
        {
          icon: require("@/assets/plan/student.png"),
          name: "学生",
          desc: "学生是如何影响学力发展的",
        },
      ],
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "50%",
        "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1", // 按钮的背景颜色 The background color of the button
      },
    };
  },
  created() {},

  computed: {},
  methods: {
    tab(index) {
      console.log(index);
      this.num = index;
    },
    navsChange(index) {
      console.log(index);
      this.current = index;
    },
    goLogin(){
      if(!getToken()){
       this.$router.replace('/login')
      }
    },
    
  },
  watch:{
    num:function(newV,oldV){
      if(newV){
           window.scrollTo(0,1032);
      }
    }
  },
  mounted() {
    console.log(this.$route.query.num )
    this.num = this.$route.query.num ? this.$route.query.num : 0;
  
  },
};
</script>
 
<style lang="scss" scoped>
.studyPlan {
  background: #f6f6f6;
}
.studyPlan_header {
  .header_img {
    background: url("~@/assets/plan/study_header.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    width: 100%;
    height: 600px;
    position: relative;
    .header_title {
      font-size: 56px;
      font-family: SourceHanSansK-Bold;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
      top: 177px;
      right: 436px;
    }
    .header_desc {
      font-size: 32px;
      font-family: SourceHanSansK-Medium;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      top: 284px;
      right: 436px;
    }
  }

  .gist {
    width: 100%;
    padding: 120px 0 158px 0;
    background-color: #fff;
    text-align: center;
    .title {
      font-size: 32px;
      font-family: STHeiti;
      color: #191919;
      line-height: 32px;
      letter-spacing: 2px;
    }
    .subtitle {
      font-size: 20px;
      font-family: SourceHanSansSC-Normal, SourceHanSansSC;
      font-weight: 400;
      color: #6d6d6d;
      width: 686px;
      margin: 50px auto;
    }
  }
}
.study_form {
  display: flex;
  justify-content: space-between;
  .study_left {
    width: 280px;
    margin-right: 32px;
    .study_left_item {
      width: 280px;
      height: 227px;
      background-color: #fff;
      text-align: center;
      line-height: 227px;
      font-family: PangMenZhengDao;
      color: #424242;
      font-size: 20px;
      cursor: pointer;
    }
    .active {
      background: #4e75ff;
      box-shadow: 43px -30px 57px 0px rgba(5, 5, 5, 0.03), 28px 14px 49px 0px rgba(0, 0, 0, 0.08);
      color: #fff;
    }
  }
  .study_right {
    flex: 1;
  }
}
.factor {
  width: 100%;
  padding: 81px 0;
  background-color: #fff;
  margin: 0 auto;
  &_header {
    display: flex;
    align-items: center;
    margin-bottom: 198px;
    justify-content: center;
    img {
      width: 748px;
      height: 367px;
      margin-right: 171px;
    }
    .header_right {
      display: flex;
      flex-direction: column;
      .what {
        font-size: 24px;
        font-family: SourceHanSansSC-Medium, SourceHanSansSC;
        font-weight: 500;
        color: #2c2c2c;
      }
      .test {
        font-size: 18px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
        font-weight: 400;
        color: #464646;
        margin: 14px 0 46px 0;
      }
      .btn {
        width: 182px;
        height: 40px;
        background: #4e75ff;
        border-radius: 5px;
        font-size: 16px;
        font-family: SourceHanSansSC-Medium, SourceHanSansSC;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  &_middle {
    text-align: center;
    .middle_title {
      font-size: 28px;
      font-family: SourceHanSansSC-Medium;
      font-weight: 500;
      color: #2f2f2f;
      margin-bottom: 16px;
    }
    .middle_desc {
      width: 659px;
      font-size: 16px;
      font-family: SourceHanSansK-Normal;
      margin: 0 auto;
      color: #2f2f2f;
      line-height: 32px;
    }
  }
  &_fotter {
    margin-top: 84px;
    .fotter_navs {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid #efefef;
      width: 1200px;
      padding-bottom: 46px;
      margin: 0 auto;
      .navs_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 68px;
        position: relative;
        img {
          width: 32px;
          height: 32px;
        }
        .item_name {
          font-size: 18px;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #595959;
          margin: 14px 0 7px 0;
        }
        .item_name_active {
          color: #4c75ff;
        }
        .item_desc {
          font-size: 14px;
          font-family: SourceHanSansK-Normal;
          font-weight: 400;
          color: #9c9c9c;
        }
        .item_desc_active {
          color: #567dff;
        }
      }

      .active_item::before {
        content: "";
        width: 120px;
        height: 6px;
        background: #4c75ff;
        border-radius: 6px;
        position: absolute;
        left: 30px;
        bottom: -46px;
      }
    }
    .fotter_content {
      margin-top: 64px;
    }
  }
}
</style>