<template>
  <el-card :body-style="{padding:'6px'}">
    <div style="display: flex;align-items: center;">
      <div style="display: flex;justify-content: space-around;width: 600px">
        <div>客户：{{ caseUserInfo.name }}</div>
        <div>身份证：{{ caseUserInfo.id }}</div>
        <div>客户标识：{{ caseUserInfo.id }}</div>
        <div>推广机构：{{ caseUserInfo.id }}</div>
        <div>催收组：{{ caseUserInfo.id }}</div>
        <div>客户归属：{{ caseUserInfo.id }}</div>
      </div>

      <div style="flex-grow: 1;display: flex;align-items: center;justify-content: flex-end">
        <el-button>警告</el-button>

        <div style="margin: 0 10px">
          <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                        催收助手<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a1">失联查核明细</el-dropdown-item>
              <el-dropdown-item command="a2">卡片止付/解付</el-dropdown-item>
              <el-dropdown-item command="a3">特殊案件流转</el-dropdown-item>
              <el-dropdown-item command="a4">客户救助</el-dropdown-item>
              <el-dropdown-item command="a5">卡片购汇</el-dropdown-item>
              <el-dropdown-item command="a6">分期办理</el-dropdown-item>
              <el-dropdown-item command="a7">客户标识</el-dropdown-item>
              <el-dropdown-item command="a8">禁呼</el-dropdown-item>
              <el-dropdown-item command="a9">风险案件流转</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <el-button>上一案件</el-button>
        <el-button>下一案件</el-button>

      </div>
    </div>
  </el-card>
</template>

<script>

import {mapState} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('cases', ['caseUserInfo']),
  },

  methods:{
    handleCommand(){

    }
  },


  mounted() {
  }
}
</script>

<style lang="scss" scope>
</style>
