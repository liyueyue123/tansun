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
          <el-table-column type="selection" width="50" > </el-table-column>
          <el-table-column label="角色ID"  prop="id">
          </el-table-column>
          <el-table-column label="角色名称"  prop="role_name">
          </el-table-column>
          <el-table-column label="角色编码"  prop="role_code">
          </el-table-column>
          <el-table-column label="租户代码"  prop="tenant_code">
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
  name: "RoleInfo",
  components: {
    
  },
  data() {
    return {
      checkList: [""],  //多选选中值
      roleData: [
        {
            id:1,
            role_name: "分行行长",
            role_code: "123244",
            tenant_code :'2323',
            state:1,
        },
        {
            id:2,
            role_name: "风险经理",
            role_code: "123234",
            tenant_code :'22323',
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