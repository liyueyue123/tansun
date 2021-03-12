<template>
  <el-container>
    <el-main>
      <div>
        <el-table
          ref="multipleTable"
          :data="roleData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="所在岗位"  prop="postName">
          </el-table-column>
          <el-table-column label="岗位代码"  prop="postCode">
          </el-table-column>
          <el-table-column  label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "PostInfo",
  components: {
    
  },
  data() {
    return {
      checkList: [""],  //多选选中值
      roleData: [
        {
            postName: "123244",
            postCode:'ddd',
            state:1,
        },
        {
            postName: "dddd",
            postCode:'33333',
            state:1,
        },
      ],
      multipleSelection: [], //所选中的行
    };
  },
  methods: {
    handleSelectionChange(val) {
      //选中表格的某一项
      this.multipleSelection = val;
      console.log(val, this.multipleSelection);
    },
  },
};
</script>
<style lang="scss" scope>

</style>