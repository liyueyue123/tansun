<template>
  <div class="app-container">
    <el-form ref="form" label-width="120px" label-suffix=":" :inline="true">
      <el-form-item label="客户姓名">
        <el-input v-model="queryParams.name"></el-input>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input v-model="queryParams.id"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="queryParams.account"></el-input>
      </el-form-item>
      <el-form-item label="卡号">
        <el-input v-model="queryParams.cardNo"></el-input>
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="queryParams.contact"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="queryParams.mobile"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="loadData">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

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
import {queryCases} from "@/api/cases";

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
        name: '',
        id: '',
        account: '',
        cardNo: '',
        contact: '',
        mobile: '',

      },

      titles: []

    }
  },

  mixins: [BasePage],
  mounted() {
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
      const {data: {items, total}} = await queryCases({...condition})
      _this.tableData = items;
      _this.pagination.total = total;

      if (items.length > 0) {
        this.titles = Object.keys(items[0])
      }
      _this.loading = false
    },

    onClickRow(row, column, event) {

      console.log(row)
      this.$router.push({path: '/casesearch/user', query: {id: row.案件编号}})
    }
  }


}
</script>
