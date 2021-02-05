<template>
  <div class="index_login">
    <div class="index_login_con">
      <img src="../assets/img/icon-l.png" style="login_img" />
      <div class="login_word">衡学个人综合实力提升数字化工作平台</div>
      <!-- 登录 -->
      <div class="login_container" v-if="isForgetPas === false && isRegister === false">
        <div class="login_denglu">登录</div>
        <div class="login_phoneNumber" :class="phoneStatus ? 'test' : ''">手机号</div>
        <div class="login_phone" :class="phoneStatus ? 'bottoms' : ''">
          <input type="text" class="login_input" v-model="phone" @focus="phones" @blur="phonesBlur" />
        </div>
        <div class="login_pas" :class="passwordStatus ? 'test' : ''">密码</div>
        <div class="login-password" :class="passwordStatus ? 'bottoms' : ''">
          <input :type="typePwd" class="login_input" v-model="password" @focus="passwords" @blur="passwordsBlur" />
          <img class="login_eyes" :src="eyes ? close : open" @click="eyesClick" />
        </div>
        <div class="forget_password" @click="forgetPas">忘记密码?</div>
        <!-- 清除浮动 -->
        <div class="clear"></div>
        <el-button class="login" round @click="getLogin">登录</el-button>
        <div class="login_footer">
          还没有账号？
          <i style="font-style: normal; color: #2757ff; cursor: pointer" @click="toRegister">立即注册</i>
        </div>
      </div>
      <!-- 忘记密码 -->
      <div class="login_container" v-if="isForgetPas === true">
        <div class="login_denglu">忘记密码</div>
        <div class="login_phoneNumber" :class="phoneStatus ? 'test' : ''">手机号</div>
        <div class="login_phone" :class="phoneStatus ? 'bottoms' : ''">
          <input type="text" class="login_input" v-model="forgetPhone" @focus="Fphones" @blur="FphonesBlur" />
        </div>
        <div class="login_pas" :class="passwordStatus ? 'test' : ''">设置密码</div>
        <div class="login-password" style="margin-bottom: 40px" :class="passwordStatus ? 'bottoms' : ''">
          <input :type="typePwd" class="login_input" v-model="forgetPassword" @focus="Fpassword" @blur="FpasswordBlur" />
          <img class="login_eyes" :src="eyes ? close : open" @click="eyesClick" />
        </div>
        <!-- 清除浮动 -->
        <div class="clear"></div>
        <span class="login_y" :class="yzmStatus ? 'test' : ''">验证码</span>
        <div class="login_yzm" :class="yzmStatus ? 'bottoms' : ''">
          <input type="text" class="login_input" v-model="code" @focus="ycode" @blur="ycodeBlur" />
          <button size="medium" round @click="getForgetCode" v-show="show" class="login_btn">获取验证码</button>
          <div v-show="!show" class="count">{{ count }}秒</div>
        </div>
        <el-button class="login" round @click="btnTrue">确认</el-button>
      </div>
      <!-- 立即注册 -->
      <div class="login_container" v-if="isRegister === true">
        <div class="login_denglu">立即注册</div>
        <div v-if="nextRegister === false">
          <!-- 姓名的提示 -->
          <div class="name_needly" v-if="isUsernameTips === true">不超过50个字符，中英文不能混合，且不能包含数字</div>
          <div class="login_phoneNumber" :class="usernameStatus ? 'test' : ''">姓名</div>
          <div class="login_phone" :class="{ bottoms: usernameStatus, red: isUnameColor }">
            <input type="text" class="login_input" v-model="username" @focus="Rusername" @blur="RusernameBlur" @change="RusernameChange()" />
            <div class="red_word" v-if="isUnameColor === true">
              <img class="redImg" src="../assets/login/gantan.png" />
              <span>姓名设置不符合要求</span>
            </div>
          </div>
          <div class="login_phoneNumber" :class="identityStatus ? 'test' : ''">您的身份</div>
          <el-radio-group v-model="radio" style="margin-bottom: 30px !important; margin-top: 25px !important" @change="types">
            <el-radio :label="1">家长</el-radio>
            <el-radio :label="2">中学生</el-radio>
            <el-radio :label="3">高中生</el-radio>
            <el-radio :label="4">大学生</el-radio>
          </el-radio-group>
          <div class="login_phoneNumber" :class="phoneStatus ? 'test' : ''">手机号</div>
          <div class="login_phone" :class="{ bottoms: phoneStatus, red: isPhoneColor }">
            <input type="text" class="login_input" v-model="registerPhone" @focus="Rphone" @blur="RphoneBlur" @change="RphoneChange()" />
            <div class="red_word" v-if="isPhoneColor === true">
              <img class="redImg" src="../assets/login/gantan.png" />
              <span>手机号码格式不对，请重新输入</span>
            </div>
          </div>
          <!-- 清除浮动 -->
          <div class="clear"></div>
          <span class="login_y" :class="yzmStatus ? 'test' : ''">验证码</span>
          <div class="login_yzm" :class="yzmStatus ? 'bottoms' : ''">
            <input type="text" class="login_input" v-model="code" @focus="Ryzm" @blur="RyzmBlur" />
            <button size="medium" round @click="getCode" v-show="show" class="login_btn">获取验证码</button>
            <div v-show="!show" class="count">{{ count }}秒</div>
          </div>
          <el-button class="login" round @click="next">下一步</el-button>
          <div class="login_footer">
            已有账号？
            <i style="font-style: normal; color: #2757ff; cursor: pointer" @click="toLogin">立即登录</i>
          </div>
        </div>
        <div v-else>
          <div class="login_pas" :class="passwordStatus ? 'test' : ''">设置密码</div>
          <div class="login-password" style="margin-bottom: 40px" :class="{ bottoms: passwordStatus, red: isChange }">
            <input
              :type="typePwd"
              class="login_input"
              v-model="newPassword"
              @focus="Rpassword"
              @blur="RpasswordBlur"
              @keydown="RpasswordChange()"
              maxlength="15"
            />
            <img class="login_eyes" :src="eyes ? close : open" @click="eyesClick" />
            <div class="red_word" v-if="isChange === true">
              <img class="redImg" src="../assets/login/gantan.png" />
              <span>密码设置不符合要求</span>
            </div>
          </div>
          <div class="login_pas" :class="focusStatusPassword ? 'test' : ''">确认密码</div>
          <div class="login-password" style="margin-bottom: 40px" :class="{ bottoms: focusStatusPassword, red: isRed }">
            <input :type="typePwdAgain" class="login_input" v-model="againPassword" @focus="RApassword" @blur="RApasswordBlur" maxlength="15" />
            <img class="login_eyes" :src="eyesAgain ? close : open" @click="eyesAgainClick" />
            <div class="red_word" v-if="isRed === true">
              <img class="redImg" src="../assets/login/gantan.png" />
              <span>两次输入的密码不一致，请重新输入</span>
            </div>
          </div>
          <el-button class="login" round @click="Register">注册</el-button>
          <div class="login_footer">
            已有账号？
            <i style="font-style: normal; color: #2757ff; cursor: pointer" @click="toLogin">立即登录</i>
          </div>
          <!-- 密码需求 -->
          <div class="passwordDemand" v-if="isTips === true">
            <div class="demand_text">
              <img :src="isSuccessful ? successful : errorful" class="demand_textImg" />
              <div class="demand_textT">请输入6-15个字符</div>
            </div>
            <div class="demand_text">
              <img :src="isAgainSuccessful ? successful : errorful" class="demand_textImg" />
              <div class="demand_textT">只能包含字母、数字以及标点符号(除空格)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { getLogin, register, registerCode, forgetCode, forgetPassword } from "@/api/login.js";

export default {
  data() {
    return {
      phone: "",
      password: "",
      typePwd: "password",
      typePwdAgain: "password",
      code: "",
      username: "", //注册(用户名)
      newPassword: "", // 设置密码
      againPassword: "", // 确认密码
      forgetPhone: "", //忘记密码的手机号
      forgetPassword: "", //忘记密码的密码
      eyes: true,
      eyesAgain: true, //确认密码的眼睛
      show: true,
      count: "",
      timer: null,
      close: require("../assets/img/close.png"),
      open: require("../assets/img/open.png"),
      status: 1,
      usernameStatus: false, //聚焦状态（用户名）
      identityStatus: false, //用户类型的状态
      phoneStatus: false, //聚焦状态（手机号）
      passwordStatus: false, //聚焦状态（密码）
      focusStatusPassword: false, //聚焦状态（确认密码）
      yzmStatus: false, //聚焦状态（验证码）
      isForgetPas: false, // 是否点忘记密码
      isRegister: false, //是否点立即注册
      nextRegister: false, //注册是否点下一步
      radio: 1,
      registerPhone: "",
      successful: require("../assets/login/suc.png"),
      errorful: require("../assets/login/err.png"),
      isSuccessful: false, //设置密码
      isAgainSuccessful: false, // 确认密码
      isTips: false, //提示框是否出现
      isChange: false, // 设置密码是否变红
      isRed: false, //确认密码是否变红
      isUnameColor: false, //姓名是否变红
      isUsernameTips: false, //姓名条件提示框是否出现
      isPhoneColor: false, //手机号是否变红
      setInterName: null, //这是定时器的名称
    };
  },
  mounted() {},
  created() {},
  methods: {
    // 登录
    getLogin() {
      const user = {
        phone: this.phone,
        password: this.password,
      };
      // if (user.password !== this.cookiePass) {
      //   user.password = encrypt(user.password);
      // }

      this.$store
        .dispatch("handleLogin", user)
        .then((res) => {
          if (res.code == "200") {
            this.$message({ type: "success", message: "登录成功，即将跳转页面" });
            this.$router.push({ path: this.redirect || "/" });
          } else if (res.code == "400") {
            this.$message({ type: "error", message: res.mes });
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.mes) {
            this.$message({ type: "error", message: error.mes });
          } else {
            this.$message({ type: "error", message: "登录出现异常，请稍后重试" });
          }
        });
    },
    // 眼睛睁不睁
    eyesClick() {
      this.eyes = !this.eyes;
      this.typePwd = this.typePwd === "password" ? "text" : "password";
    },
    eyesAgainClick() {
      this.eyesAgain = !this.eyesAgain;
      this.typePwdAgain = this.typePwdAgain === "password" ? "text" : "password";
    },
    // 验证码倒计时
    getCode() {
      const that = this;
      registerCode(that.registerPhone)
        .then((res) => {
          console.log(res);
          clearInterval(this.timer);
          this.show = true;
          this.phone === "";
          if (res.code != 200) {
            return this.$message.error("验证码发送失败！");
          } else {
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 登录的手机号聚焦与失焦
    phones() {
      this.phoneStatus = true;
    },
    phonesBlur() {
      this.phoneStatus = false;
    },
    // 登录的密码的聚焦与失焦
    passwords() {
      this.phoneStatus = false;
      this.passwordStatus = true;
    },
    passwordsBlur() {
      this.phoneStatus = false;
      this.passwordStatus = false;
    },
    // 忘记密码时的聚焦与失焦
    Fphones() {
      this.phoneStatus = true;
    },
    FphonesBlur() {
      this.phoneStatus = false;
    },
    Fpassword() {
      this.phoneStatus = false;
      this.passwordStatus = true;
    },
    FpasswordBlur() {
      this.phoneStatus = false;
      this.passwordStatus = false;
    },
    ycode() {
      this.phoneStatus = false;
      this.passwordStatus = false;
      this.yzmStatus = true;
    },
    ycodeBlur() {
      this.phoneStatus = false;
      this.passwordStatus = false;
      this.yzmStatus = false;
    },
    // 注册时的聚焦与失焦(上一步)
    Rusername() {
      this.usernameStatus = true;
      this.isUsernameTips = true; //聚焦时姓名条件提示框时出现
    },
    RusernameBlur() {
      this.usernameStatus = false;
      this.isUsernameTips = false; //聚焦时姓名条件提示框不出现
    },
    // 角色类型改变
    types() {
      this.usernameStatus = false;
      this.identityStatus = true;
    },
    Rphone() {
      this.usernameStatus = false;
      this.identityStatus = false;
      this.phoneStatus = true;
    },
    RphoneBlur() {
      this.usernameStatus = false;
      this.identityStatus = false;
      this.phoneStatus = false;
    },
    Ryzm() {
      this.usernameStatus = false;
      this.identityStatus = false;
      this.phoneStatus = false;
      this.yzmStatus = true;
    },
    RyzmBlur() {
      this.usernameStatus = false;
      this.identityStatus = false;
      this.phoneStatus = false;
      this.yzmStatus = false;
    },
    Rpassword() {
      this.passwordStatus = true;
      this.RpasswordChange();
      this.isTips = true;
    },
    RpasswordBlur() {
      this.passwordStatus = false;
      this.isSuccessful = false;
      this.isAgainSuccessful = false;
      this.isTips = false;
    },
    RApassword() {
      this.passwordStatus = false;
      this.focusStatusPassword = true;
      this.setInterName = setInterval(() => {
        if (this.newPassword != this.againPassword) {
          this.isRed = true;
        } else {
          this.isRed = false;
        }
      }, 2000);
    },
    RApasswordBlur() {
      this.passwordStatus = false;
      this.focusStatusPassword = false;
      this.isSuccessful = false;
      this.isAgainSuccessful = false;
      clearInterval(this.setInterName);
    },

    // 忘记密码
    forgetPas() {
      this.isForgetPas = true;
    },
    // 忘记密码确认按钮
    btnTrue() {
      forgetPassword(this.forgetPhone, this.forgetPassword, this.code)
        .then((res) => {
          console.log(res);
          if (res.code != 200) {
            this.$message(res.mes);
          } else {
            this.$message({
              showClose: true,
              message: "密码设置成功，跳转登录页面",
              type: "success",
            });
            this.isForgetPas = false;
            this.isRegister = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转立即注册
    toRegister() {
      this.isForgetPas = false;
      this.isRegister = true;
      this.nextRegister = false;
    },
    // 立即登录
    toLogin() {
      this.isRegister = false;
      this.isForgetPas = false;
    },
    // 注册
    Register() {
      register(this.registerPhone, this.code, this.newPassword, this.radio, this.username)
        .then((res) => {
          console.log(res);
          if (res.code == 400) {
            this.$message(res.mes);
          }
          if (res.code == 200) {
            this.isRegister = false;
            this.$message({
              showClose: true,
              message: "注册成功，跳转登录页面",
              type: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 立即注册是否点下一步
    next() {
      if(this.username == '' && this.registerPhone == '' && this.code == '') {
        return this.$message.error("内容不能为空！")
      }
      this.nextRegister = true;
    },
    // 判断设置密码里的值有没有改变
    RpasswordChange() {
      console.log(this.newPassword);
      if (this.newPassword.length > 4 && this.newPassword.length < 16) {
        this.isSuccessful = true;
      } else {
        this.isSuccessful = false;
      }
      const reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,15}$/;
      if (reg.test(this.newPassword) === true) {
        this.isAgainSuccessful = true;
      } else {
        this.isAgainSuccessful = false;
      }
      if (this.isSuccessful === true && this.isAgainSuccessful === true) {
        this.isChange = false;
      } else {
        this.isChange = true;
      }
    },
    // 注册时姓名的内容
    RusernameChange() {
      const nameReg = /^([\u4e00-\u9fa5]{2,50}|[a-zA-Z.\s]{2,50})$/;
      if (nameReg.test(this.username)) {
        this.isUnameColor = false;
      } else {
        this.isUnameColor = true;
      }
    },
    // 注册时手机号内容
    RphoneChange() {
      const phoneReg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      if (phoneReg.test(this.registerPhone)) {
        this.isPhoneColor = false;
      } else {
        this.isPhoneColor = true;
      }
    },
    // 忘记密码的验证码
    getForgetCode() {
      forgetCode(this.forgetPhone)
        .then((res) => {
          console.log(res);
          if (res.code != 200) {
            return this.$message.error("验证码发送失败！");
          } else {
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
 
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}

.index_login {
  height: 100vh;
  background: url("../assets/img/loginBg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  background-position: center;
  .index_login_con {
    width: 544px;
    height: 58vh;
    // border: 1px solid darkblue;
    padding-top: 10vh;
    margin-left: 60vw;
    .login_img {
      width: 120px;
      height: 32px;
    }
    .login_word {
      font-size: 24px;
      font-family: YouSheBiaoTiHei;
      color: #4e75ff;
      line-height: 31px;
      margin-top: 10px;
      font-style: oblique;
      font-weight: bold;
    }
    // 登录模块
    .login_container {
      width: inherit;
      height: 37vh;
      margin-top: 40px;
      .login_denglu {
        font-size: 24px;
        font-family: SourceHanSansSC-Medium, SourceHanSansSC;
        font-weight: 500;
        color: #2c2c2c;
        line-height: 36px;
      }
      // 姓名的需求
      .name_needly {
        width: 21%;
        height: 40px;
        position: fixed;
        top: 25vh;
        right: 11.7vw;
        background: url("../assets/login/passwor_img.png");
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        font-size: 13px;
        color: #fff;
        text-align: center;
        padding-top: 8px;
        box-sizing: border-box;
      }
      .login_phoneNumber,
      .login_pas,
      .login_y {
        width: 100%;
        color: #757575;
        font-size: 14px;
        margin-top: 10px;
      }
      .test {
        color: #4e75ff;
      }
      .login_phone {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #868686;
        margin-bottom: 40px;
        position: relative;
        .login_input {
          width: 78%;
          display: inline-block;
          border: none;
          outline: none;
          font-size: 14px;
          font-family: SourceHanSansSC-Normal, SourceHanSansSC;
          font-weight: 400;
          color: #5f5f5f;
          line-height: 40px;
        }
        .red_word {
          color: red;
          font-size: 13px;
          position: absolute;
          top: 20px;
          right: 0;
          .redImg {
            width: 13px;
            height: 13px;
          }
        }
        .red_again {
          color: red;
          font-size: 13px;
          position: absolute;
          top: 30px;
          right: 0;
          .redImg {
            width: 13px;
            height: 13px;
          }
        }
      }
      .red {
        border-bottom: 1px solid red;
      }
      .bottoms {
        border-bottom: 1px solid #4e75ff;
      }
      .login-password,
      .login_yzm {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #868686;
        position: relative;

        .login_y {
          font-size: 14px;
          font-family: SourceHanSansSC-Normal, SourceHanSansSC;
          font-weight: 400;
          color: #5f5f5f;
          line-height: 40px;
          display: inline-block;
          width: 20%;
        }
        .login_input {
          width: 80%;
          display: inline-block;
          border: none;
          outline: none;
          font-size: 14px;
          font-family: SourceHanSansSC-Normal, SourceHanSansSC;
          font-weight: 400;
          color: #5f5f5f;
          line-height: 40px;
        }
        .login_btn {
          width: 100px;
          height: 32px;
          border-radius: 20px;
          border: 1px solid #4e75ff;
          color: #2757ff;
          background: #fff;
          font-size: 13px;
        }
        .login_eyes {
          width: 20px;
          height: 20px;
          float: right;
          margin-top: 18px;
          margin-right: 5px;
        }
        .count {
          font-size: 14px;
          display: inline-block;
          float: right;
          margin-top: 18px;
          margin-right: 5px;
        }
        .red_word {
          color: red;
          font-size: 13px;
          position: absolute;
          top: 20px;
          right: 5%;
          .redImg {
            width: 13px;
            height: 13px;
          }
        }
      }
      .bottoms {
        border-bottom: 1px solid #4e75ff;
      }
      .red {
        border-bottom: 1px solid red;
      }
      .forget_password {
        height: 18px;
        font-size: 12px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
        font-weight: 400;
        color: #5f5f5f;
        line-height: 18px;
        float: right;
        margin-top: 5px;
        margin-right: 5px;
        cursor: pointer;
        // margin-bottom: 30px;
      }
      .clear {
        clear: both;
      }
      .login {
        width: 100%;
        height: 52px;
        margin-top: 64px;
        background-color: #4e75ff;
        color: #fff;
        letter-spacing: 2px;
        border-radius: 33px;
      }
      .login_footer {
        font-size: 14px;
        font-weight: 400;
        color: #5f5f5f;
        line-height: 20px;
        text-align: center;
        margin-top: 20px;
      }
      .passwordDemand {
        position: fixed;
        top: 25vh;
        right: 11.7vw;
        width: 15vw;
        height: 72px;
        background: url("../assets/login/passwor_img.png");
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        font-size: 10px;
        color: #fff;
        .demand_text {
          width: 100%;
          height: 15px;
          padding-top: 10px;
          position: relative;
          .demand_textImg {
            width: 13px;
            height: 13px;
            position: absolute;
            top: 10px;
            left: 5%;
          }
          .demand_textT {
            position: absolute;
            top: 10px;
            left: 12%;
          }
        }
      }
    }
  }
}
</style>