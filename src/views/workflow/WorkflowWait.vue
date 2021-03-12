<template>
  <div class="app-container">
    <el-tabs type="border-card" tab-position="left">
      <el-tab-pane label="客户基本信息查询工作流">
        <workflow-wait-base-info></workflow-wait-base-info>
      </el-tab-pane>
      <el-tab-pane label="卡片止付/解止付工作流">
        <workflow-wait-stop></workflow-wait-stop>
      </el-tab-pane>
      <el-tab-pane label="案件流转工作流">
        <workflow-wait-transform></workflow-wait-transform>
      </el-tab-pane>
      <el-tab-pane label="卡片购汇工作流">
        <workflow-wait-purchase></workflow-wait-purchase>
      </el-tab-pane>
      <el-tab-pane label="客户救助工作流">
        <workflow-wait-help></workflow-wait-help>
      </el-tab-pane>
      <el-tab-pane label="分期业务办理工作流">
        <workflow-wait-divide></workflow-wait-divide>
      </el-tab-pane>
      <el-tab-pane label="批量重分配工作流">
        <workflow-wait-assign></workflow-wait-assign>
      </el-tab-pane>
      <el-tab-pane label="品控复议工作流">
        <workflow-wait-quality></workflow-wait-quality>
      </el-tab-pane>
      <el-tab-pane label="异常情况登记工作流">
        <workflow-wait-exception></workflow-wait-exception>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import WorkflowWaitBaseInfo from "@/views/workflow/WorkflowWaitBaseInfo";
import WorkflowWaitStop from "@/views/workflow/WorkflowWaitStop";
import WorkflowWaitTransform from "@/views/workflow/WorkflowWaitTransform";
import WorkflowWaitPurchase from "@/views/workflow/WorkflowWaitPurchase";
import WorkflowWaitHelp from "@/views/workflow/WorkflowWaitHelp";
import WorkflowWaitDivide from "@/views/workflow/WorkflowWaitDivide";
import WorkflowWaitAssign from "@/views/workflow/WorkflowWaitAssign";
import WorkflowWaitQuality from "@/views/workflow/WorkflowWaitQuality";
import WorkflowWaitException from "@/views/workflow/WorkflowWaitException";
export default {
  components: {
    WorkflowWaitException,
    WorkflowWaitQuality,
    WorkflowWaitAssign,
    WorkflowWaitDivide,
    WorkflowWaitHelp, WorkflowWaitPurchase, WorkflowWaitTransform, WorkflowWaitStop, WorkflowWaitBaseInfo},
  data() {
    return {}
  },

  mounted() {
  },
  methods:{

  }

}
</script>
