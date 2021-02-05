<template>
  <div class="el-header">
    <div class="logo">
      <img :src="Logo" alt />
      <span>衡学</span>
    </div>
    <el-menu
      :default-active="$route.path"
      StaticEnableDefaultPopOutImage="false"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="router"
      text-color='#2C2C2C'
      active-text-color="#4E75FF"
    >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/ranking">大学排名</el-menu-item>
      <el-submenu index="/studyplan">
        <template slot="title">学业规划</template>
        <el-menu-item>
          <a :href="'#' + '/studyplan' + '?num=0#spurt'">A_Leve课程</a>
        </el-menu-item>
        <el-menu-item>
          <a :href="'#' + '/studyplan' + '?num=1#spurt'">AP课程</a>
        </el-menu-item>
        <el-menu-item>
          <a :href="'#' + '/studyplan' + '?num=2#spurt'">IB课程</a>
        </el-menu-item>
        <el-menu-item>
          <a :href="'#' + '/studyplan' + '?num=3#spurt'">高考</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/promote">背景提升</el-menu-item>
      <!-- <el-menu-item index="/case">国内名校冲刺</el-menu-item> -->
      <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item  index="/login">登录</el-menu-item>
      <!-- <el-menu-item v-if="token" index="/admin">我的</el-menu-item>
      <el-menu-item v-else index="/login">登录</el-menu-item> -->
      
    </el-menu>
  </div>
</template>

<script>
import Logo from '@/assets/img/icon-l.png'
import { mapState } from 'vuex';
export default {

  data() {
    return {
      Logo:Logo,
      router: true,
      activeIndex: "",
    };
  },
  watch: {
    $route() {
      this.handleSelect(this.activeIndex);
    },
  },
  computed:{
   ...mapState(['token'])
  
  },

  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
  },
  mounted(){

  }
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  margin: 0 auto;
  //background-color: #fff;


  .logo {
    padding: 10px;
    display: flex;
    // align-items: center;
    img {
      height: 40px;
      width: 140px;

    }
    span {
      color: #4E75FF;
      font-family: SourceHanSansK-Bold;
      font-weight: 700;
      font-size: 30px;
      margin: 0 100px 0 50px;
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

}

a {
  text-decoration: none;
  color: #5a5a5a;
}
</style>
