<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="全职自动外呼参数配置">
        <setting-auto-call-full-time></setting-auto-call-full-time>
      </el-tab-pane>
      <el-tab-pane label="自动外呼出表参数配置平台">
        <setting-auto-call-table></setting-auto-call-table>
      </el-tab-pane>
      <el-tab-pane label="临时自动外呼参数配置">
        <setting-auto-call-temp></setting-auto-call-temp>
      </el-tab-pane>
      <el-tab-pane label="自然日临时自动外呼配置平台">
        <setting-auto-call-day-temp></setting-auto-call-day-temp>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>

import SettingAutoCallFullTime from "@/views/setting/SettingAutoCallFullTime.vue";
import SettingAutoCallTable from "@/views/setting/SettingAutoCallTable.vue";
import SettingAutoCallTemp from "@/views/setting/SettingAutoCallTemp.vue";
import SettingAutoCallDayTemp from "@/views/setting/SettingAutoCallDayTemp.vue";

export default {
  components: {SettingAutoCallDayTemp, SettingAutoCallTemp, SettingAutoCallTable, SettingAutoCallFullTime},

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

</style>
