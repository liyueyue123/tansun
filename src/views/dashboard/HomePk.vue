<template>

  <el-card style="height: 380px">
    <div slot="header" style="">
      <span>绩效PK</span>
      <el-button style="float: right; padding: 3px" @click="onChoiceTarget" type="text" icon="el-icon-plus"></el-button>
    </div>
    <div>

      <radar-chart></radar-chart>

    </div>

  </el-card>


</template>

<script>
import RadarChart from "./components/RadarChart.vue";

export default {
  name: 'HomePk',
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
