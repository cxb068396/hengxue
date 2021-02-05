<template>
    <div class="container-left">
       <div v-if='token' class="login-button" @click="goAdmin">我的</div>
      <div v-else class="login-button" @click="goLogin">登录</div>
      <div class="routers">
        <span>
          <router-link to="/index">首页</router-link>
        </span>
         <span>
          <router-link to="/ranking" style='color:#FF8900'>大学排名</router-link>
        </span>
         <span>
          <router-link to="/studyplan">学业规划</router-link>
        </span>
         <span>
          <router-link to="/promote">背景提升</router-link>
        </span>
         <span>
          <router-link to="/case">成功案例</router-link>
        </span>
           <span>
          <router-link to="/about">关于我们</router-link>
        </span>
      </div>
    </div>
</template>
 
<script>
import { mapState } from 'vuex';
export default {
 
  data() {
    return {
    }
  },
  created() {},
  
  computed: {
   ...mapState(['token'])
  },
  methods:{
    goLogin(){
      this.$router.replace('/login')
    },
    goAdmin(){
      this.$router.push('admin');
    }
  },
  mounted() {
 
  }
};
</script>
 
<style lang="scss" scoped>
  .container-left {
    position: absolute;
    top: 40px;
    left: 24px;
    width: 132px;
    .login-button {
      height: 36px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      background-color: #4e75ff;
      font-size: 18px;
      font-weight: 500;
    }
    .routers {
      width: 100%;
      padding:18px 0 36px 0;
      background: #000;
      opacity: 0.68;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 18px;
      span {
        padding: 10px;
        a{
          font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        text-decoration: none;
        &:hover{
            color: #FF8900;
        }
        }
      }
    }
  }
</style>