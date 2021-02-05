<template>
  <div id="tab5">
    <div class="title">招生信息</div>
    <div class="user-item">
      <div class="admissions" v-for="user in admissions_info.slice(0, num)" :key="user.uid">
        <div>{{ user.title }}</div>
        <div>{{ user.date }}</div>
      </div>
    </div>
      <div class="load-more" v-if="num < admissions_info.length" @click="loadMore">查看更多</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 5,
      admissions_info: [
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知1",
          date: "2020-08-16",
        },
          {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
          {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
        {
          title: "清华大学2020级本科新生入学报到须知",
          date: "2020-08-16",
        },
      ],
    };
  },
  methods: {
    loadMore() {
      this.num+=5
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
#tab5 {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.title {
  font-size: 18px;
  color: #4e75ff;
  text-align: center;
  margin-top: 5px;
    font-family: PangMenZhengDao;
}
.user-item {
  width: 100%;
  height: 200px;
  display: flex;
  margin-top: 10px;
  overflow-y:scroll;
  flex-direction: column;

  .admissions {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
}
  .load-more {
    width: 120px;
    height: 32px;
    background: #4e75ff;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
    margin: 40px auto 0;
  }
</style>