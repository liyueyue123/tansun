<template>

  <el-container>
    <el-header>
      <el-button>新增</el-button>
    </el-header>
    <el-main>
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        element-loading-text="Loading..."
        border
        fit
        highlight-current-row
        @selection-change="handleSelectionChange"
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
      <pagination
        v-show="pagination.total>pagination.pageSize"
        :total="pagination.total"
        :page.sync="pagination.currentPage"
        :limit.sync="pagination.pageSize"
        @pagination="loadData"
      />

    </el-main>
  </el-container>
</template>

<script>

import {getArticles} from "@/api/articles";
import Pagination from '@/components/Pagination/index.vue'
import BasePage from "@/views/comp/basePage";

export default {
  components: {
    Pagination
  },

  data() {
    return {
      pagination: {
        currentPage: 1, pageSize: 5, total: 0
      },
      multipleSelection: []
    }
  },

  mixins: [BasePage],


  mounted() {
    this.loadData()
  },
  methods: {

    async loadData() {
      this.loading = true;
      const _this = this;
      const condition = {...this.queryParams};
      // @ts-ignore
      condition.page = this.pagination.currentPage
      // @ts-ignore
      condition.limit = this.pagination.pageSize
      // @ts-ignore
      const {data: {items, total}} = await getArticles({...condition})
      _this.tableData = items;
      _this.pagination.total = total;
      // @ts-ignore
      if (_this.handleData != null) {
        // @ts-ignore
        _this.handleData()
      }
      _this.loading = false
    },


    handleSelectionChange(value) {
      this.multipleSelection = value
    }
  }


}
</script>

<style lang="scss" scoped>

</style>
