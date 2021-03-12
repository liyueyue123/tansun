<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="已发起">
        <workflow-started></workflow-started>
      </el-tab-pane>
      <el-tab-pane label="待审批">
        <workflow-wait></workflow-wait>
      </el-tab-pane>
      <el-tab-pane label="待提交">
        <workflow-wait-commit></workflow-wait-commit>
      </el-tab-pane>
      <el-tab-pane label="已处理">
        <workflow-handled></workflow-handled>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>


import WorkflowStarted from "@/views/workflow/WorkflowStarted";
import WorkflowWait from "@/views/workflow/WorkflowWait";
import WorkflowWaitCommit from "@/views/workflow/WorkflowWaitCommit";
import WorkflowHandled from "@/views/workflow/WorkflowHandled";
export default {
  components: {WorkflowHandled, WorkflowWaitCommit, WorkflowStarted,WorkflowWait},
  data() {
    return {}
  },

  mounted() {
  }

}
</script>
