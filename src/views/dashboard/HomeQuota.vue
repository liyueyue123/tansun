<template>

  <el-card style="height: 380px">
    <div slot="header">
      <span>名称</span>
      <el-button icon="el-icon-refresh" style="float: right; padding: 3px" @click="more=!more"></el-button>
      <!--            <i class="el-icon-refresh" style="float: right; padding: 3px 0" @click="more=!more"></i>-->
    </div>
    <div v-if="!more">
      <ul v-if="usage==0">
        <li>期初总额：</li>
        <li>期末总额：</li>
        <li>延滞率：</li>
      </ul>
      <ul v-if="usage==1">
        <li>
          还款带出总金额:
        </li>
      </ul>
    </div>
    <div v-if="more">
      <radar-chart v-if="usage==0"></radar-chart>
    </div>

  </el-card>


</template>

<script>
import RadarChart from "./components/RadarChart.vue";

export default {
  name: 'HomeQuota',
  components: {RadarChart},

  data() {
    return {
      more: false

    }
  },
  props: {usage: {default: 0, required: true}},


  mounted() {
  }


}
</script>
