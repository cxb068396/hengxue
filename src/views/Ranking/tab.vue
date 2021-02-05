<template>
  <div id="tab">
    <!-- 标题导航 -->
    <ul class="tabNav">
      <li v-for="(item, index) in tabs" :key="index" :class="{ active: tabIndex === index }" @click="changeTab(index)">{{ item.desc }}</li>
    </ul>
    <!-- slot中间表示插槽内容为空时显示的默认值 -->
    <!-- 每一个tab页的展示， keep-alive使得标签的组件实例能够在它们第一次被创建的时候缓存下来-->
    <div class="content">
      <div class="school-img">
        <img src="@/assets/home/bannar1.png" alt="" />
      </div>
      <tab1 v-show="tabIndex == 0" :schoolInfo='schoolInfo'></tab1>
      <tab2 v-show="tabIndex == 1" :schoolInfo='schoolInfo'></tab2>
      <tab3 v-show="tabIndex == 2" @openTuition="openTuition" :schoolInfo='schoolInfo'></tab3>
      <tab4 v-show="tabIndex == 3"></tab4>
      <tab5 v-show="tabIndex == 4"></tab5>
    </div>
  </div>
</template>
<script>
import tab1 from "./tabcompont/tab1.vue";
import tab2 from "./tabcompont/tab2.vue";
import tab3 from "./tabcompont/tab3.vue";
import tab4 from "./tabcompont/tab4.vue";
import tab5 from "./tabcompont/tab5.vue";
import { getSchoolInfo } from "@/api/ranking";
export default {
  components: {
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
  },
  data() {
    return {
      tabIndex: 0,
      transitionName: "",
      schoolname:0,
      schoolInfo:{}
    };
  },
  props: {
    tabs: {
      type: Array,
      default: ["tab1", "tab2", "tab3", "tab4", "tab5"],
    },
    currentTabComponent: {
      type: String,
    },
    // schoolInfo:{
    //   type: Object,
    //   default:{}
    // }
    school_name:{
      type:Number,
    }
  },
  methods: {
       //获取相关学校的信息
    getSchoolDesc(){
    //  console.log(this.school_name)
      var that=this
      getSchoolInfo(that.schoolname).then(res=>{
        if(res.code=='200'){
         that.schoolInfo=res.mes
         console.log(that.schoolInfo)
          // this.introduction=introduction
          // this.weights=weights
          // this.ranking=ranking
        }
      }).catch(err=>{})
    },
    openTuition(key) {
      this.$emit("openTuition", key);
    },
    // 改变tab卡片
    changeTab(params) {
      let that = this;
      that.tabIndex = params;
    //  that.$emit("update:currentTabComponent", that.tabs[params].id);
    },
  },
  watch: {
    // 监听当前显示下标的变化，当目的值>原始值，向右滑动，反之向左滑动
    tabIndex(to, from) {
      let that = this;
      that.transitionName = to > from ? "forward" : "backward";
    },
   'school_name':function(newVal,oldVal){
         this.schoolname=newVal
         this.getSchoolDesc()
          },
  },
  mounted() {
    // console.log(123)
  },
    created() {
    console.log(112,this.school_name)
  },
};
</script>
<style lang="less" scoped>
#tab {
  margin: 30px 14px;
  .tabNav {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #fff;
    margin-bottom: 20px;
    li {
      display: inline-block;
      flex: 1;
      color: #000;
      text-align: center;
      height: 108px;
      line-height: 108px;
      cursor: pointer;
      transition: all 0.5s ease;
      position: relative;

      font-family: YouSheBiaoTiHei;
    }
    li:last-child {
      margin-right: 0;
    }
    li:hover,
    .active {
      background-color: #4e75ff;
      color: #fff;
      transition: all 0.5s;
    }
  }
  .content {
    position: relative;
    width: 468px;
    overflow: hidden;
    height: 500px;
    background-color: #fff;
    .school-img {
      width: 468px;
      height: 153px;
      background-color: rgba(0, 0, 0, 0.5);
      img {
        width: 468px;
        height: 153px;
      }
    }
    .forward-enter-active,
    .forward-leave-active {
      transition: 0.5s all ease;
      transform: translateX(0);
    }
    .forward-enter {
      transform: translateX(100%);
    }
    .forward-enter-to {
      transform: translateX(0);
    }
    .forward-leave {
      transform: translate3d(0, 0, 0);
    }
    .forward-leave-to {
      transform: translate3d(-100%, 0, 0);
    }
    .backward-enter-active,
    .backward-leave-active {
      transition: all 0.5s;
    }
    .backward-leave {
      transform: translate3d(0, 0, 0);
    }
    .backward-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .backward-enter {
      transform: translate3d(-100%, 0, 0);
    }
    .backward-enter-to {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>