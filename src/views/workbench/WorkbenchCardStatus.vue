<template>
  <el-card>
    <div slot="header" style="display: flex;justify-content: space-between;">
      <div>当前账户总量：43</div>
      <div>当月账单月账户量：25</div>
      <div>次月账单月账户量：18</div>
    </div>
    <div>
      <workbench-range-selector></workbench-range-selector>
      <el-tabs type="border-card">
        <el-tab-pane label="三级标签">
          <div class="tab1">
            <div>本人承诺还款：5</div>
            <div>联系人承诺筹款：6</div>
            <div>本人承诺筹款：7</div>
            <div>联系人承诺筹款：8</div>
            <div>联系人承诺代偿：3</div>
            <div>本人未接通：8</div>
            <div>联系人未接通：6</div>
            <div>联系人转告：8</div>
            <div>本人连续三天无人：8</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="客户小结">
          <div class="tab1">
            <div>可联类：39</div>
            <div>失联类：1</div>
            <div>风险流转类：1</div>
            <div>救助及分期意向类：1</div>
            <div>敏感客户预警：1</div>
            <div>争议类：1</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="金额">
          <div class="tab1">
            <div>20万以上账户量：2</div>
            <div>10-20万账户量：8</div>
            <div>5-10万账户量：10</div>
            <div>2-5万账户量：10</div>
            <div>1-2万账户量：5</div>
            <div>3千-1万账户量：6</div>
            <div>3千以下账户量：2</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="触达频次">
          <div class="tab1">
            <div> 0次：2</div>
            <div> 1-3次：8</div>
            <div> 4-8次：8</div>
            <div> 9-15次：12</div>
            <div> 16次以上：12</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="账单日">
          <div class="tab1">
            <div>新入催：5</div>
            <div>入催2-5天：15</div>
            <div>入催6-10天：10</div>
            <div>入催11-15天：5</div>
            <div>入催16-20天：5</div>
            <div>入催21-25天：1</div>
            <div>入催25天以上：1</div>
            <div>临升期3天：1</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="客户渗透率">
          <div class="tab1">
            <div>0%：5</div>
            <div>0%，25%：15</div>
            <div>25%，50%：10</div>
            <div>50%，75%：5</div>
            <div>75%，100%：5</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="短信触达">
          <div class="tab1">
            <div>0条：5</div>
            <div>1条：15</div>
            <div>2条：10</div>
            <div>3条：5</div>
            <div>4条：5</div>
            <div>5条+：1</div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div style="text-align: right">
        <el-button>重置</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import WorkbenchRangeSelector from "@/views/workbench/WorkbenchRangeSelector.vue";

export default {
  name: 'WorkbenchCardStatus',
  components: {WorkbenchRangeSelector},

  data() {
    return {}
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>

.tab1 {
  display: flex;

  flex-wrap: wrap;

  div {
    margin: 10px;
    width: 30%;
  }
}

</style>
