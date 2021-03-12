<template>
  <table>
    <tr>
      <td colspan="9">
        <h2 style="text-align: center">
          个人综合报告

        </h2>
      </td>
    </tr>
    <tr>
      <td colspan="9" class="title">
        基本信息
      </td>
    </tr>
    <tr>
      <td rowspan="2">身份信息</td>
      <td>通讯地址</td>
      <td>是否有效</td>
      <td>户籍地址</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">联系信息</td>
      <td>手机号码</td>
      <td>信息更新日期</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">配偶信息</td>
      <td>证件号码</td>
      <td>工作单位</td>
      <td>联系电话</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">居住信息</td>
      <td>居住地址</td>
      <td>住宅电话</td>
      <td>居住状况</td>
      <td>更新日期</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">职业信息</td>
      <td>工作单位</td>
      <td>单位性质</td>
      <td>单位地址</td>
      <td>单位电话</td>
      <td>职务</td>
      <td>进入本单位年份</td>
      <td>信息更新日期</td>
      <td>是否有效</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="9" class="title">
        公共信息汇总
      </td>
    </tr>
    <tr>
      <td rowspan="2">住房公积金参缴记录</td>
      <td>参缴地</td>
      <td>参缴日期</td>
      <td>缴费单位</td>
      <td>信息更新日期</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">低保救助记录</td>
      <td>所有地</td>
      <td>工作单位</td>
      <td>更新日期</td>
      <td>是否有效</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>


export default {
  data() {
    return {}
  },

  mounted() {
  }


}
</script>

<style lang="scss" scoped>
.title {
  background-color: #7d1c03;
  text-align: center;
  color: white;
  line-height: 1.6rem
}

table {
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;

  td {
    text-align: center;
    width: 10%;
    border: 1px solid gray;
    height: 20px;
  }
}
</style>
