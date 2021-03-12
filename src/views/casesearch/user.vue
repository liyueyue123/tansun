<template>
  <div>


    <case-search-user-header @change="onChangeComp"></case-search-user-header>

    <el-tabs type="border-card">
      <el-tab-pane label="首页">
        <case-search-user-tab-index style="min-height: 500px"></case-search-user-tab-index>
      </el-tab-pane>
      <el-tab-pane label="行内信息集成">
        <case-search-user-tab-in-bank></case-search-user-tab-in-bank>
      </el-tab-pane>
      <el-tab-pane label="行外信息集成">
        <case-search-user-tab-outside-bank></case-search-user-tab-outside-bank>
      </el-tab-pane>
      <el-tab-pane label="日志信息">
        <case-search-user-tab-log></case-search-user-tab-log>
      </el-tab-pane>
      <el-tab-pane label="客户关系图">
        <case-search-user-tab-relation></case-search-user-tab-relation>

      </el-tab-pane>
    </el-tabs>

    <el-dialog
      title="客户救助"
      :visible.sync="forA4">
      <case-search-user-a4 @close="forA4=false"></case-search-user-a4>
    </el-dialog>
    <el-dialog
      title="卡片购汇"
      :visible.sync="forA5">
      <case-search-user-a5 @close="forA5=false"></case-search-user-a5>
    </el-dialog>
    <div v-if="comp!=null"
         style="position: absolute;top: 40px;right: 0;bottom: 20px;width:100%;height:100%;background-color: white;z-index: 10;border: 1px solid black;padding: 20px;padding-right: 40px">
      <el-button icon="el-icon-close" style="position: absolute;right: 5px;top: 5px" circle
                 @click="comp=null"></el-button>

      <div style="height: 90%;overflow-y: auto;overflow-x: hidden;">
        <case-search-user-a1 v-if="comp==='a1'"></case-search-user-a1>
        <case-search-user-a2 v-if="comp==='a2'"></case-search-user-a2>
        <case-search-user-a3 v-if="comp==='a3'"></case-search-user-a3>
        <case-search-user-a6 v-if="comp==='a6'"></case-search-user-a6>
        <case-search-user-a7 v-if="comp==='a7'"></case-search-user-a7>
        <case-search-user-a8 v-if="comp==='a8'"></case-search-user-a8>
        <case-search-user-a9 v-if="comp==='a9'"></case-search-user-a9>
      </div>
    </div>

  </div>
</template>

<script>

import CaseSearchUserTabIndex from "@/views/casesearch/CaseSearchUserTabIndex.vue";
import CaseSearchUserTabInBank from "@/views/casesearch/CaseSearchUserTabInBank.vue";
import CaseSearchUserTabOutsideBank from "@/views/casesearch/CaseSearchUserTabOutsideBank.vue";
import CaseSearchUserTabLog from "@/views/casesearch/CaseSearchUserTabLog.vue";
import {CasesModule} from "@/store/modules/cases";
import CaseSearchUserTabRelation from "@/views/casesearch/CaseSearchUserTabRelation.vue";
import CaseSearchUserHeader from "@/views/casesearch/CaseSearchUserHeader.vue";
import CaseSearchUserA1 from "@/views/casesearch/CaseSearchUserA1.vue";
import CaseSearchUserA2 from "@/views/casesearch/CaseSearchUserA2.vue";
import CaseSearchUserA3 from "@/views/casesearch/CaseSearchUserA3.vue";
import CaseSearchUserA4 from "@/views/casesearch/CaseSearchUserA4.vue";
import CaseSearchUserA6 from "@/views/casesearch/CaseSearchUserA6.vue";
import CaseSearchUserA7 from "@/views/casesearch/CaseSearchUserA7.vue";
import CaseSearchUserA8 from "@/views/casesearch/CaseSearchUserA8.vue";
import CaseSearchUserA9 from "@/views/casesearch/CaseSearchUserA9.vue";
import CaseSearchUserA5 from "@/views/casesearch/CaseSearchUserA5.vue";

export default {

  name: "CaseSearchUser",
  components: {
    CaseSearchUserA5,
    CaseSearchUserA9,
    CaseSearchUserA8,
    CaseSearchUserA7,
    CaseSearchUserA6,
    CaseSearchUserA4,
    CaseSearchUserA3,
    CaseSearchUserA2,
    CaseSearchUserA1,
    CaseSearchUserHeader,
    CaseSearchUserTabRelation,
    CaseSearchUserTabLog,
    CaseSearchUserTabOutsideBank,
    CaseSearchUserTabInBank,
    CaseSearchUserTabIndex,
  },

  data() {
    return {

      caseId: '',

      comp: null,

      forA5: false,
      forA4: false

    }
  },
  computed: {
    caseUserInfo() {
      return this.$store.state.cases.caseUserInfo
    }
  },


  beforeMount() {
    this.caseId = this.$route.query.id;
    this.$store.dispatch('cases/changeCaseId',this.caseId)
  },
  methods: {

    onChangeComp(comp) {

      if (comp == 'a5') {
        this.forA5 = true;
      } else if (comp == 'a4') {
        this.forA4 = true;
      } else {

        this.comp = comp;
      }

    }

  }

}
</script>
