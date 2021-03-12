<template>

  <el-tabs style="height: 500px" type="border-card" tab-position="left">
    <el-tab-pane label="考核监控指标配置">
      <comp-select-tags :datas="datas1"></comp-select-tags>
    </el-tab-pane>
    <el-tab-pane label="工作成效检视配置">
      <comp-select-tags :datas="datas2"></comp-select-tags>
    </el-tab-pane>
    <el-tab-pane label="绩效PK配置">
      <comp-select-tags :datas="datas3"></comp-select-tags>
    </el-tab-pane>
    <el-tab-pane label="标签分类配置">
      <comp-select-tags :datas="datas4"></comp-select-tags>

    </el-tab-pane>
    <el-tab-pane label="工作队列配置">
      <div style="display: flex;align-items: center">
        今日预测队列保存
        <el-input style="width: 70px;margin:0 20px" v-model="data5"></el-input>
        天
      </div>
      <br/>
      <div style="text-align: left">
        <el-button @click="onSave5">保存</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="工作队列查询条件配置">
      <comp-select-tags :datas="datas6"></comp-select-tags>

    </el-tab-pane>
    <el-tab-pane label="批量客户标识配置">
      <comp-select-tags :datas="datas7"></comp-select-tags>

    </el-tab-pane>
    <el-tab-pane label="风险案件流转类型配置">
      <comp-select-tags :datas="datas8"></comp-select-tags>

    </el-tab-pane>
  </el-tabs>
</template>

<script>

import Pagination from '@/components/Pagination/index.vue'
import CompSelectTags from "@/views/comp/CompSelectTags.vue";

export default {
  components: {
    CompSelectTags,
    Pagination
  },

  data() {
    return {
      datas1: [
        {value: '账单月延滞率', enabled: true},
        {value: '自然月流出率', enabled: true},
        {value: '账单月还款带出额', enabled: true},
        {value: '实时还款带出额', enabled: true},
        {value: '自然月还款带出额', enabled: true},
        {value: '账单月回款额/回款率', enabled: true},
        {value: '自然月回款额/回款率', enabled: true},
        {value: '账单月账户量', enabled: true},
        {value: '自然月账户量', enabled: true},
        {value: '当日回款额/回款率', enabled: true},
        {value: '当月/当年有效投诉率', enabled: false},
        {value: '预测考核指标', enabled: false},
      ],

      datas2: [
        {value: '未接通', enabled: true},
        {value: '本人承诺还款', enabled: true},
        {value: '本人承诺筹款', enabled: true},
        {value: '他人承诺代偿', enabled: true},
        {value: '联系人转告', enabled: true},
        {value: '无效沟通', enabled: true},
      ],

      datas3: [
        {value: '延滞率', enabled: true},
        {value: '流出率', enabled: true},
        {value: '还款带出额', enabled: true},
        {value: '有效通话时长', enabled: true},
        {value: '账单月回款额/回款率', enabled: true},
        {value: '自然月回款额/回款率', enabled: true},
        {value: '有效个数', enabled: true},
        {value: '外呼总个数等', enabled: true},
      ],

      datas4: [
        {value: '行动三级标签', enabled: true},
        {value: '客户小结', enabled: true},
        {value: '金额', enabled: true},
        {value: '入催天数', enabled: true},
        {value: '电话触达频次', enabled: true},
        {value: '当日账户渗透率', enabled: true},
        {value: '当日短信触达情况', enabled: true},
      ],

      datas6: [
        {value: '机构', enabled: true},
        {value: '科室', enabled: true},
        {value: '策略组', enabled: true},
        {value: '催收组', enabled: true},
        {value: '催收员', enabled: true},
        {value: '客户归属', enabled: true},
        {value: '证件号', enabled: true},
        {value: '账户类型', enabled: true},
        {value: '推广机构', enabled: true},
        {value: '跟进状态', enabled: true},
        {value: '承诺标识', enabled: true},
        {value: '逾期期数范围', enabled: true},
        {value: '账单日', enabled: true},
        {value: '欠款总额范围', enabled: true},
        {value: '本金范围', enabled: true},
        {value: '分配日期范围', enabled: true},
        {value: '入催日期范围', enabled: true},
        {value: '触达频次范围', enabled: true},
        {value: '客户标识', enabled: true},
        {value: '卡号', enabled: true},
        {value: '账号', enabled: true},
        {value: '手机号', enabled: true},
        {value: '客户姓名', enabled: true},
        {value: '本金和范围', enabled: true},
        {value: '最低还款额范围', enabled: true},
        {value: '逾期金额范围', enabled: true},
        {value: '催收优先级', enabled: true},
      ],

      datas7: [
        {value: '外呼白名单', enabled: true},
        {value: '电话白名单', enabled: true},
        {value: '短信白名单', enabled: true},
        {value: '邮件白名单', enabled: true},
        {value: '协商还款', enabled: true},
        {value: '重大投诉', enabled: true},
        {value: '账户复联', enabled: true},
      ],

      datas8: [
        {value: '疑似欺诈', enabled: true},
        {value: '大额高风险', enabled: true},
        {value: '失信被执行', enabled: true},
        {value: '多行共债', enabled: true},
      ],

      data5: '1'

    }
  },


  methods: {

    onSave5() {
      console.log('data5', this.data5)
    }
  },
  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.tab {
  & {
  }
}
</style>
