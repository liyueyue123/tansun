<template>

  <div>
    <div>
      <div class="table-title">进件信息关联</div>
      <div class="kk">
        <div>证件号下的所有进件信息</div>
        <div>持卡人手机号有无被填写为联系人</div>
        <div>联系人手机号有无申请件</div>
        <div>联系人手机号是否为其他客户联系人</div>
      </div>
      <case-search-user-tab-in-bank-net-relation1></case-search-user-tab-in-bank-net-relation1>
      <case-search-user-tab-in-bank-net-relation2></case-search-user-tab-in-bank-net-relation2>
    </div>


  </div>
</template>

<script>

import CaseSearchUserTabInBankNetRelation1 from "@/views/casesearch/CaseSearchUserTabInBankNetRelation1.vue";
import CaseSearchUserTabInBankNetRelation2 from "@/views/casesearch/CaseSearchUserTabInBankNetRelation2.vue";
import { mapState } from 'vuex'

export default {
  components: {CaseSearchUserTabInBankNetRelation2, CaseSearchUserTabInBankNetRelation1},

  data() {
    return {}
  },

  computed: {

    ...mapState('cases', ['caseId']),
  },

  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.kk {
  display: flex;
  margin: 5px;

  > div {
    padding: 5px 10px;
    border: 1px solid gray;
  }
}
</style>
