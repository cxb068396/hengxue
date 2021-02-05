<template>
  <div id="app">
    <el-container>
      <el-header v-show="isShow">
        <my-header  />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <my-footer v-show="isShow"/>
    </el-container>
  </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
export default {
  components: {
    "my-header": header,
    "my-footer": footer
  },

  data() {
    return {
      isShow:true
    };
  },
  watch: {
    $route(val) {
      console.log(val)
     if(val.path=='/ranking'){
       this.isShow=false
     }else if(val.path=='/login') {
       this.isShow=false;
     }
     else if(val.path.indexOf('/admin')!=-1) {
       this.isShow=false;
     }
     else{
       this.isShow=true
     }
  
    },
  },
  methods: {
   
    
  }
};
</script>

<style lang="scss">
@import './common/font/font.css';
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
   padding: 0;
  margin: 0;
 // overflow-x: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header{
  height: 98px !important;

}
.el-main {
  padding: 0 !important;
  background-color: #f9f9f9;
  overflow: hidden !important;
}

::-webkit-scrollbar{
  width: 12px;
  height: 0;
}
::-webkit-scrollbar-thumb{
  background-color: #CDCCCC;
  border-radius: 6px;
}
</style>
