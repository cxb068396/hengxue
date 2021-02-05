<template>
  <div id="tab1">
    <div>
      <swiper :options="swiperOption" ref="swiperOption" class="swiperHeight">
        <swiper-slide class="swiper-slide">
          <div class="school-info">
            <div class="every-info">
              <span class="name">院校性质：</span>
              <span class="content">{{ introduction.property }}</span>
            </div>
            <div class="every-info">
              <span class="name">院校类型：</span>
              <span class="content">{{ introduction.types }}</span>
            </div>
            <div class="every-info">
              <span class="name">地理位置：</span>
              <span class="content">{{ introduction.city }}</span>
            </div>
            <div class="every-info">
              <span class="name">详细地址：</span>
              <span class="content">{{ introduction.address }}</span>
            </div>
            <div class="every-info">
              <span class="name">成立时间：</span>
              <span class="content">{{ introduction.estab_date }}</span>
            </div>
            <div class="every-info">
              <span class="name">学校人数：</span>
              <span class="content">{{ introduction.students }}</span>
            </div>
            <div class="every-info">
              <span class="name websit">网址：</span>
              <span class="content">{{ introduction.link }}</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="school-desc">
            <div class="school">学校简介：</div>
            <div class="desc">
              {{ introduction.introduction }}
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" id="pagination" slot="pagination"></div>
        <!-- 分页 -->
        <!-- <div v-show="showArrowRight" class="swiper-button-next" slot="button-next"></div> -->
        <!-- 箭头右 -->
        <!-- <div v-show="showArrowLeft" class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- 箭头左 -->
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
var vm = null;
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    schoolInfo: {
      type: Object,
    },
  },
  data() {
    return {
      introduction: {},
      showArrowLeft: false,
      showArrowRight: true,
      slide: [1, 2],
      //设置属性
      swiperOption: {
        //显示分页

        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: false,
        on: {
          click: function () {
            // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
            // console.log(this); // -> Swiper
            // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
            const realIndex = this.realIndex;
            vm.handClickSlider(realIndex);
          },
        },
      },
    };
  },
  watch: {
    schoolInfo: function (newVal, oldVal) {
      this.introduction = newVal.introduction;
      console.log("schoolInfo", newVal);
    },
  },
  created() {
    vm = this;
  },
  computed: {
    swiper() {
      return this.$refs.swiperOption.swiper;
    },
  },
  methods: {
    handClickSlider(index) {
      //可以做点击之后的进一步操作
      if (index == 1) {
        this.showArrowRight = false;
        this.showArrowLeft = true;
      } else if (index == 0) {
        this.showArrowLeft = false;
        this.showArrowRight = true;
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#tab1 {
  width: 100%;
  box-sizing: border-box;
}
// .swiperHeight{
//   height: 400px;
//   overflow-y: auto;
// }
.title {
  font-size: 18px;
  color: #4e75ff;
  text-align: center;
  margin-top: 5px;
}
.swiper-slide {
  width: 100%;
  height: 433px;
  background-color: #fff;
  .school-info {
    width: 400px;
    height: 300px;
    margin: 24px auto 0;
    .every-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 18px;
      color: #2b2b2b;
      margin-bottom: 10px;
      .name {
        margin-right: 12px;
        font-weight: 600;
      }
      .content {
        font-size: 16px;
      }
      .websit {
        text-indent: 2em;
      }
    }
  }

  .school-desc {
    width: 450px;
    margin: 14px auto 0;
    font-size: 18px;
    color: #2b2b2b;
    .school {
      font-weight: 600;
    }
    .desc {
      font-size: 15px;
      width: 450px;
      height: 250px;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
}

.swiper-button-prev {
  top: 160px;
  left: 434px;
}
.swiper-button-next {
  top: 160px;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 100px;
}
#pagination /deep/ .swiper-pagination-bullet {
  width: 91px;
  height: 6px;
  background: #dce4ff;
  text-align: center;
  border-radius: 0;
  opacity: 1;
  margin: 0;
}
#pagination /deep/ .swiper-pagination-bullet-active {
  background: #4e75ff;
  width: 91px;
  height: 6px;
}
</style>