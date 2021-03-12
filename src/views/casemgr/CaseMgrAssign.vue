<template>
  <div class="app-container">
    <div style="display: flex;justify-content: space-between;">
      <el-row :gutter="10">
        <el-col :span="8" style="display: flex;align-items: center;width: 200px">
          分配至策略组:
          <comp-select-group style="width: 100px"></comp-select-group>
        </el-col>
        <el-col :span="8" style="display: flex;align-items: center;width: 200px">
          分配至催收员:
          <comp-select-member style="width: 100px"></comp-select-member>
        </el-col>
        <el-col :span="8" style="display: flex;align-items: center;width: 200px">
          分配原因:
          <el-input style="width: 100px"></el-input>
        </el-col>
      </el-row>
      <div>
        <el-button type="primary">线下重分配</el-button>
        <el-button type="primary">确定分配</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <case-mgr-assign-table></case-mgr-assign-table>
  </div>
</template>

<script>

import CompSelectGroup from "@/views/comp/CompSelectGroup";
import CompSelectMember from "@/views/comp/CompSelectMember";
import CaseMgrAssignTable from "@/views/casemgr/CaseMgrAssignTable";

export default {
  name: 'case-mgr-assign',
  components: {CaseMgrAssignTable, CompSelectMember, CompSelectGroup},
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
