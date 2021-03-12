<template>
  <div>

    <h1 style="text-align: center">
      客户标识勾选
    </h1>

    <el-table
      ref="table"
      v-loading="loading"
      :data="tableData"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        type="selection"
        width="50"
      >
      </el-table-column>

      <el-table-column
        label="标识名称"
        align="center"
        prop="name"
        width="300"
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="截止时间"
        prop="date"
        width="100"
      >
      </el-table-column>

      <el-table-column
        align="center"
        label="上标原因"
        prop="reason"
      >
        <template>
          <el-input style="width: 100%"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <br/>
    <br/>
    <div style="display: flex;justify-content: center;">
      <el-button style="margin-right: 50px" @click="$emit('close')">取消</el-button>
      <el-button @click="$emit('close')">保存</el-button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

      tableData: [
        {date: null, reason: null, name: '外呼白名单'},
        {date: null, reason: null, name: '电话白名单'},
        {date: null, reason: null, name: '短信白名单'},
        {date: null, reason: null, name: '邮件白名单'},
        {date: null, reason: null, name: '协商还款'},
        {date: null, reason: null, name: '重大投诉'},
        {date: null, reason: null, name: '账户复联'},
        {date: null, reason: null, name: '意外死亡'},
        {date: null, reason: null, name: '涉嫌伪冒、诈骗、对还款存有争议'},
        {date: null, reason: null, name: '有还款意愿且在乎利息和违约金，希望....'},
        {date: null, reason: null, name: '还款意愿不强，报有侥幸心理不愿还款'},
        {date: null, reason: null, name: '有一定还款意愿，但以各种理由抗辩'},
        {date: null, reason: null, name: '有意愿还款，但暂时无能力还款'},
        {date: null, reason: null, name: '涉及吸毒，无能力还款'},
        {date: null, reason: null, name: '无还款意愿，根本不打算还款'},
        {date: null, reason: null, name: '协商分期'},
        {date: null, reason: null, name: '建议委外'},
      ]
    }
  },

  mounted() {
  }
}
</script>


<style lang="scss" scoped>

</style>
