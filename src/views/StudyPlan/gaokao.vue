<template>
  <div class="a_level">
    <div class="a_level_header">
      <div class="header_title">填写高考课程，在线分析高考成绩趋势</div>
      <div class="subtitle">在下方列表中填写您的高考相关信息后系统会根据你实际情况进行评估，您所填的内容越真实详细，系统评估将会更加准确哦。</div>
    </div>
    <div class="a_level_form">
      <div class="form_tabs">
        <div class="tab" v-for="(item, index) in navs" :class="{ active: index == num }" @click="tab(index)" :key="item">{{ item }}</div>
      </div>

      <!-- 高考表单 -->
      <div class="form_content">
        <el-form label-width="100px" ref="gaokaoform" :model="gaokaoform">
          <div class="grade">{{ tabText }}课程成绩</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <div class="left">
                <div>
                  <div class="course">
                    <el-form-item label="年份日期" prop="time" :rules="{ required: true, trigger: 'blur', message: '请选择日期' }">
                      <el-date-picker v-model="gaokaoform.time" value-format="yyyy-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="高考地区" prop="region" :rules="{ required: true, message: '请选择地区', trigger: 'blur' }">
                      <el-select v-model="gaokaoform.region" placeholder="请选择地区" style="width: 218px">
                        <el-option v-for="item in province" :key="item.id" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="语文成绩" prop="yuwen" :rules="{ required: true, message: '请输入分数', trigger: 'blur' }">
                    <el-input v-model="gaokaoform.yuwen" placeholder="请输入分数" style="width: 218px"></el-input>
                  </el-form-item>
                  <el-form-item label="数学成绩" prop="shuxue" :rules="{ required: true, message: '请输入分数', trigger: 'blur' }">
                    <el-input v-model="gaokaoform.shuxue" placeholder="请输入分数" style="width: 218px"></el-input>
                  </el-form-item>
                  <div class="course">
                    <el-form-item label="外语成绩" prop="waiyu" :rules="{ required: true, message: '请输入分数', trigger: 'blur' }">
                      <el-input v-model="gaokaoform.waiyu" placeholder="请输入分数" style="width: 218px"></el-input>
                    </el-form-item>
                    <el-form-item label="外语科目" prop="waiyukemu" :rules="{ required: true, message: '请选择外语科目', trigger: 'blur' }">
                      <el-select v-model="gaokaoform.waiyukemu" placeholder="请选择科目" style="width: 218px">
                        <el-option v-for="item in foeign" :key="item.value" :value="item.value" :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <div class="other-subjects">
                    <div class="sub-title">选择其它科目（可多选）：</div>
                  </div>
                  <div class="subjects">
                    <div
                      class="subject"
                      v-for="(item, index) in subjects"
                      :key="index"
                      @click="handleSelectSubject(item)"
                      :class="{ subject_active: item.select }"
                    >
                      {{ item.sub }}
                    </div>
                  </div>
                  <el-form-item :label="item.sub" v-show="item.select" v-for="(item, index) in subjects" :key="index" style="margin-left: -25px">
                    <el-input v-model="courses[item.sub]" placeholder="请输入分数" style="width: 218px"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>

          <div class="grade">{{ tabText }}所参加课外活动</div>
          <div class="grade-form">
            <div class="grade-form-left">
              <div class="left" v-for="(act, index) in gaokaoform.activity" :key="index">
                <div>
                  <el-form-item label="年份日期" :prop="`activity.${index}.time`">
                    <el-date-picker value-format="yyyy-MM-DD" v-model="act.time" type="date" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="参加活动" :prop="`activity.${index}.activity`">
                    <el-input
                      type="textarea"
                      v-model="act.activity"
                      :rows="3"
                      resize="none"
                     class='input-box'
                      placeholder="请输入活动内容"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="活动成果" :prop="`activity.${index}.achievement`">
                    <el-input
                      type="textarea"
                      v-model="act.achievement"
                      :rows="3"
                      resize="none"
                      class='input-box'
                      placeholder="请输入活动成果"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="middle-line"></div>
                <div class="addNode" @click="addAct" v-if="index >= gaokaoform.activity.length - 1">
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
              <div class="submit" @click="onSubmit">提交</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { memberCourse } from "@/api/study";
import { province } from "./courseConf";
export default {
  data() {
    return {
      navs: ["高一", "高二", "高三"],
      num: 0,
      ruleForm: {
        name: "",
      },
      gaokaoform: null,
      formCache: null,
      foeign: [
        {
          label: "英语",
          value: "英语",
        },
        {
          label: "俄语",
          value: "俄语",
        },
        {
          label: "日语",
          value: "日语",
        },
        {
          label: "德语",
          value: "德语",
        },
        {
          label: "法语",
          value: "法语",
        },
        {
          label: "西班牙语",
          value: "西班牙语",
        },
      ],
      subjects: [
        { select: true, sub: "政治" },
        { select: false, sub: "历史" },
        { select: false, sub: "地理" },
        { select: false, sub: "物理" },
        { select: false, sub: "化学" },
        { select: false, sub: "生物" },
        { select: false, sub: "技术" },
        { select: false, sub: "综合" },
      ],
      courses: {
        政治: "",
        历史: "",
        地理: "",
        物理: "",
        化学: "",
        生物: "",
        技术: "",
        综合: "",
      },
      province,
    };
  },
  watch: {},
  computed: {
    tabText() {
      return this.navs[this.num];
    },
  },
  created() {
    this.formCache = new Map();
    for (let n of this.navs) {
      this.formCache.set(n, this.getInitForm(n));
    }
    this.gaokaoform = this.formCache.get(this.tabText);

    // this.gaokaoform.time = Date.now()
    this.gaokaoform.region = "";
    this.gaokaoform.yuwen = '';
    this.gaokaoform.shuxue = '';
    this.gaokaoform.waiyu = '';
    this.gaokaoform.waiyukemu = "";
  },
  methods: {
    // tab 切换
    tab(index) {
      this.num = index;
      // this.$refs.gaokaoform.clearValidate();
      this.gaokaoform = this.formCache.get(this.tabText);
    },
    // 获取初始 gaokaoform对象
    getInitForm(stage) {
      return {
        type: "4",
        stage: stage || "",
        time: "",
        region: "", // 地区
        subject: { 0: {} },
        activity: [
          {
            key: Date.now(),
            time: "",
            activity: "",
            achievement: "",
          },
        ],
        yuwen: "",
        shuxue: "",
        waiyu: "",
        waiyukemu: "",
      };
    },
    handleSelectSubject(item) {
      item.select = !item.select;
    },
    addAct() {
      this.gaokaoform.activity.push({
        key: Date.now(),
        time: "",
        activity: "",
        achievement: "",
      });
    },
    //删除活动
    removeActives(index) {
      const activity = this.gaokaoform.activity;
      if (activity.length === 1) return;
      activity.splice(index, 1);
    },
    onSubmit() {
      this.$refs.gaokaoform.validate((flag) => {
        if (flag) {
          const { type, stage, time, region, subject, yuwen, shuxue, waiyu, waiyukemu, activity } = this.gaokaoform;
          subject["0"]["语文"] = yuwen;
          subject["0"]["数学"] = shuxue;
          subject["0"][waiyukemu] = waiyu;
          this.subjects
            .filter((ele) => ele.select)
            .forEach((ele) => {
              subject["0"][ele.sub] = this.courses[ele.sub];
            });
          memberCourse({ type, stage, time, region, subject, activity })
            .then((res) => {
              for (let key in this.courses) {
                this.courses[key] = "";
              }
              this.subjects = [
                { select: true, sub: "政治" },
                { select: false, sub: "历史" },
                { select: false, sub: "地理" },
                { select: false, sub: "物理" },
                { select: false, sub: "化学" },
                { select: false, sub: "生物" },
                { select: false, sub: "技术" },
                { select: false, sub: "综合" },
              ];
              this.gaokaoform = this.getInitForm(this.tabText);
              this.formCache.set(this.tabText, this.gaokaoform);
            })
            .catch((err) => console.log(err));
        }
      });
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
      }

      .addNode {
        width: 316px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        position: relative;
        cursor:pointer;
        // margin-bottom: 120px;
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
    cursor: pointer;
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
