<template>

  <div>
    <div style="margin-bottom: 5px;display: flex;justify-content: space-between;">

      <div style="display: flex;align-items: center">
        <el-input></el-input>
        <el-button icon="el-icon-phone"></el-button>
      </div>
      <div style="display: flex;align-items: center">

        <el-button icon="el-icon-edit">行动记录</el-button>
        <el-button>三网核查</el-button>
        <el-button>入网时间</el-button>
        <el-button>自动外呼</el-button>
        <el-button>新增</el-button>
      </div>
    </div>
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
        align="center"
        label="Id"
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

import Pagination from '@/components/Pagination/index.vue'
import BasePage from "@/views/comp/basePage";
import {queryCaseUserPhones} from "@/api/cases";
import { mapState } from 'vuex'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      pagination: {
        currentPage: 1, pageSize: 5, total: 0
      },
      titles: [],

      multipleSelection: []
    }
  },

  mixins: [BasePage],


  computed: {

    ...mapState('cases', ['caseId']),
  },


  mounted() {
    this.loadData()
  },
  methods: {

    async loadData() {
      this.loading = true;
      const _this = this;
      const condition = {caseId: this.caseId};
      // @ts-ignore
      condition.page = this.pagination.currentPage
      // @ts-ignore
      condition.limit = this.pagination.pageSize
      // @ts-ignore
      const {data: {items, total}} = await queryCaseUserPhones(this.caseId)
      _this.tableData = items;
      _this.pagination.total = total;

      if (items.length > 0) {
        this.titles = Object.keys(items[0])
      }
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
