<template>
  <div>
    <div class="part-title">客户资料维护历史</div>
    <case-search-user-tab-log-info-mgr-history></case-search-user-tab-log-info-mgr-history>

    <div class="part-title">标识变更信息</div>
    <case-search-user-tab-log-id-change-history></case-search-user-tab-log-id-change-history>
    <div class="part-title">分配信息</div>
    <case-search-user-tab-log-assign></case-search-user-tab-log-assign>
    <div class="part-title">操作日志</div>
    <case-search-user-tab-log-opt-log></case-search-user-tab-log-opt-log>
  </div>
</template>

<script>

import CaseSearchUserTabLogInfoMgrHistory from "@/views/casesearch/CaseSearchUserTabLogInfoMgrHistory.vue";
import CaseSearchUserTabLogIdChangeHistory from "@/views/casesearch/CaseSearchUserTabLogIdChangeHistory.vue";
import CaseSearchUserTabLogAssign from "@/views/casesearch/CaseSearchUserTabLogAssign.vue";
import CaseSearchUserTabLogOptLog from "@/views/casesearch/CaseSearchUserTabLogOptLog.vue";

export default {
  components: {
    CaseSearchUserTabLogOptLog,
    CaseSearchUserTabLogAssign, CaseSearchUserTabLogIdChangeHistory, CaseSearchUserTabLogInfoMgrHistory
  },

  data() {
    return {}
  },
  mounted() {
  }
}
</script>


<style lang="scss" scoped>
.part-title:first-child {
  margin-top: 0;
}

.part-title {

  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 26px;
  color: white;
  background-color: #0a76a4;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
