<template>
  <div class="transition-box">
    <div class="panel">
      <div class="data-categories">
        <div class="categories">
          <div></div>
          数据来源：
        </div>
        <div class="kinds">
          <span
            class="type typeFamily"
            :class="{active: index == sourceIndex }"
            @click="clickSource(index,item)"
            v-for="(item, index) in source"
            :key="index"
          >
            {{ item.source }}
          </span>
        </div>
      </div>
      <div class="data-categories">
        <div class="categories">
          <div></div>
          国家：
        </div>
        <div class="kinds">
          <span
            class="type"
            :class="{active: index == countryIndex }"
            @click="clickCountry(index,item)"
            v-for="(item, index) in countries"
            :key="index"
          >
            {{ item.country }}
          </span>
        </div>
      </div>
      <div class="data-categories">
        <div class="categories">
          <div></div>
          排名类别：
        </div>
        <div class="kinds">
          <span
            class="type"
            :class="item.value == rankIndex ? 'active' : ''"
            @click="clickRank(item.value)"
            v-for="(item, index) in ranks"
            :key="index"
          >
            {{ item.rank }}
          </span>
        </div>
      </div>
      <div class="data-categories">
        <div class="categories">
          <div></div>
          年份：
        </div>
        <div class="kinds">
          <span
            class="type"
            :class="{active: index == yearIndex }"
            @click="clickYear(index,item)"
            v-for="(item, index) in years"
            :key="index"
          >
            {{ item.yearnum }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
    props: {
    years: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      sourceIndex: 0,
      source: [
        { value: 'times', source: "TIMES" },
        { value: 'usnews', source: "USNEWS" },
        { value: 'qs', source: "QS" },
      ],
      countryIndex: 0,
      countries: [
        { value: '', country: "全球" },
        { value: '美国', country: "美国" },
        { value: '英国', country: "英国" },
        { value: '加拿大', country: "加拿大" },
        { value: '澳大利亚', country: "澳大利亚" },
      ],

      rankIndex: 1,
      ranks: [
        { value: 1, rank: "综合排名" },
        // { value: 2, rank: "专业排名" },
        // { value: 3, rank: "学院排名" },
      ],
       yearIndex: 0,
    };
  },
  created() {},

  computed: {},
  mounted() {},
  methods: {
    clickSource(index,item) {
      this.sourceIndex = index;
      console.log(index,item)
         this.$emit('selectSource',item.value)
    },
    clickCountry(index,item) {
      this.countryIndex = index;
         console.log(index,item)
         this.$emit('selectCoutry',item.value)
    },
    clickRank(index) {
      this.rankIndex = index;
    },
    clickYear(index,item) {
      console.log(index,item)
      this.yearIndex = index;
      this.$emit('selectYear',item.yearnum)
    },
  },
};
</script>
 
<style lang="scss" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 472px;
  height: 492px;

  background-color: #fff;
  color: #000;
  box-sizing: border-box;
  margin-left: 18px;
  position: relative;
  z-index: 1000;
  &::before {
    position: absolute;
    left: 20px;
    top: -15px;
    content: "";
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    z-index: 1000;
  }
  &::after {
    content: "";
    position: absolute;

    left: 0;
    right: 0;
    bottom: -150px;
    height: 150px;
    width: 472px;
    background: rgba(0, 0, 0, 0.3);
  }
  .panel {
    padding: 32px;
    width: 468px;
    height: 100%;
    box-sizing: border-box;
    .data-categories {
      margin-bottom: 32px;
      .categories {
        display: flex;
        align-items: center;
        font-size: 22px;
        font-weight: 600;
        color: #535353;
        font-family: YouSheBiaoTiHei;
        div {
          width: 8px;
          height: 8px;
          background: #4e75ff;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
      .kinds {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .type {
          color: #212121;
          font-size: 16px;
          width: 80px;
          height: 34px;
          text-align: center;
          line-height: 34px;
        }
        .typeFamily{
          
font-family: HelveticaNeue-MediumItalic, HelveticaNeue;
        }
        .active {
          background: #ff8900;
          color: #fff;
        }
        .type:hover {
          background: #ff8900;
          color: #fff;
        }
      }
    }
  }
}
</style>