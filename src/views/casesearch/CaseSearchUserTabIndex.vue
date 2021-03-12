<template>
  <div>
    <el-row style="height: 175px" :gutter="10">
      <el-col :span="9">
        <case-search-user-info style="height: 160px"></case-search-user-info>
      </el-col>
      <el-col :span="6">
        <case-search-user-card-list style="height: 160px"></case-search-user-card-list>
      </el-col>
      <el-col :span="9">
        <case-search-user-card-report style="height: 160px"></case-search-user-card-report>
      </el-col>
    </el-row>

    <el-tabs type="border-card">
      <el-tab-pane label="电话信息">

        <case-search-user-mobile-table></case-search-user-mobile-table>

      </el-tab-pane>
      <el-tab-pane label="地址信息">
        <case-search-user-address-table></case-search-user-address-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import CaseSearchUserInfo from "@/views/casesearch/CaseSearchUserInfo.vue";
import CaseSearchUserCardList from "@/views/casesearch/CaseSearchUserCardList.vue";
import CaseSearchUserMobileTable from "@/views/casesearch/CaseSearchUserMobileTable.vue";
import CaseSearchUserAddressTable from "@/views/casesearch/CaseSearchUserAddressTable.vue";
import CaseSearchUserCardReport from "@/views/casesearch/CaseSearchUserCardReport.vue";
import { mapState } from 'vuex'

export default {
  name: "CaseSearchUserTab",
  components: {
    CaseSearchUserCardReport,
    CaseSearchUserAddressTable,
    CaseSearchUserMobileTable,
    CaseSearchUserInfo,
    CaseSearchUserCardList,
  },

  data() {
    return {}
  },
  computed: {

    ...mapState('cases', ['caseId']),
  },

  mounted() {

    console.log('--------------', this.caseId)
  }
}
</script>


<style lang="scss" scoped>

</style>
