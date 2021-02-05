<template>
  <div class="a_level">
    <div class="a_level_header">
      <div class="header_title">填写AP课程，在线分析AP成绩趋势</div>
      <div class="subtitle">在下方列表中填写您的AP相关信息后系统会根据你实际情况进行评估，您所填的内容越真实详细，系统评估将会更加准确哦。</div>
    </div>
    <div class="a_level_form">
      <div class="form_tabs">
        <div class="tab" v-for="(item, index) in navs" :class="{ active: index == num }" @click="tab(index)" :key="index">{{ item }}</div>
      </div>

      <div class="form_content">
        <el-form label-width="100px" :model="apform" ref="apform" :rules="apformRules">
          <div class="grade">{{ tabText }}AP课程成绩</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <el-form-item label="年份日期" prop="time">
                <el-date-picker v-model="apform.time" type="date" placeholder="选择日期" value-format="yyyy-MM-DD"></el-date-picker>
              </el-form-item>

              <template v-for="(item, index) in apform.courses">
                <div class="course" :key="item.key">
                  <el-form-item
                    label="课程科目"
                    :prop="'courses.' + index + '.subject'"
                    :rules="{ required: true, message: '请选择课程科目', trigger: 'blur' }"
                  >
                    <!-- <el-select v-model="item.subject">
                      <el-option v-for="course in options" :key="course.nos" :label="course.label" :value="course.label"></el-option>
                    </el-select> -->
                    <el-cascader v-model="item.subject" :options="options" clearable></el-cascader>
                  </el-form-item>
                  <el-form-item
                    label="科目成绩"
                    :prop="'courses.' + index + '.score'"
                    :rules="{ required: true, message: '请输入分数', trigger: 'blur' }"
                  >
                    <el-input v-model="item.score" placeholder="请输入分数" style="width: 218px"></el-input>
                  </el-form-item>
                  <span class="el-icon-remove-outline remove-mark" @click="removeCourse(index)" v-if="index !== 0"></span>
                </div>
              </template>

              <div class="addCourse" style="margin-bottom: 60px;">
                <el-button type="primary" icon="el-icon-plus" @click="addCourse">新增科目</el-button>
              </div>
            </div>
          </div>
          <!-- <div class="line"></div> -->
          <div class="boldline"></div>
          <div class="grade" style="padding-top: 25px;">{{ apform.tabText }}所参加课外活动</div>

          <template v-for="(item, index) in apform.activity">
            <div class="grade-form" :key="item.key">
              <div class="grade-form-left">
                <!-- :rules="{ required: true, message: '请选择一个日期', trigger: 'blur' }" -->
                <el-form-item label="年份日期" :prop="`activity.${index}.time`">
                  <el-date-picker v-model="item.time" value-format="yyyy-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <!-- :rules="{ required: true, message: '请输入参加活动名称', trigger: 'blur' }" -->
                <el-form-item label="参加活动" :prop="`activity.${index}.activity`">
                  <el-input v-model="item.activity" type="textarea" :rows="3" resize="none" placeholder="请输入活动内容" class="input-box"></el-input>
                </el-form-item>
                <!-- :rules="{ required: true, message: '请输入活动成果', trigger: 'blur' }" -->
                <el-form-item label="活动成果" :prop="`activity.${index}.achievement`">
                  <el-input
                    v-model="item.achievement"
                    type="textarea"
                    :rows="3"
                    resize="none"
                    placeholder="请输入活动成果"
                    class="input-box"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="middle-line"></div>
              <div class="addNode" @click="addActivity" v-if="index >= apform.activity.length - 1">
                <div class="add">+</div>
                <div class="desc">（添加其他课外活动）</div>
              </div>
              <div class="addNode" @click="removeActivity(index)" v-else>
                <div class="add">-</div>
                <div class="desc">移除该项</div>
              </div>
            </div>
          </template>
          <div class="boldline"></div>

          <el-form-item>
            <div class="btns">
              <div class="submit" @click="onSubmit">提交</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { AP_COURSE } from "./courseConf.js";
import { memberCourse } from "@/api/study";
export default {
  data() {
    return {
      navs: ["高一", "高二", "高三"],
      num: 0,
      apform: null,
      apformRules: {
        time: { required: true, message: "请选择年份日期", trigger: "blur" }
      },
      value: [],
      options: AP_COURSE,
      formCache: new Map()
    };
  },
  computed: {
    tabText() {
      return this.navs[this.num];
    }
  },
  watch: {
    // "apform.courses": function(courses) {
    // }
  },
  created() {
    // 创建不同tab下的表单对象
    for (let n of this.navs) {
      this.formCache.set(n, this.initApform(n));
    }

    this.apform = this.formCache.get(this.tabText);
  },
  methods: {
    // 高一 高二 高三 tab 点击事件处理函数
    tab(index) {
      this.num = index;
      this.$refs.apform.clearValidate();
      this.apform = this.formCache.get(this.tabText);
    },
    handleSelectSubject(item) {
      item.select = !item.select;
    },

    // 返回 apform 表单 初始内容
    initApform(stage) {
      return {
        type: "2",
        stage: stage || "",
        time: "",
        subject: {},
        courses: [
          {
            subject: "",
            score: "",
            key: Date.now()
          }
        ],
        activity: [
          {
            key: Date.now(),
            time: "",
            activity: "",
            achievement: ""
          }
        ]
      };
    },

    // 添加一项 课程表单项
    addCourse() {
      this.apform.courses.push({
        key: Date.now(),
        subject: "",
        score: ""
      });
    },

    // 移除一项 课程表单项
    removeCourse(index) {
      const courses = this.apform.courses;
      if (courses.length === 1) return;
      courses.splice(index, 1);
    },

    // 添加一项 活动项
    addActivity() {
      this.apform.activity.push({
        key: Date.now(),
        time: "",
        activity: "",
        achievement: ""
      });
    },

    // 移除一项 活动项
    removeActivity(index) {
      const activity = this.apform.activity;
      if (activity.length === 1) return;
      activity.splice(index, 1);
    },

    onSubmit() {
      // 请求提交API
      //
      this.$refs.apform.validate(flag => {
        if (flag) {
          const courses = this.apform.courses;
          this.apform.subject["0"] = {};
          let subjects = this.apform.subject["0"];
          for (let n of courses) {
            subjects[n.subject.join(",")] = n.score;
          }

          memberCourse(this.apform)
            .then(res => {
              this.$message({ type: "success", message: "提交成功" });
              this.apform = this.initApform(this.tabText);
              this.formCache.set(this.tabText, this.apform);
            })
            .catch(err => console.log(err));
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.remove-mark {
  display: inline-block;
  vertical-align: 17px;
  line-height: 40px;
  margin-left: 20px;
  color: currentColor;
  font-size: 30px;
  color: #a1a1a1;
  cursor: pointer;
  // color: #606266;
}

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
    cursor: pointer;
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
      margin-top: 20px;
      .grade-form-left {
        padding-left: 40px;
        padding-right: 65px;
        .course {
          display: flex;
        }
        .addCourse {
          display: flex;
          justify-content: flex-end;
        }
        .input-box {
          width: 615px;
        }
      }

      &:nth-last-child(3) {
        margin-bottom: 104px;
      }

      .addNode {
        width: 316px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin-right: 77px;
        margin-right: 53px;
        position: relative;
        cursor:pointer;
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

      .middle-line {
        width: 2px;
        height: 240px;
        background: #f4f4f4;
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
.other-subjects {
  .sub-title {
    font-size: 0.875rem;
    color: #606266;
    line-height: 2.5rem;
    margin-left: 30px;
  }
}
.subjects {
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  .subject {
    width: 66px;
    height: 32px;
    border-radius: 30px;
    text-align: center;
    line-height: 32px;
    font-size: 7px;
    font-family: SourceHanSansSC-Medium;
    font-weight: 500;
    margin-right: 24px;
    border: 1px solid #979797;
    color: #989898;
  }
  .subject_active {
    background: #4e75ff;
    color: #ffffff;
    border: 1px solid #4e75ff;
  }
}
.subfromGroup {
  display: flex;
  flex-direction: column;
}
</style>
