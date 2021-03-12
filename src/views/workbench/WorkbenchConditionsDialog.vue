<template>

  <div>
    <h3>待选择</h3>
    <el-checkbox-group v-model="selects" style="display: flex;flex-wrap: wrap;">
      <el-checkbox v-for="(item,index) in tags" :label="item.value" style="width: 200px"></el-checkbox>
    </el-checkbox-group>
    <h3>已选择</h3>
    <el-tag
      v-for="(tag,index) in selects"
      :key="'select'+index"
      closable
      :type="tag.priority==1?'success':''" style="margin-right: 10px">
      {{ tag }}
    </el-tag>
  </div>
</template>

<script>

export default {
  name: 'WorkbenchConditionsDialog',

  data() {
    return {
      selects: [],
      tags: [
        {value: '机构', selected: false, priority: 1},
        {value: '科室', selected: false, priority: 1},
        {value: '策略组', selected: false, priority: 1},
        {value: '催收组', selected: false, priority: 1},
        {value: '待选择', selected: false, priority: 1},
        {value: '客户归属', selected: false, priority: 1},
        {value: '证件号', selected: false, priority: 1},
        {value: '账户类型', selected: false, priority: 1},
        {value: '推广机构', selected: false, priority: 1},
        {value: '推广机构', selected: false, priority: 1},
        {value: '跟进状态', selected: false, priority: 1},
        {value: '承诺标识', selected: false, priority: 1},
        {value: '逾期期数范围', selected: false, priority: 1},
        {value: '账单日', selected: false, priority: 1},
        {value: '欠款总额范围', selected: false, priority: 1},
        {value: '本金范围', selected: false, priority: 1},
        {value: '分配日期范围', selected: false, priority: 1},
        {value: '入催日期范围', selected: false, priority: 1},
        {value: '客户标识', selected: false, priority: 1},
        {value: '卡号', selected: false, priority: 1},
        {value: '账号', selected: false, priority: 1},
        {value: '手机号', selected: false, priority: 1},
        {value: '客户姓名', selected: false, priority: 1},
        {value: '最低还款额范围', selected: false, priority: 1},
        {value: '逾期金额范围', selected: false, priority: 1},
        {value: '催收优先级', selected: false, priority: 1},
        {value: '催收员', selected: false, priority: 1},
      ]
    }
  },


  mounted() {
  }


}
</script>
