<template>

  <el-table
    :data="tasks"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="任务名称">
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务时间段">
    </el-table-column>
    <el-table-column
      prop="address"
      label="总任务账户量">
    </el-table-column>
    <el-table-column
      prop="address"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已处理账户量">
    </el-table-column>
    <el-table-column
      prop="address"
      label="待处理账户量">
    </el-table-column>
    <el-table-column
      label="操作">
    </el-table-column>
  </el-table>
</template>

<script>


export default {
  name: 'WorkbenchWorkList',

  data() {
    return {
      tasks: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>


</style>
