<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="自动化催收模式设置">
        <el-tabs type="border-card">
          <el-tab-pane label="短信设置">
            <setting-msg></setting-msg>
          </el-tab-pane>
          <el-tab-pane label="信函设置">
            <setting-mail></setting-mail>
          </el-tab-pane>
          <el-tab-pane label="自动外呼设置">
            <setting-auto-call></setting-auto-call>
          </el-tab-pane>
          <el-tab-pane label="预测参数设置">
            <setting-prepare></setting-prepare>
          </el-tab-pane>
          <el-tab-pane label="电话呼出设置">
            <setting-phone-call></setting-phone-call>
          </el-tab-pane>
          <el-tab-pane label="失联提报设置">
            <setting-disconnect-commit></setting-disconnect-commit>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="行动结果及三级标签参数设置"></el-tab-pane>
      <el-tab-pane label="操作日志"></el-tab-pane>
      <el-tab-pane label="基本功能配置">
        <setting-base></setting-base>
      </el-tab-pane>
      <el-tab-pane label="其他参数配置">
        <setting-other></setting-other>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import SettingMsg from "@/views/setting/SettingMsg.vue";
import SettingMail from "@/views/setting/SettingMail.vue";
import SettingAutoCall from "@/views/setting/SettingAutoCall.vue";
import SettingPrepare from "@/views/setting/SettingPrepare.vue";
import SettingPhoneCall from "@/views/setting/SettingPhoneCall.vue";
import SettingDisconnectCommit from "@/views/setting/SettingDisconnectCommit.vue";
import SettingOther from "@/views/setting/SettingOther.vue";
import SettingBase from "@/views/setting/SettingBase.vue";

export default {
  components: {
    SettingBase,
    SettingOther,
    SettingDisconnectCommit, SettingPhoneCall, SettingPrepare, SettingAutoCall, SettingMail, SettingMsg
  },

  data() {
    return {}
  },

  mounted() {
  }

}
</script>

<style lang="scss" scoped>
.el-tabs--border-card > .el-tabs__content {
  padding: 0;
}

</style>

