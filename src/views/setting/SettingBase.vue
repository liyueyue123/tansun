<template>

  <el-tabs type="border-card">
    <el-tab-pane label="客户标识设置">
      <setting-base-client-sign></setting-base-client-sign>
    </el-tab-pane>
    <el-tab-pane label="客户基本信息查询设置">
      <setting-base-client-query></setting-base-client-query>
    </el-tab-pane>
    <el-tab-pane label="催收员号与发卡号映射关系参数表配置">
      <setting-base-cards-map></setting-base-cards-map>
    </el-tab-pane>
    <el-tab-pane label="催收组维护参数台">
      <setting-base-group></setting-base-group>
    </el-tab-pane>
    <el-tab-pane label="推⼴机构维护">
      <setting-base-ad></setting-base-ad>
    </el-tab-pane>
    <el-tab-pane label="电催案件中转组重分配维护数据">
      <setting-base-replan></setting-base-replan>
    </el-tab-pane>
    <el-tab-pane label="定时转组参数配置"></el-tab-pane>
    <el-tab-pane label="Avaya外呼结果运⽤⾄失联账户流转的参数配置"></el-tab-pane>
  </el-tabs>
</template>

<script>

import Pagination from '@/components/Pagination/index.vue'
import SettingBaseClientSign from "@/views/setting/SettingBaseClientSign.vue";
import SettingBaseClientQuery from "@/views/setting/SettingBaseClientQuery.vue";
import SettingBaseCardsMap from "@/views/setting/SettingBaseCardsMap.vue";
import SettingBaseGroup from "@/views/setting/SettingBaseGroup.vue";
import SettingBaseAd from "@/views/setting/SettingBaseAd.vue";
import SettingBaseReplan from "@/views/setting/SettingBaseReplan.vue";

export default {
  components: {
    SettingBaseReplan,
    SettingBaseAd,
    SettingBaseGroup,
    SettingBaseCardsMap,
    SettingBaseClientQuery,
    SettingBaseClientSign,
    Pagination
  },

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

</style>
