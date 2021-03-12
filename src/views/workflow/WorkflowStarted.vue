<template>
  <div>
    <el-table
      v-if="tableData.length>0"
      element-loading-text="Loading..."
      :loading="loading"
      :data="tableData"
      @row-click="onClickRow"
      style="width: 100%">
      <el-table-column
        align="center"
        label="序号"
        width="95"
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
import BasePage from "@/views/comp/basePage";
import Pagination from "@/components/Pagination/index.vue";
import {queryStarted} from "@/api/workflow";


export default {
  components: {
    Pagination
  },
  data() {
    return {

      pagination: {
        currentPage: 1, pageSize: 5, total: 0
      },
      queryParams: {
        org: '',
        department: '',
        group: '',
        team: '',
        member: '',
        accType: '',
        promotionOrg: '',
        sign: '',
        month: '',
        day: ''
      },

      titles: []

    }
  },

  mixins: [BasePage],
  mounted() {
    this.loadData();
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
      const {data: {items, total}} = await queryStarted({...condition})
      _this.tableData = items;
      _this.pagination.total = total;

      if (items.length > 0) {
        this.titles = Object.keys(items[0])
      }
      _this.loading = false
    },

    onClickRow(row, column, event) {

    }
  }


}
</script>
