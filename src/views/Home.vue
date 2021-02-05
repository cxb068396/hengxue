<template>
  <div class="homePage">
    <!--轮播图 start-->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in carousels" :key="index">
        <img style="width: 100%; height: 100%" :src="item.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" id="pagination" slot="pagination"></div>
    </swiper>
    <!--轮播图 end-->
    <!--热门服务推荐 start-->
    <div class="class-title">
      <div class="xian"></div>
      热门服务推荐
    </div>
    <div class="hot-container">
      <div class="container-left">
        <div class="left-contont" v-for="(item, index) in hotList" :key="index">
          <img v-lazy="item.img" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
      <div class="container-right">
        <div class="right-contont">
          <img v-lazy="recommend3" alt="" />
          <div class="title">A-LEVEL</div>
          <div class="content">名师一对一辅导</div>
          <div class="desc">冲刺A* 开启您的留学名校之路</div>
        </div>
        <div class="right-contont">
          <img  v-lazy="recommend4" alt="" />
          <div class="title">科研申请</div>
          <div class="content">名师一对一辅导</div>
          <div class="desc">匹配梦校科研课题 冲顶理想名校</div>
        </div>
        <div class="right-contont-last"  v-lazy:background-image="{src:recommend6}">
          <div class="about">关于衡学</div>
          <div class="more">更多详情欢迎咨询</div>
        </div>
      </div>
    </div>
    <!--热门服务推荐 end-->

    <!--衡学跃升线 start-->
    <div class="second-bg">
      <div class="class-title">
        <div class="xian"></div>
        衡学跃升线
      </div>
      <div class="desc">衡学教育利用自身平台优势，致力于打造学员专属的学业规划、背景提升等，助力圆梦。</div>
      <div class="second-content">
        <div class="s-content" v-for='(item,index) in roomList' :key='index'>
          <div class="s-content-img" v-lazy:background-image="{src:item.bg}">
            <div class="about">{{item.about}}</div>
            <div class="more">{{item.more}}</div>
          </div>
          <div class="second-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
    <!--衡学跃升线 end-->

    <!--成功案例 start-->
    <!-- <div class="success-bg">
      <div class="class-title"><div class="xian"></div>成功案例</div>
      <div class="carousel">
        <swiper :options="myswiperOption" ref="myswiperOption">
          <swiper-slide>
            <div class="case">
              <div class="top">
                <img
                  class="rectangular"
                  src="../assets/home/rectangular.png"
                  alt=""
                />
                <div class="emblem">
                  <img
                    class="aodaliya"
                    src="../assets/home/aodaliya.png"
                    alt=""
                  />
                  <div>澳大利亚</div>
                </div>
              </div>
              <div class="middle">
                <div class="middle-content">
                  <div class="image">
                    <img src="../assets/home/badge.png" alt="" />
                  </div>
                  <div class="school">悉尼大学</div>
                  <div class="english-name">The University of Sydney</div>
                </div>
              </div>
              <div class="bottom">
                <div class="student-name">W同学</div>
                <div class="abstract">案例简介</div>
                <div class="abstract-content">
                  申请悉尼大学硕士，经过7个月的努力，成功上岸，今年6月份收到哈佛大学录取通知书，获得录取是经过专业的学习规划和一对一辅导。
                </div>
              </div>
            </div>
          </swiper-slide>
            <swiper-slide>
            <div class="case">
              <div class="top">
                <img
                  class="rectangular"
                  src="../assets/home/rectangular.png"
                  alt=""
                />
                <div class="emblem">
                  <img
                    class="aodaliya"
                    src="../assets/home/aodaliya.png"
                    alt=""
                  />
                  <div>澳大利亚</div>
                </div>
              </div>
              <div class="middle">
                <div class="middle-content">
                  <div class="image">
                    <img src="../assets/home/badge.png" alt="" />
                  </div>
                  <div class="school">悉尼大学</div>
                  <div class="english-name">The University of Sydney</div>
                </div>
              </div>
              <div class="bottom">
                <div class="student-name">W同学</div>
                <div class="abstract">案例简介</div>
                <div class="abstract-content">
                  申请悉尼大学硕士，经过7个月的努力，成功上岸，今年6月份收到哈佛大学录取通知书，获得录取是经过专业的学习规划和一对一辅导。
                </div>
              </div>
            </div>
          </swiper-slide>
            <swiper-slide>
            <div class="case">
              <div class="top">
                <img
                  class="rectangular"
                  src="../assets/home/rectangular.png"
                  alt=""
                />
                <div class="emblem">
                  <img
                    class="aodaliya"
                    src="../assets/home/aodaliya.png"
                    alt=""
                  />
                  <div>澳大利亚</div>
                </div>
              </div>
              <div class="middle">
                <div class="middle-content">
                  <div class="image">
                    <img src="../assets/home/badge.png" alt="" />
                  </div>
                  <div class="school">悉尼大学</div>
                  <div class="english-name">The University of Sydney</div>
                </div>
              </div>
              <div class="bottom">
                <div class="student-name">W同学</div>
                <div class="abstract">案例简介</div>
                <div class="abstract-content">
                  申请悉尼大学硕士，经过7个月的努力，成功上岸，今年6月份收到哈佛大学录取通知书，获得录取是经过专业的学习规划和一对一辅导。
                </div>
              </div>
            </div>
          </swiper-slide>
            <swiper-slide>
            <div class="case">
              <div class="top">
                <img
                  class="rectangular"
                  src="../assets/home/rectangular.png"
                  alt=""
                />
                <div class="emblem">
                  <img
                    class="aodaliya"
                    src="../assets/home/aodaliya.png"
                    alt=""
                  />
                  <div>澳大利亚</div>
                </div>
              </div>
              <div class="middle">
                <div class="middle-content">
                  <div class="image">
                    <img src="../assets/home/badge.png" alt="" />
                  </div>
                  <div class="school">悉尼大学</div>
                  <div class="english-name">The University of Sydney</div>
                </div>
              </div>
              <div class="bottom">
                <div class="student-name">W同学</div>
                <div class="abstract">案例简介</div>
                <div class="abstract-content">
                  申请悉尼大学硕士，经过7个月的努力，成功上岸，今年6月份收到哈佛大学录取通知书，获得录取是经过专业的学习规划和一对一辅导。
                </div>
              </div>
            </div>
          </swiper-slide>
            <swiper-slide>
            <div class="case">
              <div class="top">
                <img
                  class="rectangular"
                  src="../assets/home/rectangular.png"
                  alt=""
                />
                <div class="emblem">
                  <img
                    class="aodaliya"
                    src="../assets/home/aodaliya.png"
                    alt=""
                  />
                  <div>澳大利亚</div>
                </div>
              </div>
              <div class="middle">
                <div class="middle-content">
                  <div class="image">
                    <img src="../assets/home/badge.png" alt="" />
                  </div>
                  <div class="school">悉尼大学</div>
                  <div class="english-name">The University of Sydney</div>
                </div>
              </div>
              <div class="bottom">
                <div class="student-name">W同学</div>
                <div class="abstract">案例简介</div>
                <div class="abstract-content">
                  申请悉尼大学硕士，经过7个月的努力，成功上岸，今年6月份收到哈佛大学录取通知书，获得录取是经过专业的学习规划和一对一辅导。
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div> -->
    <!--成功案例 end-->

    <div class="content-three">
      <div class="content">
        <div class="partner">合作伙伴</div>
        <div class="academy">
          <div class="companion">
            <img src="@/assets/home/school_badge3.png" alt="" />
            <div class="name">浙江大学</div>
          </div>
          <div class="companion">
            <img src="@/assets/home/school_badge1.png" alt="" />
            <div class="name">浙江财经学院</div>
          </div>
          <div class="companion">
            <img src="@/assets/home/school_badge2.png" alt="" />
            <div class="name">中国农业科院农产品加工研究所</div>
          </div>
          <div class="companion">
            <!-- <img src="@/assets/home/school_badge1.png" alt="" />
            <div class="name">浙江财经学院</div> -->
          </div>
        </div>
      </div>
    </div>
    <side-bar></side-bar>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
var vm = null;
import SideBar from "@/components/SideBar/index";
import recommend3 from '@/assets/home/recommend3.png'
import recommend4 from '@/assets/home/recommend4.png'
import recommend6 from '@/assets/home/recommend6.png'
export default {
  components: {
    swiper,
    swiperSlide,
    SideBar,
  },
  data() {
    return {
      recommend3:recommend3,
      recommend4:recommend4,
      recommend6:recommend6,
      activeIndex: 0,
      hotList: [
        {
          img: require("@/assets/home/recommend1.png"),
          title: "出国留学",
          desc: "优质的一站式服务",
        },
        {
          img: require("@/assets/home/recommend2.png"),
          title: "实验室对接",
          desc: "助力实验室对接",
        },
      ],
      carousels: [
        {
          img: require("@/assets/home/bannar1.png"),
        },
        {
          img: require("@/assets/home/bannar1.png"),
        },
      ],
      roomList:[
        {
          bg:require("@/assets/home/familyplan.png"),
          about:'家庭规划',
          mome:'Family Planning',
          desc:'衡学服务不同家庭，提供定制规划，让生活更美好。提供定制规划，让生活更美好。'
        },
           {
          bg:require("@/assets/home/academic.png"),
          about:'学业规划',
          mome:'Academic Planning',
          desc:'了解求学者性格特点、能力特点等，以及未来社会需要，精准定位人生阶段的事业目标和。'
        },
            {
          bg:require("@/assets/home/background.png"),
          about:'背景提升',
          mome:'Background Enhancement',
          desc:'助力背景提升，挖掘自身独特的价值和竞争力，区别于其他竞争者，让留学更简单。'
        },


           {
          bg:require("@/assets/home/career.png"),
          about:'就业指导',
          mome:'Career Guidance',
          desc:'一站式求职方案，根据学生背景和求职方向，提供个性化定制化的就业解决方案。'
        },
           {
          bg:require("@/assets/home/careerplan.png"),
          about:'职业生涯规划',
          mome:'Career Plan',
          desc:'一站式求职方案，根据学生背景和求职方向，提供个性化定制化的就业解决方案。'
        },
            {
          bg:require("@/assets/home/vocational.png"),
          about:'职业培训',
          mome:'Vocational Training',
          desc:'一站式求职方案，根据学生背景和求职方向，提供个性化定制化的就业解决方案。'
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        on: {
          click: function () {
            // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
            // console.log(this); // -> Swiper
            // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
            const realIndex = this.realIndex;
            vm.handClickSlider(realIndex);
          },
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
      // myswiperOption: {
      //   isSwipe: false,
      //   slidesPerView: 4,
      //   spaceBetween: 10,
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
      // },
    };
  },
  created() {
    vm = this;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    // swiper() {
    //   return this.$refs.myswiperOption.swiper;
    // },
  },

  methods: {
    handClickSlider(index) {
      //可以做点击之后的进一步操作
      console.log(`我点击的是第${index + 1}张图 `);
    },
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
  },
};
</script>
<style lang="scss" scoped>
//轮播图样式
.homePage .swiper-container {
  position: relative;
  width: 100%;
  height: 644px;
}
.homePage .swiper-container .swiper-slide {
  width: 100%;
  text-align: center;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 37px;
  text-align: right; 
  left: -100px;
}
#pagination /deep/ .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  text-align: center;
  border-radius: 0;
  opacity: 1;
  background: #fff;
}
#pagination /deep/ .swiper-pagination-bullet-active {
  width: 20px;
  background: #4e75ff;
}

//热门服务推荐
.class-title {
  font-size: 32px;
  font-weight: 600;
  color: #191919;
  line-height: 56px;
  letter-spacing: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  font-family: PingFang-SC-Semibold;
  .xian {
    width: 5px;
    height: 24px;
    background: #4e75ff;
    margin-right: 20px;
  }
}
.hot-container {
  margin: 0 260px;
  display: flex;
  // justify-content: space-around;
  align-items: flex-start;
  .container-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 52px;
    .left-contont {
      display: flex;
      height: 943px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 52px;
      background: #ffffff;
      img {
        width: 674px;
        height: 717px;
      }
      .title {
        font-size: 24px;
        font-weight: 500;
        color: #000000;
        line-height: 45px;
        letter-spacing: 2px;
        margin: 56px 0 24px 0;
        font-family: PingFang-SC-Semibold;
      }
      .desc {
        font-size: 18px;
        font-weight: 400;
        color: #636363;
        line-height: 28px;
        letter-spacing: 1px;
        padding-bottom: 73px;
      }
    }
  }
  .container-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .right-contont {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 52px;
      background: #ffffff;
      font-size: 20px;
      font-weight: 400;
      color: #636363;
      line-height: 28px;
      letter-spacing: 1px;
      height: 646px;
      img {
        width: 674px;
        height: 449px;
      }
      .title {
        font-size: 28px;
        font-weight: 500;
        color: #292929;
        line-height: 45px;
        letter-spacing: 2px;
        margin-top: 32px;
      }
      .content {
        margin: 12px 0;
      }
      .desc {
        padding-bottom: 45px;
      }
    }
    .right-contont-last {
      width: 674px;
      height: 541px;
      // background: url("../assets/home/recommend6.png");
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .about {
        font-size: 24px;
        font-family: SourceHanSansSC-Bold, SourceHanSansSC;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 22px;
        letter-spacing: 2px;
      }
      .more {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 3px;
      }
    }
  }
}
//衡学跃升线
.second-bg {
  background-color: #fff;
  .class-title {
    font-size: 28px;
    font-weight: 600;
    color: #191919;
    line-height: 56px;
    letter-spacing: 8px;
    padding: 100px 0 44px 0;
  }
  .desc {
    font-size: 20px;
    font-weight: 400;
    color: #949494;
    line-height: 36px;
    letter-spacing: 1px;
    width: 656px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 58px;
    font-family: PingFang-SC-Regular;
  }
  .second-content {
    margin: 0 260px;
    width: 1420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .s-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 100px;
      .s-content-img {
        width: 451px;
        height: 345px;
        margin-bottom: 24px;

        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .about {
          font-size: 24px;
          font-family: SourceHanSansSC-Bold, SourceHanSansSC;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 22px;
          letter-spacing: 2px;
        }
        .more {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 3px;
        }
      }

      .second-desc {
        font-size: 18px;
        font-weight: 400;
        color: #4c4c4c;
        line-height: 36px;
        letter-spacing: 1px;
        width: 391px;
        display: flex;
        justify-content: flex-start;
        font-family: PingFang-SC-Regular;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
//成功案例
.success-bg {
  background-color: #fafaff;
  .class-title {
    font-size: 28px;
    font-weight: 600;
    color: #191919;
    line-height: 56px;
    letter-spacing: 8px;
    padding: 100px 0;
  }
  .carousel {
    width: 1400px;
    margin: 0 260px;
    position: relative;
    padding-bottom: 140px;
    .swiper-container {
      height: 588px;
    }
    .swiper-button-prev {
      width: 60px;
      height: 60px;
      background: url("../assets/home/arrow-left.png");
      background-size: 100% 100%;
      top: 268px;
      left: -80px;
      background-color: #fff;
      border-radius: 50%;
    }
    .swiper-button-next {
      width: 60px;
      height: 60px;
      background: url("../assets/home/arrow-right.png");
      background-size: 100% 100%;
      top: 268px;
      right: -70px;
      border-radius: 50%;
    }
    .case {
      width: 332px;
      height: 588px;
      background-color: #fff;
      .top {
        position: relative;
        height: 105px;
        .rectangular {
          position: absolute;
          top: 0;
          left: 0;
        }
        .emblem {
          position: absolute;
          top: 18px;
          left: 27px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .aodaliya {
            margin: 0 0 1px 0;
          }
          div {
            font-size: 14px;
            color: #3f3f3f;
          }
        }
      }
      .middle {
        width: 332px;
        height: 147px;
        background: #4e75ff;
        position: relative;
        .middle-content {
          position: absolute;
          top: 15%;
          left: 50%;
          width: 100%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          color: #ffffff;
          .image {
            width: 111px;
            height: 111px;
            background-color: #fff;
            border-radius: 50%;
            position: relative;

            img {
              width: 65px;
              height: 69px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .school {
            font-size: 22px;
            line-height: 30px;
            letter-spacing: 6px;
          }
          .english-name {
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 22px;
        .student-name {
          margin: 22px 0 25px 0;
          font-weight: 500;
          color: #414141;
          line-height: 30px;
        }
        .abstract {
          color: #313131;
          line-height: 30px;
        }
        .abstract-content {
          width: 273px;
          margin-top: 18px;
          color: #868686;
          font-size: 18px;
          line-height: 25px;
          text-align: left;
        }
      }
    }
  }
}
.content-three {
  width: 100%;
  height: 736px;
  overflow: hidden;
  background: url("~@/assets/home/bg-three.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  .content {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    .partner {
      font-size: 32px;
      font-family: pingfangSc-medium;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 2px;
      text-align: center;
      margin-top: 118px;
      margin-bottom: 52px;
    }
    .academy {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .companion {
        width: 498px;
        height: 188px;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
        img {
          width: 56px;
          height: 56px;
          margin-right: 12px;
        }
        .name {
          font-size: 20px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #000000;
        }
      }
    }
  }
}
</style>

