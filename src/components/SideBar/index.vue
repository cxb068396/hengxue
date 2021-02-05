<template>
  <div>
    <template>
      <div class="right-side-bar flex-between column" v-show="mode === 'unfold'">
        <div class="side-bar__item" @click="toggleSideBar('fold')">
          <img src="@/assets/icons/icon-shrink@2x.png" class=" side-bar__arrow" />
        </div>
        <!-- eslint-disable-next-line -->
        <div :class="`side-bar__item `" v-for="item in sides" @click="onSideMenuClick(item.flag)">
          <img :src="item.icon" class="side-bar__icon" />
          <span class="side-bar__text">{{ item.text }}</span>
        </div>
      </div>
    </template>
    <template>
      <div class="right-side-bar fold" v-show="mode === 'fold'">
        <div class="side-bar__item" @click="toggleSideBar('unfold')">
          <img src="@/assets/icons/icon-shrink@2x.png" class="side-bar__icon" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import iconConsult from "@/assets/icons/icon-consult@2x.png";
import iconSurvey from "@/assets/icons/icon-survey@2x.png";
import iconTest from "@/assets/icons/icon-test@2x.png";
import iconAirline from "@/assets/icons/icon-airline@2x.png";
// import "@/styles/global.scss";

export default {
  data() {
    return {
      mode: "unfold", // unfold 收起; fold 收起
      sides: [
        {
          icon: iconConsult,
          text: "在线客服",
          flag: "consult"
        },
        {
          icon: iconSurvey,
          text: "问卷调查",
          flag: "survey"
        },
        {
          icon: iconTest,
          // text: "托福/雅思在线测试",
          text: "在线测试",
          flag: "test"
        },
        {
          icon: iconAirline,
          text: "出国留学",
          flag: "airline"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  components: {},

  created() {},
  methods: {
    toggleSideBar(mode) {
      this.mode = mode;
    },

    onSideMenuClick(flag) {
      if (flag === "consult") {
        try {
          this.$chat();
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/global.scss";
.right-side-bar {
  height: 546px;
  position: fixed;
  right: 12px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;

  .side-bar__arrow{
    width: 96px;
    height: 96px;
  }

  .side-bar__item {
    width: 96px;
    min-height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    .side-bar__icon {
      width: 52px;
      height: 52px;
    }
    .side-bar__text {
      color: #606060;
      font-size: 12px;
      line-height: 24px;
    }

    &.active {
      border: 1px solid #3466ff;
    }
  }
}

.fold {
  &.right-side-bar {
    height: auto;
    transform: none;
    bottom: 200px;
  }
  .side-bar__icon {
    width: 48px;
    height: 48px;
    transform: rotate(-90deg);
  }
}
</style>
