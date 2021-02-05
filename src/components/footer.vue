<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="left">
          <img src="../assets/img/icon_footer.png" alt />
          <div>衡学教育</div>
        </div>
        <ul class="content-nav">
          <li>
            <p>衡学跃升线</p>
            <span>学业规划</span>
            <span>企业文化</span>
            <span>背景提升</span>
            <span>家庭规划</span>
            <span>职业生涯规划</span>
          </li>
          <li>
            <p>关于我们</p>
            <span>公司简介</span>
            <span>云链实验室</span>
            <span>专业导师</span>
          </li>
        </ul>
      </div>
      <div class="footer-right">
        <div class="website">
          <img src="../assets/img/code.png" alt="" />
          <span>衡学跃升线官方公众号</span>
        </div>
        <div class="website">
          <img src="../assets/img/code2.png" alt="" />
          <span>衡学教育官方公众号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 405px;
  overflow: hidden;
  background-color: #131313;
   white-space: nowrap;
  &-content {
    width: 1027px;
    margin: 0 auto;
    padding-top: 88px;
    display: flex;
    // justify-content: space-between;
    .footer-left {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-right: 201px;
      .left {
      
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 40px;
        margin-right: 142px;
        img {
          width: 115px;
          height: 32px;
          margin-bottom: 11px;
        }
        div {
          font-size: 22px;
          color: #fff;
          font-weight: 600;
          font-family: PingFang-SC-Semibold;
        }
      }
      .content-nav {
        display: flex;
        width: 281px;
         white-space: nowrap;
        li {
          display: flex;
          flex-direction: column;
          // padding: 0 20px;
          //justify-content: center;
          align-items: flex-start;
          margin-right: 101px;
          p {
            font-size: 22px;
            color: #fff;
            padding-bottom:28px;
            font-weight: 500;
            font-family: PingFang-SC-Semibold;
          }
          span {
            color: #bbb;
            font-weight: 300;
            padding-bottom:16px;
            font-size: 16px;
            font-family: PingFang-SC-Light;
          }
        }
      }
    }
  }

  &-right {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 0;
    .website {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 56px 0 0;
      img {
        width: 140px;
        height: 140px;
        border-radius: 10px;
        margin: 0 0 24px 0;
      }
      span {
        font-size: 16px;
        color: #fff;
        font-family: pingfangSc-medium;
       white-space: nowrap;
      }
    }
  }
}
</style>
