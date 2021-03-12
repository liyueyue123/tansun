<template>

  <div>
    <div class="table-header">
      <div>影像调阅</div>
      <div>
        <el-button>调阅</el-button>
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
    >
      <!--<el-table-column
              align="center"
              label="Id"
              width="95"
      >
          <template slot-scope="{$index}">
              {{ pagination.pageSize*(pagination.currentPage-1)+$index+1 }}
          </template>
      </el-table-column>-->
      <el-table-column
        v-for="(title,index) in titles"
        :key="index"
        :prop="title"
        :label="title"
      >
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
import {queryCaseUserInBankVideo} from "@/api/cases";
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
      titles: []

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
      const condition = {};
      // @ts-ignore
      condition.page = this.pagination.currentPage
      // @ts-ignore
      condition.limit = this.pagination.pageSize
      // @ts-ignore
      const {data: {items, total}} = await queryCaseUserInBankVideo(condition)
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
    }
  }


}
</script>

<style lang="scss" scoped>

</style>
