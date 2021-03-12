<template>

  <div>

    <setting-auto-call-kick-rule></setting-auto-call-kick-rule>
    <h2>厂商配置</h2>

    <div style="height: 200px;border: 1px solid black;width: 200px">

    </div>
    <h2>全职AI策略配置</h2>

    <setting-auto-call-full-time-ai-table></setting-auto-call-full-time-ai-table>
  </div>
</template>

<script>

import SettingAutoCallFullTimeAiTable from "@/views/setting/SettingAutoCallFullTimeAiTable.vue";
import SettingAutoCallKickRule from "@/views/setting/SettingAutoCallKickRule.vue";

export default {
  components: {SettingAutoCallKickRule, SettingAutoCallFullTimeAiTable},

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
