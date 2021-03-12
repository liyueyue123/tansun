<template>
  <div>

    <h1 style="text-align: center">
      失联提交明细
    </h1>
    <h2>
      客户信息
    </h2>
    <hr/>
    <case-search-user-a1-table1></case-search-user-a1-table1>

  </div>
</template>

<script>

import CaseSearchUserA1Table1 from "@/views/casesearch/CaseSearchUserA1Table1.vue";

export default {
  data() {
    return {}
  },
  components: {CaseSearchUserA1Table1},
  mounted() {
  }
}
</script>


<style lang="scss" scoped>

</style>
