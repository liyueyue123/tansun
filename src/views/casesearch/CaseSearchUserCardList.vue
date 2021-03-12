<template>
  <el-card :body-style="{padding:0,position:'relative'}">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="text-align: center;padding-top: 10px;">

          <div class="table-title" style="margin: 10px">卡{{ item }}</div>
          <el-row style="line-height: 1.2rem;">
            <el-col :span="12">
              <div>总欠款金额：</div>
              <div>总余额：</div>
              <div>逾期金额：</div>
              <div>最低还款金额：</div>
            </el-col>
            <el-col :span="12">
              <div>M1:</div>
              <div>M2:</div>
              <div>M3:</div>
              <div>M3+:</div>
            </el-col>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>


export default {
  name: "CaseSearchUserCardList",

  data() {
    return {}
  },
  mounted() {
  }
}
</script>


<style lang="scss" scope>
</style>
