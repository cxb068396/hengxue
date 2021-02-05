<template>
  <div class="a_level">
    <div class="a_level_header">
      <div class="header_title">填写A-LEVEL课程，在线分析A-LEVEL成绩趋势</div>
      <div class="subtitle">在下方列表中填写您的A-LEVEL相关信息后系统会根据你实际情况进行评估，您所填的内容越真实详细，系统评估将会更加准确哦。</div>
    </div>
    <div class="a_level_form">
      <div class="form_tabs">
        <div class="tab" v-for="(item, index) in navs" :class="{ active: index == num }" @click="tab(index)" :key="index">{{ item }}</div>
      </div>
      <!--AS年级-->
      <div class="form_content">
        <el-form label-width="100px" :model="edus" ref="edusform" :rules="edusformRules">
          <div class="grade">{{ num == 0 ? "AS课程成绩" : "A2课程成绩" }}</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <div class="left">
                <div>
                  <el-form-item label="年份日期" prop="time">
                    <el-date-picker type="date" value-format="yyyy-MM-dd" v-model="edus.time" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                  <div class="course" v-for="(item, index) in edus.course" :key="index">
                    <el-form-item label="课程科目" :prop="'course.' + index + '.lesson'" :rules="edusformRules.course">
                      <el-cascader :show-all-levels="false" v-model="item.lesson" :options="options" clearable></el-cascader>
                    </el-form-item>
                    <el-form-item label="课程成绩" :prop="'course.' + index + '.grade'" :rules="edusformRules.grade">
                      <el-input placeholder="请输入分数" v-model="item.grade"></el-input>
                      <div class="deleteBtn" v-if="index != 0" @click.prevent="removeDomain(item)"><span class="el-icon-remove-outline"></span></div>
                    </el-form-item>
                  </div>
                  <div class="addCourse"><el-button type="primary" icon="el-icon-plus" @click="addCourse">新增课程</el-button></div>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>

          <div class="grade">{{ num == 0 ? "AS所参加课外活动" : "A2所参加课外活动" }}</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <div class="left" v-for="(active, index) in edus.activity" :key="index">
                <div>
                  <el-form-item label="年份日期" :prop="'activity.' + index + '.time'">
                    <el-date-picker value-format="yyyy-MM-dd" type="date" v-model="active.time" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="参加活动" :prop="'activity.' + index + '.activity'">
                    <el-input
                      type="textarea"
                      v-model="active.activity"
                      :rows="3"
                      resize="none"
                     class='input-box'
                      placeholder="请输入活动内容"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="活动成果" :prop="'activity.' + index + '.achievement'">
                    <el-input
                      type="textarea"
                      v-model="active.achievement"
                      :rows="3"
                      resize="none"
                     class='input-box'
                      placeholder="请输入活动成果"
                    ></el-input>
                  </el-form-item>
                </div>
                 <div class="middle-line"></div>
                <div class="addNode" @click="addActives" v-if="index >= edus.activity.length - 1">
                  <div class="add">+</div>
                  <div class="desc">（添加其他课外活动）</div>
                </div>
                <div class="addNode" v-else @click="removeActives(index)">
                  <div class="add">-</div>
                  <div class="desc">移除该项</div>
                </div>
              </div>
            </div>
          </div>
          <div class="boldline"></div>
          <el-form-item>
            <div class="btns">
              <div class="submit" @click="handleSumbit">提交</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { AP_COURSE } from "./courseConf.js";
import { memberCourse } from "@/api/study.js";
export default {
  props: {},
  data() {
    return {
      navs: ["AS年级", "A2年级"],
      num: 0,
      edus: {
        type: "1",
        stage: "AS年级",
        time: "",
        subject: {
          0: {},
        },
        course: [
          {
            lesson: "",
            grade: "",
            key: Date.now(),
          },
        ],
        activity: [
          {
            key: Date.now(),
            time: "",
            activity: "",
            achievement: "",
          },
        ],
      },
      options: AP_COURSE,
      //表单数据的验证规则
      edusformRules: {
        time: [{ required: true, message: "日期不能为空", trigger: "change" }],
        course: [{ required: true, message: "课程不能为空", trigger: "change" }],
        grade: [{ required: true, message: "学分不能为空", trigger: "change" }],
      },
    };
  },
  watch: {},
  methods: {
    tab(index) {
      console.log(index);
      this.num = index;
      if (index == 0) {
        this.edus.stage = "AS年级";
      } else {
        this.edus.stage = "A2年级";
      }
    },
    //添加课程
    addCourse() {
      this.edus.course.push({});
    },
    //添加活动
    addActives() {
      this.edus.activity.push({
        key: Date.now(),
        time: "",
        activity: "",
        achievement: "",
      });
    },
    //删除课程
    removeDomain(item) {
      var index = this.edus.course.indexOf(item);
      if (index !== -1 && index != 0) {
        this.edus.course.splice(index, 1);
      }
    },
    //删除活动
    removeActives(index) {
      // var index = this.edus.activity.indexOf(item);
      // if (index !== -1 && index != 0) {
      //   this.edus.activity.splice(index, 1);
      // }
      const activity = this.edus.activity;
      if (activity.length === 1) return;
      activity.splice(index, 1);
    },
    //提交表单
    handleSumbit() {
      var that = this;
      var course = this.edus.course;
      course.map(function (e, item) {
        if (Array.isArray(e.lesson)) {
          e.lesson = e.lesson.join(",");
          that.edus.subject["0"][e.lesson] = e.grade;
        }
      });
      this.$refs.edusform.validate((valid) => {
        if (valid) {
          memberCourse(that.edus)
            .then((res) => {
              if (res.code == "200") {
                that.$message({
                  type: "success",
                  message: "提交成功",
                });
                that.$refs["edusform"].resetFields();
                that.initEdusForm();
              } else {
                that.$message({
                  type: "error",
                  message: "提交失败",
                });
              }
            })
            .catch((err) => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置活动表单
    initEdusForm() {
      this.edus.activity = [
        {
          key: Date.now(),
          time: "",
          activity: "",
          achievement: "",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.a_level_header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 103px 0 80px 0;
  text-align: center;
  background: url("~@/assets/plan/form.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  .header_title {
    font-size: 32px;
    font-family: SourceHanSansSC-Bold, SourceHanSansSC;
    font-weight: bold;
    color: #ffffff;
  }
  .subtitle {
    font-size: 16px;
    font-family: pingfangSc-medium;
    font-weight: 500;
    color: #ffffff;
    width: 609px;
    padding-top: 20px;
    margin: 0px auto;
    line-height: 36px;
  }
}
.a_level_form {
  display: flex;
  margin-top: 58px;
  padding-bottom: 54px;
  .form_tabs {
    display: flex;
    flex-direction: column;
    width: 151px;
    height: 124px;
    .tab {
      width: 100%;
      height: 62px;
      background-color: #fff;
      position: relative;
      text-align: center;
      line-height: 62px;
    }
    .active::before {
      content: "";
      width: 4px;
      height: 28px;
      background: #4e75ff;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 17px;
    }
    .tab:hover {
      background: #4e75ff;
      color: #fff;
    }
  }
  .form_content {
    width: 1180px;
    margin-left: 17px;
    background-color: #fff;
    padding-top: 28px;
    .line {
      width: 100%;
      height: 2px;
      background: #e8e7e7;
      margin-bottom: 28px;
    }
    .boldline {
      width: 100%;
      height: 12px;
      background: #f6f6f6;
    }
    .grade {
      font-size: 16px;
      font-family: PingFang-SC-Semibold;
      font-weight: 500;
      color: #315eff;
      line-height: 24px;
      border-bottom: 2px solid #e8e7e7;
      padding: 0 0 30px 80px;
    }
    .grade-form {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 104px;
      margin-top: 40px;
      .grade-form-left {
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        .left {
          position: relative;
          padding-bottom: 100px;
          display: flex;
           align-items: center;
          .course {
            display: flex;
            position: relative;
            .deleteBtn {
              position: absolute;
              top: 5px;
              right: -90px;
              font-size: 30px;
              color: #8f8f8f;
            }
          }
          .deleteActiveBtn {
            position: absolute;
            bottom: 0px;
            right: -90px;
            font-size: 30px;
            color: #8f8f8f;
          }
             .input-box {
          width: 615px;
        }
        }
        .addCourse {
          display: flex;
          justify-content: flex-end;
        }
      }

      .addNode {
        width: 316px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        cursor:pointer;
        

     
        position: relative;
        // border-left: 1px solid #f4f4f4;
        .add {
          width: 95px;
          height: 95px;
          background: #efefef;
          font-size: 60px;
          color: #fff;
          text-align: center;
          line-height: 95px;
          margin-bottom: 22px;
        }
        .desc {
          font-size: 14px;
          font-weight: 500;
          color: #8f8f8f;
        }
      }
      // .addNode::before {
      //   content: "";
      //   width: 2px;
      //   height: 240px;
      //   background: #f4f4f4;
      //   position: absolute;
      //   top: 0;
      //   left: -40px;
      // }
          .middle-line {
        width: 2px;
        height: 240px;
        background: #f4f4f4;
        margin-left:60px ;
      }
    }
    .btns {
      width: 100%;
      height: 120px;
      background-color: #fff;
      padding-top: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -100px;
      .save,
      .submit {
        border-radius: 26px;
        width: 160px;
        height: 40px;
        font-size: 18px;
        font-family: SourceHanSansSC-Bold, SourceHanSansSC;
        font-weight: bold;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
      }
      .save {
        background: #4e75ff;
        box-shadow: 0px 9px 22px 0px rgba(78, 117, 255, 0.34);
        margin-right: 120px;
      }
      .submit {
        background: #ff941c;
        box-shadow: 0px 8px 29px 0px rgba(255, 144, 20, 0.43);
      }
    }
  }
}
</style>
