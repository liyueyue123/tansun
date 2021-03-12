<template>

  <div>
    <div style="margin-bottom: 5px;display: flex;justify-content: space-between">
      <div class="table-title">催收组维护参数台</div>
      <div>
        <el-button>新增</el-button>
      </div>
    </div>
    <el-table
      ref="table"
      v-loading="loading"
      :data="tableData"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="序号"
        width="45"
      >
        <template slot-scope="{$index}">
          {{ pagination.pageSize * (pagination.currentPage - 1) + $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(title,index) in titles"
        :key="index"
        :prop="title"
        :label="title">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="140"
      >
        <template slot-scope="{$index,row}">
          <el-button icon="el-icon-edit"></el-button>
          <el-button icon="el-icon-delete" type="danger"></el-button>
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

  </div>
</template>

<script>

import Pagination from '@/components/Pagination/index.vue'
import BasePage from "@/views/comp/basePage";
import {loadAds} from "@/api/setting";

export default {
  components: {
    Pagination
  },

  data() {
    return {
      multipleSelection: [],
      titles: []

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
      const {data: {items, total}} = await loadAds({...condition})
      if (items.length > 0) {
        this.titles = Object.keys(items[0])
      }
      _this.tableData = items;
      _this.pagination.total = total;
      _this.loading = false
    }
  }


}
</script>

<style lang="scss" scoped>

</style>
