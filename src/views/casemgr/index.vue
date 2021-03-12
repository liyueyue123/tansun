<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="批量重分配">
        <case-mgr-assign></case-mgr-assign>
      </el-tab-pane>
      <el-tab-pane label="批量协催">
        <case-mgr-assist></case-mgr-assist>
      </el-tab-pane>
      <el-tab-pane label="批量预测">
        <case-mgr-forecase></case-mgr-forecase>
      </el-tab-pane>
      <el-tab-pane label="批量信函">
        <case-mgr-post></case-mgr-post>
      </el-tab-pane>
      <el-tab-pane label="批量IVR">
        <case-mgr-ivr></case-mgr-ivr>
      </el-tab-pane>
      <el-tab-pane label="批量人行查询">
        <case-mgr-rx></case-mgr-rx>
      </el-tab-pane>
      <el-tab-pane label="批量止付/解止付">
        <case-mgr-stop></case-mgr-stop>
      </el-tab-pane>
      <el-tab-pane label="批量白名单">
        <case-mgr-white-list></case-mgr-white-list>
      </el-tab-pane>
      <el-tab-pane label="批量标识">
        <case-mgr-sign></case-mgr-sign>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import CaseMgrAssist from "@/views/casemgr/CaseMgrAssist";
import CaseMgrForecase from "@/views/casemgr/CaseMgrForecase";
import CaseMgrPost from "@/views/casemgr/CaseMgrPost";
import CaseMgrIvr from "@/views/casemgr/CaseMgrIvr";
import CaseMgrRx from "@/views/casemgr/CaseMgrRx";
import CaseMgrWhiteList from "@/views/casemgr/CaseMgrWhiteList";
import CaseMgrSign from "@/views/casemgr/CaseMgrSign";
import CaseMgrAssign from "@/views/casemgr/CaseMgrAssign";
import CaseMgrStop from "@/views/casemgr/CaseMgrStop";

export default {
  components: {
    CaseMgrStop,
    CaseMgrAssign,
    CaseMgrSign,
    CaseMgrWhiteList,
    CaseMgrRx,
    CaseMgrIvr,
    CaseMgrPost,
    CaseMgrForecase,
    CaseMgrAssist,
  },
  data() {
    return {}
  },

  mounted() {
  },
  methods: {}


}
</script>


<style lang="scss" scoped>

</style>
