<template>

  <div>
    <setting-auto-call-kick-rule></setting-auto-call-kick-rule>
    <h2>话术配置</h2>

    <setting-auto-call-full-time-ivr-talk></setting-auto-call-full-time-ivr-talk>
    <h2>全职IVR策略配置</h2>

    <setting-auto-call-full-time-ivr-table></setting-auto-call-full-time-ivr-table>
  </div>
</template>

<script>

import SettingAutoCallFullTimeAiTable from "@/views/setting/SettingAutoCallFullTimeAiTable.vue";
import SettingAutoCallFullTimeIvrTable from "@/views/setting/SettingAutoCallFullTimeIvrTable.vue";
import SettingAutoCallFullTimeIvrTalk from "@/views/setting/SettingAutoCallFullTimeIvrTalk.vue";
import SettingAutoCallKickRule from "@/views/setting/SettingAutoCallKickRule.vue";

export default {
  components: {
    SettingAutoCallKickRule,
    SettingAutoCallFullTimeIvrTalk, SettingAutoCallFullTimeIvrTable, SettingAutoCallFullTimeAiTable
  },

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.line {
  div {
    margin-right: 20px;
  }
}

</style>
