<template>

  <div>

    <div style="display: flex;">
      <div style="width: 65%">
        <div class="table-title">
          客户基本信息查询剔除条件配置
        </div>
        <div class="tt">
          <div style="color: red">
            客户名下所有账户的账户状态均为Q，不考虑客户是否有欠款
          </div>
          <div style="color: red">
            客户名下所有账户的账户状态均为WQ，不考虑客户是否有欠款
          </div>
          <div>
            客户名下所有卡片标识均为
            <el-input style="width: 40px" v-model="data.m1"></el-input>
            标，不考虑客户是否有欠款
          </div>
          <div>
            客户名下所有卡片标识均为
            <el-input style="width: 40px" v-model="data.m2"></el-input>
            标，不考虑客户是否有欠款
          </div>
          <div>
            多账户客户，如果客户某一个或某几个账户的账户状态为
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            （不考虑账户状态为Q的账户是否有欠款），剩余账户的账户状态均为非
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            ，
            且每个非
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            账户的欠款均小于等于
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            。
          </div>
          <div>
            客户名下所有卡片标识既有
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            标，又有
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            标，且没有其他标识，不考虑客户是否有欠款
          </div>
          <div>
            多账户客户，如果客户某一个或某几个账户的账户状态为 （不考虑账户状态为WQ的账户是否有欠款），
            剩余账户的账户状态均为非 ，且每个非 账户的欠款均小于等于
          </div>
          <div>
            客户级本金等于
            <el-input style="width: 40px" v-model="data.m3"></el-input>
          </div>
          <div>
            客户逾期期数＜
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            ，不可进行查询
          </div>
          <div>
            客户级总欠款小于等于
            <el-input style="width: 40px" v-model="data.m3"></el-input>
          </div>
          <div>
            账户所属催收组为
            <el-input style="width: 40px" v-model="data.m3"></el-input>
            开头，不考虑账户状态及总欠款金额
          </div>
        </div>
      </div>
      <div style="width: 35%">
        <div class="table-title" style="margin: 10px 0;margin-top: 0">
          催收系统定时批量自动查询配置
        </div>
        <div class="mm">
          对于新入催客户，当催收系统中“逾期天数”显示等于 天时（即M1＋10天），再进行首次客户基本信息查询。
          对于距离上次查询时间（只要是催收系统发起均算）超过 天系统自动发起查询。
        </div>
        <div class="table-title" style="margin: 10px 0">
          催收系统定时批量自动查询剔除组
        </div>
        <el-input type="textarea" :rows="5"></el-input>
        <div style="display: flex;margin-top: 5px">
          <el-input></el-input>
          <el-button>添加</el-button>
          <el-button>删除</el-button>
        </div>
      </div>

    </div>
    <div style="text-align: center">
      <el-button>保存</el-button>
      <el-button>重置</el-button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      data: {
        m1: 'T',
        m2: 'G',
        m3: 'G',
      }
    }
  },


  mounted() {
  }


}
</script>

<style lang="scss" scoped>
.mm {
  font-size: 0.9rem;
  line-height: 1.2rem;
}

.tt {
  display: flex;
  flex-wrap: wrap;

  > div {
    padding: 10px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    width: 45%;
  }
}
</style>
