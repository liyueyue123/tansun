<template>

  <el-tabs type="border-card">
    <el-tab-pane label="工作队列">

      <workbench-work-list></workbench-work-list>

    </el-tab-pane>
    <el-tab-pane label="今日预测队列">
      <workbench-work-list></workbench-work-list>

    </el-tab-pane>
    <el-tab-pane label="预退出队列">
      <workbench-work-list></workbench-work-list>

    </el-tab-pane>
    <el-tab-pane label="协催队列">

      <workbench-work-list></workbench-work-list>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

import WorkbenchWorkList from "@/views/workbench/WorkbenchWorkList.vue";

export default {
  name: 'WorkbenchWorkTabs',
  components: {WorkbenchWorkList},

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>


</style>
