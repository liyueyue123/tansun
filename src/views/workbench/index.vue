<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <workbench-card-status></workbench-card-status>
        </el-col>
        <el-col :span="12">
          <workbench-tasks></workbench-tasks>
        </el-col>
      </el-row>

      <br/>
      <workbench-conditions></workbench-conditions>
      <workbench-work-tabs></workbench-work-tabs>
    </el-main>

  </el-container>

</template>

<script>
import 'driver.js/dist/driver.min.css'

import WorkbenchCardStatus from "@/views/workbench/WorkbenchCardStatus.vue";
import WorkbenchTasks from "@/views/workbench/WorkbenchTasks.vue";
import WorkbenchWorkTabs from "@/views/workbench/WorkbenchWorkTabs.vue";
import WorkbenchConditions from "@/views/workbench/WorkbenchConditions.vue";

export default {
  name: 'WorkBench',
  components: {
    WorkbenchConditions,
    WorkbenchWorkTabs, WorkbenchTasks, WorkbenchCardStatus
  },
  data() {
    return {}
  },

  mounted() {
  }

}
</script>
<style lang="scss" scoped>


</style>
