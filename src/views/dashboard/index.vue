<template>
  <el-container class="dashboard-editor-container">
    <el-main>

      <el-card style="margin-bottom: 20px">
        <home-range-selector :usage="'statistic'"></home-range-selector>
      </el-card>
      <el-row :gutter="20">
        <el-col
          v-for="(item,index) in 4"
          :key="index"
          :xs="24"
          :sm="12"
          :lg="12"
        >
          <home-quota :usage="index" style="margin-bottom: 20px"></home-quota>
        </el-col>
      </el-row>


    </el-main>
    <el-aside style="padding: 20px 20px 20px 0!important;">

      <home-pk style="margin-bottom: 20px"></home-pk>
      <home-process style="margin-bottom: 20px"></home-process>
      <home-achievement></home-achievement>
    </el-aside>
    <el-aside style="padding: 20px 20px 20px 0!important;">

      <home-todo style="margin-bottom: 20px"></home-todo>
      <home-publish></home-publish>
    </el-aside>
  </el-container>
</template>

<script>
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import GithubCorner from '@/components/GithubCorner/index.vue'
import BarChart from './components/BarChart.vue'
import BoxCard from './components/BoxCard.vue'
import LineChart from './components/LineChart.vue'
import PanelGroup from './components/PanelGroup.vue'
import PieChart from './components/PieChart.vue'
import RadarChart from './components/RadarChart.vue'
import TodoList from './components/TodoList/index.vue'
import TransactionTable from './components/TransactionTable.vue'
import HomeQuota from "./HomeQuota.vue";
import HomePk from "./HomePk.vue";
import HomeProcess from "./HomeProcess.vue";
import HomeAchievement from "./HomeAchievement.vue";
import HomeTodo from "./HomeTodo.vue";
import HomePublish from "./HomePublish.vue";
import HomeRangeSelector from "@/views/dashboard/HomeRangeSelector.vue";


export default {
  name: 'DashboardAdmin',
  components: {
    HomeRangeSelector,
    HomePublish,
    HomeTodo,
    HomeAchievement,
    HomeProcess,
    HomePk,
    HomeQuota,
    GithubCorner,
    BarChart,
    BoxCard,
    LineChart,
    PanelGroup,
    PieChart,
    RadarChart,
    TodoList,
    TransactionTable
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  /*padding: 32px;*/
  background-color: rgb(240, 242, 245);
  /*position: relative;*/
}

</style>

<style lang="scss">
.dashboard-editor-container {
  .el-card__header {
    padding: 12px !important;

    div {
      line-height: 18px;
      height: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

}

</style>
