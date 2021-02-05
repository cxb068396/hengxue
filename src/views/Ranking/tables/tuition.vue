<template>
 
  
      <div class="tuition" v-if="visible">
        <div @click="close" class="close">x</div>
        <div class="tuitiondata">
          <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{ background: '#4E75FF', color: '#fff' }"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="date" label="专业代码" width="180"></el-table-column>
            <el-table-column prop="name" label="专业名称" width="180"></el-table-column>
            <el-table-column prop="address" label="学年"></el-table-column>
            <el-table-column prop="address" label="学费"></el-table-column>
            <el-table-column prop="address" label="奖学金"></el-table-column>
            <el-table-column prop="address" label="补助金"></el-table-column>
          </el-table>
        </div>
      </div>
 

</template>
 
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  watch: {
    // 监听学校id的变化
    id(newV, oldV) {
      return (this.id = newV);
    },
  },
  created() {},

  computed: {},
  mounted() {},
  methods: {
    close() {
      this.$emit("close");
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "";
      }
      return "success-row";
    },
  },
};
</script>
 
<style lang="scss">
.tuition {
  width: 868px;
  height: 636px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  .close {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    float: right;
    margin: 10px;
    font-size: 16px;
    color: #ccc;
    transition: transform 0.5s;
    -moz-transition: -moz-transform 0.5s; /* Firefox 4 */
    -webkit-transition: -webkit-transform 0.5s; /* Safari 和 Chrome */
    -o-transition: -o-transform 0.5s;
  }
  .close:hover {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
  }
  .tuitiondata {
    margin: 38px;
  }
  .el-table .success-row {
    background: #e4eaff;
  }
}
// .v-enter {
//   opacity: 0;
//   transform: translateX(100%);
// }
// .v-leave-to {
//   opacity: 0;
//   transform: translateX(100%);
//   // 解决页面从上往下位移问题
//   // position: absolute;
// }
// .v-enter-active,
// .v-leave-active {
//   transition: all 0.35s ease;
// }
</style>