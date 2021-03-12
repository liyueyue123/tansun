<template>

  <el-card style="height: 380px">
    <div slot="header">
      <span>工作成效检视</span>
      <el-button style="float: right; padding: 3px" @click="onChoiceTarget">PK</el-button>
    </div>
    <div>

      <radar-chart></radar-chart>

    </div>

  </el-card>


</template>

<script>
import RadarChart from "./components/RadarChart.vue";

export default {
  name: 'HomeAchievement',
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
