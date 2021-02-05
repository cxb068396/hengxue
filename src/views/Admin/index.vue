<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside >
        <el-menu   :default-active="$route.path" class="el-menu-vertical-demo" router text-color="#2C2C2C" active-text-color="#4E75FF"  @select="handleSelect">
          <el-menu-item index="/admin/home">
            <i class="el-icon-star-off"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  watch: {
    $route() {
      this.handleSelect(this.activeIndex);
    },
  },
  computed: {},
  mounted() {},
   methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
  },
};
</script>
 
<style lang="scss" scoped>
.el-aside{
  width: 200px !important;
  height: 100vh;
  background-color: #eee;
}
</style>