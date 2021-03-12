<template>
  <el-tabs type="border-card">
    <el-tab-pane label="自动修复信息">
      <case-search-user-tab-outside-bank-auto-info></case-search-user-tab-outside-bank-auto-info>
    </el-tab-pane>
    <el-tab-pane label="人工修复信息">
      <case-search-user-tab-outside-bank-human-info></case-search-user-tab-outside-bank-human-info>
    </el-tab-pane>
    <el-tab-pane label="个人综合报告">
      <el-tabs type="border-card">
        <el-tab-pane label="历史个人综合报告">

          <case-search-user-tab-outside-bank-client-report></case-search-user-tab-outside-bank-client-report>
        </el-tab-pane>
        <el-tab-pane label="进件关联信息">
          <case-search-user-tab-outside-bank-client-relation-report></case-search-user-tab-outside-bank-client-relation-report>

        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

import CaseSearchUserTabOutsideBankAutoInfo from "@/views/casesearch/CaseSearchUserTabOutsideBankAutoInfo.vue";
import CaseSearchUserTabOutsideBankHumanInfo from "@/views/casesearch/CaseSearchUserTabOutsideBankHumanInfo.vue";
import CaseSearchUserTabOutsideBankClientReport from "@/views/casesearch/CaseSearchUserTabOutsideBankClientReport.vue";
import CaseSearchUserTabOutsideBankClientRelationReport
  from "@/views/casesearch/CaseSearchUserTabOutsideBankClientRelationReport.vue";

export default {
  components: {
    CaseSearchUserTabOutsideBankClientRelationReport,
    CaseSearchUserTabOutsideBankClientReport,
    CaseSearchUserTabOutsideBankHumanInfo,
    CaseSearchUserTabOutsideBankAutoInfo
  },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>


<style lang="scss">
.cc {
  > div {
    width: 40%;
  }
}
</style>
