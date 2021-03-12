<template>

  <el-card style="height: 380px">
    <div slot="header">
      <span>过程量检视            </span>
      <el-button type="text" style="float: right;" @click="onChoiceTarget">详情查询</el-button>
    </div>
    <div>

      <radar-chart></radar-chart>

    </div>

  </el-card>


</template>

<script>
import RadarChart from "./components/RadarChart.vue";

export default {
  name: 'HomeProcess',
  components: {RadarChart},

  data() {
    return {}
  },

  methods: {

    onChoiceTarget() {

    }
  },
  mounted() {
  }


}
</script>
