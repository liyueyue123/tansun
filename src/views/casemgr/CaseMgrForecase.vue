<template>
  <div class="app-container">
    <div style="display: flex;justify-content: space-between;">
      <el-row :gutter="10">
        <el-col :span="8" style="display: flex;align-items: center;width: 200px">
          分配至催收员:
          <comp-select-member style="width: 100px"></comp-select-member>
        </el-col>
        <el-col :span="8" style="display: flex;align-items: center;width: 300px">
          队列开启时间:
          <el-date-picker style="width: 200px"></el-date-picker>
        </el-col>
      </el-row>
      <div>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <case-mgr-forecase-table></case-mgr-forecase-table>
  </div>
</template>

<script>

import CompSelectGroup from "@/views/comp/CompSelectGroup";
import CompSelectMember from "@/views/comp/CompSelectMember";
import CaseMgrAssistTable from "@/views/casemgr/CaseMgrAssistTable";
import CaseMgrForecaseTable from "@/views/casemgr/CaseMgrForecaseTable";

export default {
  name: 'case-mgr-assist',
  components: {CaseMgrForecaseTable, CaseMgrAssistTable, CompSelectMember, CompSelectGroup},
  data() {
    return {}
  },

  mounted() {
  },
  methods: {}


}
</script>


<style lang="scss" scoped>

</style>
