<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="批量增标">
        <table class="table">
          <tr>
            <td>案件</td>
            <td>标识类型</td>
          </tr>
          <tr>
            <td>上传标识案件的身份证号</td>
            <td>涉及标识编码</td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="减标">
        <table class="table">
          <tr>
            <td>案件</td>
            <td>标识类型</td>
          </tr>
          <tr>
            <td>上传标识案件的身份证号</td>
            <td>涉及标识编码</td>
          </tr>
        </table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name:'case-mgr-sign',
  data() {
    return {}
  },

  mounted() {
  },
  methods: {}


}
</script>


<style lang="scss" scoped>


</style>
