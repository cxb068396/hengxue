<template>
<div class="footer-drawer">
      <div class="leftClick" @click="footerbtnClick" :class="{ footerbtn: isfootershow }">
        <img src="@/assets/rank/arrow-left.png" alt="" />
      </div>
      <div class="gloabBtn" :class="{ footerdraw: isfootershow }">
        <div class="imgbtn" @click="onSideMenuClick('consult')">
          <img src="@/assets/icons/icon-consult@2x.png" alt="" />
          <div>在线客服</div>
        </div>
        <div class="imgbtn">
          <img src="@/assets/icons/icon-survey@2x.png" alt="" />
          <div>问卷调查</div>
        </div>
        <div class="imgbtn">
          <img src="@/assets/icons/icon-test@2x.png" alt="" />
          <div>托福/雅思测试</div>
        </div>
        <div class="imgbtn">
          <img src="@/assets/icons/icon-airline@2x.png" alt="" />
          <div>出国留学</div>
        </div>
      </div>
    </div>
</template>
 
<script>

export default {
 
  data() {
    return {
         isfootershow: false,
    }
  },
  created() {},
  methods: {
       footerbtnClick() {
      this.isfootershow = !this.isfootershow;
    },
    onSideMenuClick(flag){
         this.$emit('closedraw')
          this.isfootershow=false
        if (flag === "consult") {
        try {
          this.$chat();

        } catch (err) {
          console.log(err);
        }
      }
    }
  },
  
  computed: {
 
  },
  mounted() {
 
  }
};
</script>
 
<style lang="scss" scoped>
.footer-drawer {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .leftClick {
    width: 64px;
    height: 84px;
    position: fixed;
    z-index: 1000;
    bottom: 0px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    right: 0;
    background: #57638e;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .gloabBtn {
    position: fixed;
    z-index: 1000;
    bottom: 0px;
    width: 436px;
    height: 84px;
    background: #fff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    right: -436px;
    display: flex;
    .imgbtn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      font-size: 13px;
      color: #3d3d3d;
      &:hover {
        font-size: 17px;
        color: #4e75ff;
        font-weight: 500;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .footerbtn {
    right: 436px;
  }
  .footerdraw {
    right: 0;
  }
}
</style>