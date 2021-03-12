<template>
  <div>
    <el-form ref="form" label-width="80px" label-suffix=":" :inline="true">
      <el-form-item label="科室">
        <comp-select-departs v-model="queryParams.department" ref="departmentComp"></comp-select-departs>
      </el-form-item>
      <el-form-item label="策略组">
        <comp-select-group v-model="queryParams.group" ref="groupComp"></comp-select-group>
      </el-form-item>
      <el-form-item label="团队">
        <comp-select-team v-model="queryParams.team" ref="teamComp"></comp-select-team>
      </el-form-item>
      <el-form-item label="催收员">
        <comp-select-member v-model="queryParams.member" ref="memberComp"></comp-select-member>
      </el-form-item>
      <el-form-item label="账户类型">
        <comp-select-acc-type v-model="queryParams.accType" ref="accTypeComp"></comp-select-acc-type>
      </el-form-item>
      <el-form-item label="推广机构">
        <comp-select-promotion-org v-model="queryParams.promotionOrg" ref="promotionOrgComp"></comp-select-promotion-org>
      </el-form-item>
      <el-form-item label="账单日">
        <el-date-picker
          v-model="queryParams.day"
          type="date"
          placeholder="请选择" style="width: 150px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="标识">
        <comp-select-sign v-model="queryParams.sign" ref="signComp"></comp-select-sign>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">重置</el-button>
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

import CompSelectOrg from "@/views/comp/CompSelectOrg.vue";
import CompSelectDeparts from "@/views/comp/CompSelectDeparts.vue";
import CompSelectGroup from "@/views/comp/CompSelectGroup";
import CompSelectTeam from "@/views/comp/CompSelectTeam";
import CompSelectMember from "@/views/comp/CompSelectMember";
import CompSelectAccType from "@/views/comp/CompSelectAccType";
import CompSelectPromotionOrg from "@/views/comp/CompSelectPromotionOrg";
import CompSelectSign from "@/views/comp/CompSelectSign";

export default {
  components: {
    CompSelectSign,
    CompSelectPromotionOrg,
    CompSelectAccType, CompSelectMember, CompSelectTeam, CompSelectGroup, CompSelectDeparts, CompSelectOrg,
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
