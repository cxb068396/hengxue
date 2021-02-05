<template>
  <div id="tab4">
    <div class="title">招生要求</div>
    <div class="content-img">
      <div class="bgc-img"></div>
      <div class="bgc-img"></div>
      <div class="bgc-img"></div>
      <div class="bgc-img"></div>
    </div>
    <div class="masters">
      <span class="master-title">本科</span>
      <span>85</span>
      <span class="eng">英语130</span>
      <span>85</span>
      <span>85</span>
    </div>
    <div class="masters">
      <span class="master-title">硕士</span>
      <span>85</span>
      <span>英语130</span>
      <span>85</span>
      <span>85</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
#tab4 {
  width: 100%;

  box-sizing: border-box;
}
.title {
  font-size: 18px;
  color: #4e75ff;
  text-align: center;
  margin-top: 5px;
    font-family: PangMenZhengDao;
}
.content-img {
  height: 80px;
  display: flex;
  justify-content: flex-end;
  margin: 55px 27px 30px;
  .bgc-img {
    width: 80px;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin: 0px 10px 0px 0;
  }
}
.masters {
  width: 460px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #515151;
  font-size: 20px;
  margin-block: 10px;
  .master-title {
    color: #4e75ff;
    font-size: 18px;
    font-weight: 500;
    margin: 0 50px 0 20px;
  }
 span:nth-child(2){
    margin-right: 43px;
  }
  span:nth-child(3){
    margin-right: 43px;
  }
  span:nth-child(4){
    margin-right: 69px;
  }
}
</style>