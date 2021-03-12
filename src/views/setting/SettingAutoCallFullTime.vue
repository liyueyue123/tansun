<template>
  <el-tabs type="border-card">
    <el-tab-pane label="AI参数配置">

      <setting-auto-call-full-time-ai></setting-auto-call-full-time-ai>
    </el-tab-pane>
    <el-tab-pane label="全职IVR参数配置">
      <setting-auto-call-full-time-ivr></setting-auto-call-full-time-ivr>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
import SettingAutoCallFullTimeAi from "@/views/setting/SettingAutoCallFullTimeAi.vue";
import SettingAutoCallFullTimeIvr from "@/views/setting/SettingAutoCallFullTimeIvr.vue";

export default {
  components: {SettingAutoCallFullTimeIvr, SettingAutoCallFullTimeAi},

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

</style>
