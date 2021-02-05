<template>
  <div>
    <div class="course">
      <div class="title">学生内容</div>
      <div class="xian"></div>
      <div class="desc">
        <div>一.</div>
        <span>是要将信息技术作为学生内容，并且要确立和加强其地位。</span>
      </div>
      <div class="desc">
        <div>二.</div>
        <span>是其他有价值的学生内容，如果适宜用信息技术作为其载体的，要充分利用信息技术来加以传播。</span>
      </div>
      <div class="desc">
        <div>三.</div>
        <span>是信息技术并非万能技术，还需要为那些无法用信息技术来表达的内容保留必要的空间，比如缄默知识或意会知识。</span>
      </div>
    </div>
    <div class="course">
      <div class="title">学生评价</div>
      <div class="xian"></div>
      <div class="desc">
        <div>一.</div>
        <span>
          学生评价是一个价值判断的过程。价值判断要求在事实描述的基础上，体现评价者的价值观念和主观愿望。不同的评价主体因其自身的需要和观念的不同对同一事物或活动会产生不同的判断。
        </span>
      </div>
      <div class="desc">
        <div>二.</div>
        <span>
          学生评价的对象包括“学生的计划、实施、结果等”诸种学生要素。也就是说，学生评价对象的范围很广，它既包括学生计划本身，也包括参与学生实施的教师、学生、学校，还包括学生活动的结果，即学生和教师的发展。
        </span>
      </div>
      <div class="desc">
        <div>三.</div>
        <span>是信息技术并非万能技术，还需要为那些无法用信息技术来表达的内容保留必要的空间，比如缄默知识或意会知识。</span>
      </div>
    </div>
    <div class="course">
      <div class="title">学生目标</div>
      <div class="xian"></div>
      <div class="desc">
        <span>
          学生目标是指学生本身要实现的具体目标和意图。它规定了某一教育阶段的学生通过学生学习以后，在发展品德、智力、体质等方面期望实现的程度，它是确定学生内容、教学目标和教学方法的基础。从某种意义上说，所有教育目的都要以学生为中介才能实现。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.course {
  width: 812px;
  margin: 0 auto 68px;
  .title {
    font-size: 18px;
    font-family: PingFang-SC-Semibold;
    font-weight: normal;
    color: #395fff;
    line-height: 25px;
    display: flex;
    justify-content: center;
  }
  .xian {
    width: 64px;
    height: 4px;
    background: #bdccff;
    margin: 8px auto 23px;
  }

  .desc {
    display: flex;
  line-height: 40px;
    justify-content: flex-start;
    div {
      margin-right: 10px;
    }
    span {
      width: 812px;
      font-size: 16px;
      font-family: SourceHanSansSC-Normal, SourceHanSansSC;
      font-weight: 400;
      color: #575757;
      line-height: 40px;
    }
  }
}
</style>
