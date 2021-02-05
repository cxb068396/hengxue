// 背景提升
<template>
  <div class="promote_container">
    <!--背景提升的解释-->
    <div class="explain">
      <div class="explain_title">
        <div class="title">背景提升 助力留学申请</div>
        <div class="explain_promote">
          <div class="what_is" v-for="(item, index) in promote" :key="index">
            <div class="what_is_promote">{{ item.title }}</div>
            <div class="img_desc">
              <img v-lazy="item.img" alt="" />
              <div class="desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--热门专业科研课题申请-->
    <div class="apply_for">
      <div class="tabs">
        <div class="tabs_title">热门专业科研课题申请</div>
        <div class="navs">
          <div class="navs_item" v-for="(item, index) in navs" @click="tabClick(index)" :class="num == index ? 'navs_click' : ''" :key="index">
            {{ item.name }}
          </div>
        </div>
        <div class="tabs_content">
          <div class="content" v-for="(item, index) in list[num].desc" :key="index">
            <img v-lazy="item.icon" alt="" />
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!--科研申请的解释-->
    <div class="research">
      <img v-lazy="search1" alt="" />
      <div class="desc_content">
        <div class="what_is_research">科研申请</div>
        <div class="content">
          <div class="what_is">什么是科研申请？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探…
          </div>
        </div>
        <div class="content">
          <div class="what_is">什么是科研申请？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探…
          </div>
        </div>
        <div class="content">
          <div class="what_is">什么是科研申请？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探…
          </div>
        </div>
      </div>
    </div>

    <!--论文发表-->
    <div class="paper">
      <div class="paper_left">
        <div class="paper_left_title">论文发表</div>
        <div class="paper_left_content">
          <div class="paper_left_what">什么样的论文最受名校青睐？</div>
          <div class="paper_left_desc">
            实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。
          </div>
        </div>
        <div class="paper_left_content">
          <div class="paper_left_what">论文该怎么去写？</div>
          <div class="paper_left_desc">
            美国名校招生官真正感兴趣的是你在课外活动中学到了什么、做了什么、有什么感悟和成长。所以符合你的专业的实习经历这才能给你申请加分。
          </div>
        </div>
        <div class="paper_left_content">
          <div class="paper_left_what">论文如何发表？</div>
          <div class="paper_left_desc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探…
          </div>
        </div>
      </div>
      <div class="paper_right">
        <img v-lazy="search2" alt="" />
      </div>
    </div>
    <!--实验室申请-->
    <div class="labapply">
      <div class="labcontent">
        <div class="labtitle">实验室申请</div>
        <div class="labcontent_items">
          <div class="labcontent_item" v-for="(item, index) in labapply" :key="index">
            <img v-lazy="item.img" alt="" />
            <div class="labcontent_what">{{ item.what }}</div>
            <div class="labcontent_desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--实习提升-->
    <div class="practice">
      <img v-lazy="promote1" alt="" />
      <div class="desc_content">
        <div class="what_is_research">实习提升</div>
        <div class="content">
          <div class="what_is">为什么我们要实习？</div>
          <div class="whatdesc">
            实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。
          </div>
        </div>
        <div class="content">
          <div class="what_is">实习该怎么做呢？</div>
          <div class="whatdesc">
            美国名校招生官真正感兴趣的是你在课外活动中学到了什么、做了什么、有什么感悟和成长。所以符合你的专业的实习经历这才能给你申请加分。
          </div>
        </div>
        <div class="content">
          <div class="what_is">实习对背景提升的影响？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探索未知世界的过程。
          </div>
        </div>
      </div>
    </div>
    <!--竞赛-->
    <div class="competition">
      <div class="desc_content">
        <div class="what_is_research">竞赛</div>
        <div class="content">
          <div class="what_is">什么样的竞赛参与会成为你的加分项？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探索未知世界的过程…
          </div>
        </div>
        <div class="content">
          <div class="what_is">怎么报名竞赛？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探索未知世界的过程…
          </div>
        </div>
        <div class="content">
          <div class="what_is">竞赛成绩对背景提升的影响？</div>
          <div class="whatdesc">
            科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识探索未知世界的过程…
          </div>
        </div>
      </div>
      <img v-lazy="promote2" class="" alt="" />
    </div>

    <!--课外活动-->
    <div class="labapply">
      <div class="labcontent">
        <div class="labtitle">课外活动</div>
        <div class="labcontent_items">
          <div class="labcontent_item" v-for='(item,index) in activities' :key='index'>
            <img v-lazy='item.img' alt="" />
            <div class="labcontent_what">{{item.what}}</div>
            <div class="labcontent_desc">
              {{item.desc}}
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search1 from "@/assets/promote/search1.png";
import search2 from "@/assets/promote/search2.png";
import promote1 from "@/assets/promote/promote1.png";
import promote2 from "@/assets/promote/promote2.png";

export default {
  data() {
    return {
      search1: search1,
      search2: search2,
      promote1: promote1,
      promote2: promote2,
      promote: [
        {
          title: "背景提升 助力留学申请",
          img: require("@/assets/promote/header1.png"),
          desc:
            "留学背景提升是指在学习成绩（GPA）和标准化考试成绩（如托福、雅思、GRE、GMAT、SAT等）之外的课外活动和学术实践积累，本质上是寻求留学申请中除了纸质考试成绩以外，区别于其他竞争者、发现和挖掘自身独特竞争力和价值的过程。",
        },
        {
          title: "背景提升的重要性！",
          img: require("@/assets/promote/header2.png"),
          desc:
            "留学背景提升是指在学习成绩（GPA）和标准化考试成绩（如托福、雅思、GRE、GMAT、SAT等）之外的课外活动和学术实践积累，本质上是寻求留学申请中除了纸质考试成绩以外，区别于其他竞争者、发现和挖掘自身独特竞争力和价值的过程。",
        },
      ],
      navs: [{ name: "文科" }, { name: "理工科" }, { name: "商科" }],
      list: [
        {
          title: "小明",
          age: 23,
          hobby: "打架",
          desc: [
            {
              icon: require("@/assets/promote/bg1.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
            {
              icon: require("@/assets/promote/bg2.png"),
              title: "经济心理学",
              subtitle: "经济刺激如何影响消费行为",
              desc: "根据消费者购买行为的复杂程度和所购产品的差异程度划分 1、复杂的购买行为。如果消费者属于高度参与,并",
            },
            {
              icon: require("@/assets/promote/bg3.png"),
              title: "外国文学",
              subtitle: "后殖民主义的文学表现形式",
              desc: "后殖民主义又叫后殖民批判主义,是20世纪70年代兴起于西方学术界的一种具有强烈的政治性和文化批判色彩的",
            },
          ],
        },
        {
          title: "小明",
          age: 23,
          hobby: "打架",
          desc: [
            {
              icon: require("@/assets/promote/science.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
            {
              icon: require("@/assets/promote/science2.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
            {
              icon: require("@/assets/promote/science3.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
          ],
        },
        {
          title: "小明",
          age: 23,
          hobby: "打架",
          desc: [
            {
              icon: require("@/assets/promote/business.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
            {
              icon: require("@/assets/promote/business2.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
            {
              icon: require("@/assets/promote/business3.png"),
              title: "新闻写作",
              subtitle: "新闻报道制作的全媒体逻辑表现",
              desc: "在全媒体时代，新闻报道制作该如何创新?又该如何践行初心?用全媒体的逻辑表现贯穿课程始终，让新闻通过",
            },
          ],
        },
      ],
      labapply: [
        {
          img: require("@/assets/promote/apply1.png"),
          what: "什么是科研实验室申请？",
          desc: "实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。",
        },
        {
          img: require("@/assets/promote/apply2.png"),
          what: "什么是科研实验室申请？",
          desc: "实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。",
        },
        {
          img: require("@/assets/promote/apply3.png"),
          what: "什么是科研实验室申请？",
          desc: "实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。",
        },
      ],
      activities: [
        {
          img: require("@/assets/promote/active1.png"),
          what: "课外活动有哪些？",
          desc: "实习可以让申请者有更加明确的职业目标和职业规划。很多学生都是通过实习去发现自己到底喜欢什么样的工作，自己的职业规划是什么。",
        },
        {
          img: require("@/assets/promote/active2.png"),
          what: "课外活动如何加入？",
          desc: "美国名校招生官真正感兴趣的是你在课外活动中学到了什么、做了什么、有什么感悟和成长。所以符合你的专业的实习经历这才能给你申请加分。",
        },
        {
          img: require("@/assets/promote/active3.png"),
          what: "课外活动对背景提升的重要性？",
          desc: "科学研究是指为了增进知识包括关于人类文化和社会的知识以及利用这些知识发明新的技术而进行的系统的创造性工作。简言之，科研是一种基于已有知识。",
        },
      ],
      //定义初始下标即页面初始化的要展示的样式
      num: 0,
    };
  },
  created() {},
  methods: {
    //设置点击事件接收 index
    tabClick: function (index) {
      console.log(index);
      //m每次点击的时候重新赋值num
      this.num = index;
    },
  },
  computed: {},
  mounted() {},
};
</script>



<style lang="scss" scoped>
.promote_container {
  background-color: #f5f5f5;
}
.explain {
  width: 100%;
  height: 1202px;
  &_title {
    width: 100%;
    height: 660px;
    background: rgba(34, 34, 34, 0.54);
    background: url("~@/assets/promote/header.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    .title {
      font-size: 36px;
      font-family: SourceHanSansK-Bold;
      font-weight: 600;
      color: #ffffff;
      line-height: 50px;
      letter-spacing: 2px;
      text-align: center;
      padding-top: 229px;
    }
  }
  &_promote {
    width: 1200px;
    background: #ffffff;
    margin: 157px auto;
    padding: 40px 66px 28px 69px;
    .what_is {
      margin-bottom: 40px;
      .what_is_promote {
        font-size: 24px;
        font-family: YouSheBiaoTiHei;
        color: #4d4d4d;
        line-height: 31px;
        letter-spacing: 2px;
        position: relative;
        margin-bottom: 30px;
      }
      .what_is_promote::before {
        content: "";
        width: 57px;
        height: 6px;
        background: #4e75ff;
        position: absolute;
        bottom: -12px;
      }
      .img_desc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 417px;
          height: 222px;
          margin-right: 32px;
        }
        .desc {
          font-size: 16px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #404040;
          line-height: 44px;
        }
      }
    }
  }
}
.apply_for {
  width: 100%;
  height: 959px;
  .tabs {
    height: 433px;
    background: url("~@/assets/promote/bgBlue.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    &_title {
      font-size: 36px;
      font-family: YouSheBiaoTiHei;
      //font-weight: 600;
      color: #ffffff;
      line-height: 50px;
      letter-spacing: 2px;
      text-align: center;
      padding-top: 67px;
      padding-bottom: 48px;
    }
    .navs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 660px;
      margin: 0 auto;
      &_item {
        width: 140px;
        height: 52px;
        border-radius: 27px;
        color: #fff;
        border: 2px solid #ffffff;
        text-align: center;
        line-height: 52px;
        font-size: 18px;
        font-family: pingfangSc-medium;
        //margin-right: 120px;
      }
      &_click {
        background: #ffffff;
        color: #6a6a6a;
      }
    }
    &_content {
      width: 1200px;
      background: #ffffff;
      margin: 64px auto;
      padding: 44px 0 94px 43px;
      display: flex;
      justify-content: space-between;
      .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        img {
          width: 350px;
          height: 330px;
          margin-bottom: 36px;
        }
        .title {
          font-size: 20px;
          font-family: PingFang-SC-Semibold;
          font-weight: 500;
          color: #292929;
          line-height: 28px;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .subtitle {
          font-size: 16px;
          font-family: PingFang-SC-Semibold;
          font-weight: 500;
          color: #242424;
          line-height: 22px;
          margin-bottom: 16px;
        }
        .desc {
          width: 350px;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #4d4d4d;
          line-height: 24px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
.research {
  width: 100%;

  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 162px 0;
  img {
    width: 542px;
    height: 403px;
    margin-right: 96px;
  }
  .desc_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .what_is_research {
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #3f3f3f;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 40px;
    }
    .content {
      margin-bottom: 32px;
      .what_is {
        font-size: 16px;
        font-family: PingFang-SC-Semibold;
        font-weight: 500;
        color: #191919;
        margin-bottom: 20px;
      }
      .whatdesc {
        font-size: 14px;
        font-family: SourceHanSansK-Normal;
        color: #4d4d4d;
        width: 526px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
.paper {
  width: 100%;
  padding: 184px 0;
  background: url("~@/assets/promote/deve.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  &_left {
    margin-right: 96px;
    display: flex;
    flex-direction: column;
    .paper_left_title {
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      letter-spacing: 2px;
      margin-bottom: 38px;
    }
    .paper_left_content {
      margin-bottom: 32px;
      .paper_left_what {
        font-size: 16px;
        font-family: PingFang-SC-Semibold;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 18px;
      }
      .paper_left_desc {
        width: 526px;
        font-size: 14px;
        font-family: SourceHanSansK-Light;
        color: #f7f7f7;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    
      }
    }
  }
  &_right {
    display: flex;
    flex-direction: column;
    img {
      width: 542px;
      height: 403px;
    }
  }
}
.labapply {
  width: 100%;
  padding: 120px 0 168px 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  .labcontent {
    display: flex;
    flex-direction: column;
    .labtitle {
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #3f3f3f;
      letter-spacing: 2px;
      margin-bottom: 60px;
    }
    &_items {
      display: flex;
      .labcontent_item {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        img {
          width: 386px;
          height: 313px;
          margin-bottom: 24px;
        }
        .labcontent_what {
          font-size: 16px;
          font-family: PingFang-SC-Semibold;
          font-weight: 500;
          color: #191919;
          margin-bottom: 20px;
        }
        .labcontent_desc {
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #4d4d4d;
          width: 345px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          letter-spacing: 1.5px;
        }
      }
    }
  }
}
.practice {
  width: 100%;
  background: url("~@/assets/promote/promote.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 184px 0;
  img {
    width: 542px;
    height: 403px;
    margin-right: 96px;
  }
  .desc_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .what_is_research {
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #fff;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 40px;
    }
    .content {
      margin-bottom: 32px;
      .what_is {
        font-size: 16px;
        font-family: PingFang-SC-Semibold;
        font-weight: 500;
        color: #fff;
        margin-bottom: 20px;
      }
      .whatdesc {
        font-size: 14px;
        font-family: SourceHanSansK-Light;
        color: #f7f7f7;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 526px;
      }
    }
  }
}
.competition {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 120px 0 0 0;
  img {
    width: 542px;
    height: 403px;
    margin-left: 64px;
  }
  .desc_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .what_is_research {
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #3f3f3f;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 40px;
    }
    .content {
      margin-bottom: 32px;
      .what_is {
        font-size: 16px;
        font-family: PingFang-SC-Semibold;
        font-weight: 500;
        color: #191919;
        margin-bottom: 20px;
      }
      .whatdesc {
        font-size: 14px;
        font-family: SourceHanSansK-Normal;
        color: #4d4d4d;
        width: 526px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>

