<template>
  <el-card>
    <div slot="header" style="display: flex;justify-content: space-between;">
      我的今日任务
    </div>

    <div>

      <el-tabs type="border-card">
        <el-tab-pane label="待处理任务">
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
        </el-tab-pane>
        <el-tab-pane label="已处理任务">
          <el-table
            :data="taskDone"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="任务列表">
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
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>


export default {
  name: 'WorkbenchTasks',

  data() {
    return {

      tasks: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      taskDone: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],

    }
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.tab1 {
  display: flex;

  flex-wrap: wrap;

  div {
    margin: 10px;
    width: 30%;
  }
}

</style>
