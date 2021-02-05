<template>
  <div class="message right-message">
    <div class="user-bar">
      <span class="time mr-12">{{ time }}</span>
      <img :src="avatar ? avatar : defaultAvatar" alt="" class="avatar" />
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
    avatar: String,
    time: String
  },
  data() {
    return { defaultAvatar };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/components/chat/bubble.scss";

.right-message {
  align-self: flex-end;
  .user-bar { justify-content: flex-end;}
  .message-bubble {
    background: #4e75ff;
    color: #fff;
  }
}
</style>
