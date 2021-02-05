<template>
  <div class="a_level">
    <div class="a_level_header">
      <div class="header_title">填写IB课程，在线分析高考成绩趋势</div>
      <div class="subtitle">在下方列表中填写您的IB课程相关信息后系统会根据你实际情况进行评估，您所填的内容越真实详细，系统评估将会更加准确哦。</div>
    </div>
    <div class="a_level_form">
      <div class="form_tabs">
        <div class="tab" v-for="(item, index) in navs" :class="{ active: index == num }" @click="tab(index)" :key="index">{{ item }}</div>
      </div>
      <!--IBDP第一学年-->
      <div class="form_content">
        <el-form label-width="120px" :model="edus" ref="edusform" :rules="edusformRules">
          <div class="grade">{{ num == 0 ? "IBDP第一学年成绩" : "IBDP第二学年成绩" }}</div>
          <div class="grade-form">
            <div class="course-difficulty">
              <div class="grade-form-left">
                <div class="left">
                  <div>
                    <el-form-item label="年份日期" prop="time">
                      <el-date-picker v-model="edus.time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <h5>课程难度：HL</h5>
                    <div class="course" v-for="(item, index) in edus.hl" :key="index">
                      <el-form-item
                        label="课程科目"
                        :prop="'hl.' + index + '.lesson'"
                        :rules="[{ required: true, message: '课程不能为空', trigger: 'change' }]"
                      >
                        <el-cascader v-model="item.lesson" :options="options" clearable></el-cascader>
                      </el-form-item>
                      <el-form-item
                        label="科目成绩"
                        :prop="'hl.' + index + '.grade'"
                        :rules="[{ required: true, message: '成绩不能为空', trigger: 'change' }]"
                      >
                        <el-select v-model="item.grade" placeholder="请输入学分">
                          <el-option v-for="item in optionsdifficulty" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <div class="deleteBtn" v-if="index != 0" @click.prevent="removeDomainHl(item)">
                          <span class="el-icon-remove-outline"></span>
                        </div>
                      </el-form-item>
                    </div>
                    <div class="addCourse" @click="addCourseHl"><el-button type="primary" icon="el-icon-plus">新增课程</el-button></div>
                  </div>
                </div>
              </div>
              <div class="grade-form-left">
                <div class="left">
                  <div>
                    <h5>课程难度：SL</h5>
                    <div class="course" v-for="(item, index) in edus.sl" :key="index">
                      <el-form-item
                        label="课程科目"
                        :prop="'sl.' + index + '.lesson'"
                        :rules="[{ required: true, message: '课程不能为空', trigger: 'change' }]"
                      >
                        <el-cascader v-model="item.lesson" :options="options" clearable></el-cascader>
                      </el-form-item>
                      <el-form-item
                        label="科目成绩"
                        :prop="'sl.' + index + '.grade'"
                        :rules="[{ required: true, message: '成绩不能为空', trigger: 'change' }]"
                      >
                        <el-select v-model="item.grade" placeholder="请输入学分">
                          <el-option v-for="item in optionsdifficulty" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>

                        <div class="deleteBtn" v-if="index != 0" @click.prevent="removeDomainSl(item)">
                          <span class="el-icon-remove-outline"></span>
                        </div>
                      </el-form-item>
                    </div>
                    <div class="addCourse" @click="addCoursesl"><el-button type="primary" icon="el-icon-plus">新增课程</el-button></div>
                  </div>
                </div>
              </div>

              <div class="grade-form-left">
                <div class="left">
                  <div>
                    <div class="course">
                      <el-form-item label="EE题目" prop="ee.ee" :rules="[{ required: true, message: '题目不能为空', trigger: 'change' }]">
                        <el-input v-model="edus.ee.ee" placeholder="请输入题目" style="width: 218px"></el-input>
                      </el-form-item>
                      <el-form-item label="EE学分" prop="ee.grade" :rules="[{ required: true, message: '学分不能为空', trigger: 'change' }]">
                        <el-select v-model="edus.ee.grade" placeholder="请输入学分">
                          <el-option v-for="item in optionslevel" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="course">
                      <el-form-item label="TOK题目" prop="tok.tok" :rules="[{ required: true, message: '题目不能为空', trigger: 'change' }]">
                        <el-input v-model="edus.tok.tok" placeholder="请输入题目" style="width: 218px"></el-input>
                      </el-form-item>
                      <el-form-item label="TOK学分" prop="tok.grade" :rules="[{ required: true, message: '学分不能为空', trigger: 'change' }]">
                        <el-select placeholder="请输入学分" v-model="edus.tok.grade">
                          <el-option v-for="item in optionslevel" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <el-form-item label="CAS活动课程" prop="cas.cas" :rules="[{ required: true, message: '活动课程不能为空', trigger: 'change' }]">
                      <el-input
                        v-model="edus.cas.cas"
                        type="textarea"
                        :rows="3"
                        resize="none"
                        style="width: 515px"
                        placeholder="请输入活动课程"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="活动成果" prop="cas.content" :rules="[{ required: true, message: '活动成果不能为空', trigger: 'change' }]">
                      <el-input
                        v-model="edus.cas.content"
                        type="textarea"
                        :rows="3"
                        resize="none"
                        style="width: 515px"
                        placeholder="请输入活动成果"
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>

          <div class="grade">{{ num == 0 ? "第一学年其他课外活动（竞赛）" : "第二学年其他课外活动（竞赛）" }}</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <div class="left" v-for="(active, index) in edus.activity" :key="index">
                <div>
                  <el-form-item label="年份日期" :prop="'activity.' + index + '.time'">
                    <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="active.time"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="参加活动" :prop="'activity.' + index + '.activity'">
                    <el-input
                      v-model="active.activity"
                      type="textarea"
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
                <div class="addNode" @click="addAct" v-if="index >= edus.activity.length - 1">
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
  data() {
    return {
      navs: ["IBDP第一学年", "IBDP第二学年"],
      num: 0,
      edus: {
        type: "3",
        stage: "IBDP第一学年",
        time: "",
        subject: {
          SL: {},
          HL: {},
          EE: {},
          TOK: {},
          CAS: {},
        },
        hl: [
          {
            lesson: "",
            grade: "",
            key: Date.now(),
          },
        ],
        sl: [
          {
            lesson: "",
            grade: "",
            key: Date.now(),
          },
        ],
        ee: { ee: "", grade: "" },
        tok: { tok: "", grade: "" },
        cas: { cas: "", content: "" },
        activity: [
          {
            key: Date.now(),
            time: "",
            activity: "",
            achievement: "",
          },
        ],
      },
      //表单数据的验证规则
      edusformRules: {
        time: [{ required: true, message: "时间不能为空", trigger: "change" }],
      },
      options: AP_COURSE,
      optionsdifficulty: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
        {
          value: "7",
          label: "7",
        },
      ],
      optionslevel: [
        {
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
        },
        {
          value: "C",
          label: "C",
        },
        {
          value: "D",
          label: "D",
        },
        {
          value: "E",
          label: "E",
        },
      ],
    };
  },
  watch: {},
  methods: {
    tab(index) {
      this.num = index;
      if (this.num == 0) {
        this.edus.stage = "IBDP第一学年";
      } else {
        this.edus.stage = "IBDP第二学年";
      }
    },
    handleSelectSubject(item) {
      item.select = !item.select;
    },
    addCourseHl() {
      this.edus.hl.push({});
    },
    addCoursesl() {
      this.edus.sl.push({});
    },
    addAct() {
      this.edus.activity.push({
        key: Date.now(),
        time: "",
        activity: "",
        achievement: "",
      });
    },
    //删除课程
    removeDomainHl(item) {
      var index = this.edus.hl.indexOf(item);
      if (index !== -1 && index != 0) {
        this.edus.hl.splice(index, 1);
      }
    },
    removeDomainSl(item) {
      var index = this.edus.sl.indexOf(item);
      if (index !== -1 && index != 0) {
        this.edus.sl.splice(index, 1);
      }
    },
    //删除活动
    removeActives(index) {
      const activity = this.edus.activity;
      if (activity.length === 1) return;
      activity.splice(index, 1);
    },
    //提交表单
    handleSumbit() {
      var hl = this.edus.hl;
      var sl = this.edus.sl;
      var ee = this.edus.ee.ee;
      var tok = this.edus.tok.tok;
      var cas = this.edus.cas.cas;
      this.edus.subject.EE.ee = this.edus.ee.grade;
      this.edus.subject.TOK.tok = this.edus.tok.grade;
      this.edus.subject.CAS.cas = this.edus.cas.content;
      var that = this;
      hl.map(function (e, item) {
        if (Array.isArray(e.lesson)) {
          e.lesson = e.lesson.join(",");
          that.edus.subject["HL"][e.lesson] = e.grade;
        }
      });
      sl.map(function (e, item) {
        if (Array.isArray(e.lesson)) {
          e.lesson = e.lesson.join(",");
          that.edus.subject["SL"][e.lesson] = e.grade;
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
      this.edus = {
        type: "3",
        stage: "IBDP第一学年",
        time: "",
        subject: {
          SL: {},
          HL: {},
          EE: {},
          TOK: {},
          CAS: {},
        },
        hl: [
          {
            lesson: "",
            grade: "",
            key: Date.now(),
          },
        ],
        sl: [
          {
            lesson: "",
            grade: "",
            key: Date.now(),
          },
        ],
        ee: { ee: "", grade: "" },
        tok: { tok: "", grade: "" },
        cas: { cas: "", content: "" },
        activity: [
          {
            key: Date.now(),
            time: "",
            activity: "",
            achievement: "",
          },
        ],
      };
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
        margin-bottom: 39px;
        display: flex;
        flex-direction: column;
        .left {
          padding-bottom: 100px;
          display: flex;
          align-items: center;
          .course {
            display: flex;
            .deleteBtn {
              position: absolute;
              top: 5px;
              right: -90px;
              font-size: 30px;
              color: #8f8f8f;
            }
          }
          .delete_active {
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

        h5 {
          font-weight: 600;
          color: #315eff;
          margin: 30px;
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
        // margin-bottom: 160px;
        position: relative;
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
        margin-left: 60px;
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
