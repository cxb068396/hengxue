<template>
  <div id="tab3">
    <div>
      <swiper :options="swiperOption" ref="swiperOption">
        <swiper-slide class="swiper-slide">
          <div class="title">专业排名权重</div>
          <radar :weights="weights" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="title">各专业学费详情</div>
          <div class="clickbtn" @click="openTuition">点击查看</div>
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
import radar from "../echarts/radar";
var vm = null;
export default {
  components: {
    swiper,
    swiperSlide,
    radar,
  },
  props: {
    schoolInfo: {
      type: Object,
    },
  },
  watch: {
    schoolInfo: function (newVal, oldVal) {
      this.weights = newVal.weights;
      console.log("weights", newVal);
    },
  },
  data() {
    return {
      weights: [],
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
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper

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
    openTuition() {
      this.$emit("openTuition", 123);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#tab3 {
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
.clickbtn {
  color: #4e75ff;
  font-size: 16px;
  width: 131px;
  height: 43px;
  border: 1px solid #4e75ff;
  text-align: center;
  line-height: 43px;
  margin: 135px 169px;
}
.swiper-slide {
  width: 100%;
  height: 433px;
  background-color: #fff;
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