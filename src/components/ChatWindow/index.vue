<template>
  <div class="chat-container">
    <div class="title-bar flex-between">
      <div class="flex-start">
        <img :src="serviceman.picture?serviceman.picture:defaultAvatar" alt="" class="avatar" />
        <span class="nickname">{{serviceman.nickname}}</span>
      </div>

      <span>热线电话：010-4002002</span>
      <i class="el-icon-close icon-close close-icon" @click="onCancel" style=""></i>
    </div>
    <div class="chat-body flex-stretch">
      <div class="right">
        <div class="message-box flex-start column">
          <!-- <div class="time-row">11月19日 上午14:00</div> -->
          <div class="greeter">欢迎您的咨询，期待为您服务！</div>
          <!-- todo 时间处理 -->
          <!-- <left-message :message="'您好同学，有没有问题需要帮助呢？'" nickname="豆苗" time="10:16"></left-message>
          <right-message :message="'去美国留学读研究生需要准备哪些资料？'" time="10:17"></right-message> -->
          <template v-for="item in records">
            <!-- eslint-disable-next-line -->
            <left-message :message="item.message" :avatar="serviceman.picture" v-if="item.type === 'left'"></left-message>
            <!-- eslint-disable-next-line -->
            <right-message :message="item.message" :avatar="item.avatar" v-else-if="item.type === 'right'"></right-message>
          </template>
        </div>

        <textarea class="chat-input" placeholder="请输入您的问题" v-model="question"></textarea>
        <div class="tool-bar flex-between">
          <div style="height: 100%" class="flex-start">
            <!-- <img src="@/assets/icons/chat-icon-emoji.svg" alt="" class="icon" @click="toggleShowEmoji" /> -->
            <!-- <embed src="@/assets/icons/chat-icon-emoji.svg" class="icon" @click="toggleShowEmoji"> -->
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="icon"
              @click="toggleShowEmoji"
              :style="`color: ${emojiShow ? '#6486FF' : '#999999'}`"
            >
              <title>编组 64备份</title>
              <desc>Created with Sketch.</desc>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="编组-64备份">
                  <g
                    id="xiaolian-2"
                    transform="translate(11.700000, 12.300000) scale(1, -1) rotate(-180.000000) translate(-11.700000, -12.300000) translate(1.200000, 1.800000)"
                    fill="currentColor"
                    fill-rule="nonzero"
                    stroke="currentColor"
                    stroke-width="0.8"
                  >
                    <path
                      d="M7.0752757,8.67443386 C7.70548579,8.67496229 8.21680043,8.16415534 8.21732931,7.5335142 C8.21785738,6.90287307 7.70739957,6.39120871 7.07718947,6.39067947 C6.44697937,6.39015104 5.93566474,6.90095799 5.93513585,7.53159912 C5.93460779,8.16224026 6.4450656,8.67390462 7.0752757,8.67443386 L7.0752757,8.67443386 Z M13.9237674,8.67443386 C14.5539775,8.67496229 15.0652922,8.16415534 15.0658211,7.5335142 C15.0663491,6.90287307 14.5558913,6.39120871 13.9256812,6.39067947 C13.2954711,6.39015104 12.7841565,6.90095799 12.7836276,7.53159912 C12.7830995,8.16224026 13.2935574,8.67390462 13.9237674,8.67443386 L13.9237674,8.67443386 Z M10.4990431,0 C4.70026429,0 0,4.70156399 0,10.5004788 C0,16.298436 4.70122118,21 10.5,21 C16.2987788,21 21,16.298436 21,10.5004788 C21,4.70156399 16.2987788,0 10.4990431,0 Z M10.4990431,20.014726 C5.24378021,20.014726 0.983687252,15.7535908 0.983687252,10.5004788 C0.983687252,5.24449408 5.24378021,0.984360058 10.4990431,0.984360058 C15.754306,0.984360058 20.0144246,5.24449411 20.0144246,10.4995212 C20.020268,13.0260572 19.0194301,15.450707 17.2334871,17.2366134 C15.4475442,19.0225198 13.0238475,20.0223346 10.4990431,20.014726 L10.4990431,20.014726 Z M15.5227376,10.5004788 C15.4016051,10.5 15.2852593,10.5477654 15.1994256,10.6332985 C15.1135919,10.7188316 15.0653411,10.8350555 15.0653422,10.9562719 C15.0653422,13.4796298 13.0211547,15.5252154 10.4995216,15.5252154 C7.97788845,15.5252154 5.93370092,13.4796298 5.93370092,10.9562719 C5.93370092,10.7042799 5.72956064,10.5 5.47774084,10.5 C5.22592103,10.5 5.02178075,10.7042799 5.02178075,10.9562719 C5.02336581,13.9824466 7.47589345,16.4345083 10.5,16.4334507 C13.5241066,16.4345083 15.9766342,13.9824467 15.9782193,10.9562719 C15.9776916,10.7043895 15.7734916,10.5004782 15.5217808,10.5004788 L15.5227376,10.5004788 Z"
                      id="形状"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <emoji-picker
              v-show="emojiShow"
              :include="['people']"
              :showSearch="false"
              :showPreview="false"
              :showCategories="false"
              @select="addEmoji"
              class="emoji-pop"
              style="height: 288px; transform: translate(-10px, -160px); position: absolute;"
            />

            <!-- <img src="@/assets/icons/chat-icon-folder.png" alt="" class="icon" /> -->
            <!-- <img src="@/assets/icons/chat-icon-macrophone.png" alt="" class="icon" /> -->
            <!-- <img src="@/assets/icons/chat-icon-pic.png" alt="" class="icon" /> -->
            <!-- <img src="@/assets/icons/chat-icon-mes.png" alt="" class="icon" /> -->
          </div>
          <div class="btn-send" @click="sendMessage">发送</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultAvatar from "@/assets/img/avatar.png";
import { bindClientId, send } from "@/api/chat.js";
import ws from "@/utils/ws.js";
import LeftMessage from "@/components/chat/LeftMessage";
import RightMessage from "@/components/chat/RightMessage";

import { Picker } from "emoji-mart-vue";
export default {
  data() {
    return {
      question: "",
      sendws: null,
      records: [], // 聊天记录
      clientId: "",
      sendOpt: null, // 发送聊天相关
      canSend: true,
      emojiShow: false,
      serviceman: {
        picture: '',
        nickname: '',
        
      }, // 客服
      defaultAvatar,  // 默认头像
    };
  },
  components: { LeftMessage, RightMessage, "emoji-picker": Picker },
  mounted() {
    // 添加遮罩层组件
    // this.showShader();

    let apidata = {};
    ws.initWebSocket("", msg => {
      const data = JSON.parse(msg.data);
      console.log(data);
      if (data.type === "init") {
        apidata.client_id = data.client_id;
        apidata.source = 1;
        apidata.source_page = sessionStorage.getItem('session-page');
        apidata.first_page = sessionStorage.getItem('landing-page');

        this.clientId = data.client_id;
        // this.bindClientId(apidata);
        bindClientId(apidata)
          .then(res => {
            if (res.message == "当前无客服在线，请稍后再试") {
              this.$message({ type: "error", message: "当前无客服在线，请稍后再试" });
              this.cansend = false;
            } else {
              this.$message({ type: "success", message: res.message });
              this.cansend = true;
              this.sendOpt = res;
              this.serviceman = res.user
              if (res.history) {
                this.records = res.history.map(ele => {
                  return {
                    message: ele.content,
                    avatar: ele.send_type != 1 ? res.image : undefined,
                    type: ele.send_type == 1 ? "left" : "right"
                  };
                });
              }
            }
          })
          .catch(err => {});
      } else if (data.type === "send") {
        this.records.push({ type: "left", message: data.message });
      }
    });
    // this.sendws = ws.$ws
  },
  methods: {
    // 确认 点击事件处理函数
    onConfirm() {},
    // 取消 点击事件处理函数
    onCancel() {},
    hideComp() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
    },
    sendMessage() {
      if (!this.canSend) {
        this.$message({ type: "error", message: "当前无客服在线，请稍后再试" });
        return;
      }
      if (!this.question.trim()) {
        this.$message({ type: "error", message: "请输入有效信息再点击发送" });
        return;
      }
      const data = {
        uid: this.sendOpt.uid,
        to_uid: this.sendOpt.to_uid,
        message: this.question
      };
      // this.sendws.send(JSON.stringify(data));

      send(data)
        .then(res => {
          this.records.push({ type: "right", message: this.question });
          this.question = "";
        })
        .catch(err => console.log(err));
    },
    // 添加遮罩层组件
    showShader() {
      const node = document.querySelector(".shader");
      if (!!!node) {
        const shader = document.createElement("div");
        shader.classList.add("shader");
        document.body.prepend(shader);
      }
    },

    // 添加表情
    addEmoji(e) {
      this.question += e.native;
      this.emojiShow = false;
    },
    toggleShowEmoji() {
      this.emojiShow = !this.emojiShow;
    }
  }

  // beforeDestroy() {
  //   document.body.removeChild(document.querySelector(".shader"));
  // }
};
</script>
<style>
.shader {
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.9;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 800;
}
</style>
<style lang="scss" scoped>
@import "~@/styles/global.scss";

$width: 746px;
$height: 554px;

div {
  box-sizing: border-box;
}
.chat-container {
  width: $width;
  height: $height;
  position: fixed;
  top: 50%;
  // bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  // right: 0;
  // margin: auto;
  z-index: 9999;

  box-shadow: 0px 11px 216px 0px #a5a5a5;
  border-radius: 4px;
  overflow: hidden;
}
.title-bar {
  height: 48px;
  background-color: #4e75ff;
  padding-left: 28px;
  padding-right: 36px;
  font-size: 14px;
  color: #fff;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    // background-color: red;
    margin-right: 12px;
  }
  .nickname {
  }
  .close-icon {
    font-size: 18px;
    cursor: pointer;
  }
}
.chat-body {
  height: $height - 48px;
}
.right {
  flex: 1;
  // height: calc(100% - 48px);
  background: #fff;

  .message-box {
    padding: 12px 28px;
    padding-bottom: 0;
    height: calc(100% - 134px);
    width: 100%;
    overflow: scroll;
    .greeter {
      padding: 0 18px;
      height: 30px;
      line-height: 30px;
      color: #363636;

      background: #f4f6ff;
      border-radius: 4px;
    }
    &::-webkit-scrollbar {
      height: 0;
      width: 10px;

      border-radius: 50%;
    }
    &::-webkit-scrollbar-thumb {
      background: #cdcccc;
    }
    .time-row {
      font-size: 22px;
      color: #a6a6a6;
      // line-height: 30px;
      letter-spacing: 1px;
    }
  }
  .tool-bar {
    height: 32px;
    padding-left: 28px;
    // background: #f8faff;
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 24px;
      color: #999999;
      cursor: pointer;
      // &:hover {
      //   background: #afafaf;
      // }
    }
    .btn-send {
      width: 80px;
      height: 32px;
      margin-right: 28px;
      color: #fff;
      text-align: center;
      background: #6385ff;
      font-size: 14px;
      border-radius: 4px;
      line-height: 32px;
      cursor: pointer;
    }
  }
  .chat-input {
    width: 100%;
    box-sizing: border-box;
    height: 81px;
    padding: 12px 28px;
    color: #333;
    border: none;
    border-top: 1px solid #f0f0f0;
    resize: none;

    font-size: 14px;
    letter-spacing: 1px;
    &::placeholder {
      color: #b9b9b9;
    }
    &:focus {
      outline: none !important;
      // border: none;
    }
  }
}

.sub-title {
  margin-bottom: 30px;
  color: #363636;
  font-size: 22px;
}

.emoji-pop {
  height: 288px;
  transform: translate(-10px, -160px);
  position: absolute;
}
</style>
