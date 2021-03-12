<template>

  <div style="width: 100%">

    <el-table
      ref="table"
      :data="tableData"
      border
      fit
    >
      <el-table-column
        type="selection"
        align="center"
      />
      <el-table-column
        align="center"
        label="Id"
        width="95"
      >
        <template slot-scope="{$index}">
          {{ pagination.pageSize * (pagination.currentPage - 1) + $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="{row}">
          {{ row.title }}
        </template>
      </el-table-column>
      <el-table-column
        label="Author"
        align="center"
        width="180"
      >
        <template slot-scope="{row}">
          <el-tag>{{ row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Readings"
        align="center"
        width="115"
      >
        <template slot-scope="{row}">
          {{ row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="PDate"
        width="220"
      >
        <template slot-scope="{row}">
          <i class="el-icon-time"/>
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

export default {

  data() {
    return {
      tableData: []

    }
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

</style>
