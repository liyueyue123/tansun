<template>
  <div>
    <case-search-user-tab-in-bank-call-log style="margin-bottom: 5px"></case-search-user-tab-in-bank-call-log>
    <case-search-user-tab-in-bank-video></case-search-user-tab-in-bank-video>
    <case-search-user-tab-in-bank-net-relation></case-search-user-tab-in-bank-net-relation>
  </div>
</template>

<script>

import CaseSearchUserTabInBankCallLog from "@/views/casesearch/CaseSearchUserTabInBankCallLog.vue";
import CaseSearchUserTabInBankCallLogInfo from "@/views/casesearch/CaseSearchUserTabInBankCallLogInfo.vue";
import CaseSearchUserTabInBankVideo from "@/views/casesearch/CaseSearchUserTabInBankVideo.vue";
import CaseSearchUserTabInBankNetRelation from "@/views/casesearch/CaseSearchUserTabInBankNetRelation.vue";

export default {
  components: {
    CaseSearchUserTabInBankNetRelation,
    CaseSearchUserTabInBankVideo,
    CaseSearchUserTabInBankCallLogInfo,
    CaseSearchUserTabInBankCallLog
  },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>


<style lang="scss">
</style>
