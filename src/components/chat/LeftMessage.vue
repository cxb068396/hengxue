<template>
  <div class="message left-message">
    <div class="user-bar">
      <img :src="avatar ? avatar : defaultAvatar" alt="" class="avatar mr-8" />
      <span class="nickname ellipsis mr-8">{{nickname}}</span>
      <div class="position mr-8">资深咨询顾问</div>
      <div class="time">{{time}}</div>
    </div>
    <div class="message-bubble">
      {{ message }}
    </div>
  </div>
</template>

<script>
import defaultAvatar from "@/assets/img/avatar.png";
export default {
  props: {
    message: String,
    nickname: String,
    avatar: String,
    time: String,
  },
  data() {
    return {
      defaultAvatar
    };
  },
  mounted() {},
  methods: {
    // canvas 绘制聊天框向左的箭头
    initLeftArrow() {
      var canvas = this.$refs.left;
      canvas.width = 15;
      canvas.height = 20;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#f4f4f4";
      ctx.beginPath();
      ctx.lineTo(15, 2);
      ctx.lineTo(15, 20);
      ctx.lineTo(0, 0);
      ctx.fill();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/components/chat/bubble.scss";

.left-message{
  align-self: flex-start;
}
</style>
