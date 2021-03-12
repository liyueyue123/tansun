<template>

  <div>
    <h2>剔除规则配置</h2>
    <div style="display: flex;" class="line">
      <div style="display: flex;align-items: center;">
        <el-checkbox>最低还款额=</el-checkbox>
        <el-input style="width: 2em"></el-input>
      </div>

      <div style="display: flex;align-items: center;">
        <el-checkbox>最低还款额&lt;=</el-checkbox>
        <el-input style="width: 2em"></el-input>
      </div>
      <div style="display: flex;align-items: center;">
        <el-checkbox>T-3&lt;D且逾期金额=</el-checkbox>
        <el-input style="width: 2em"></el-input>
      </div>
      <div style="display: flex;align-items: center;">
        <el-checkbox>争议金额</el-checkbox>
      </div>
      <div style="display: flex;align-items: center;">
        <el-checkbox>标识</el-checkbox>
        &nbsp;
        <el-select v-model="selectValue">
          <el-option value="1">标识1</el-option>
          <el-option value="2">标识1</el-option>
          <el-option value="3">标识1</el-option>
        </el-select>
      </div>
      <div style="display: flex;align-items: center;">
        <el-checkbox>禁呼</el-checkbox>
      </div>

      <div style="display: flex;align-items: center;">
        <el-checkbox>本金&lt;=</el-checkbox>
        <el-input style="width: 2em"></el-input>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      selectValue:'1'
    }
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.line {
  div {
    margin-right: 20px;
  }
}
</style>
