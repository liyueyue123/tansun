<template>
  <div class="table-par">

    <table>
      <tr>
        <td rowspan="5">
          <h2 style="text-align: center">
            个人综合报告
          </h2>
        </td>
        <td colspan="5">本人（新）手机号检索有无被填写为联系人</td>
      </tr>
      <tr>
        <td> 更新时间</td>
        <td> 调阅</td>
        <td> 是否有效</td>
        <td> 是否有效操作员</td>
        <td> 是否有效操作时间</td>
      </tr>
      <tr>
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
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <table>
      <tr>
        <td rowspan="5">
          <h2 style="text-align: center">
            个人综合报告
          </h2>
        </td>
        <td colspan="5">配偶证件号检索有无被填写为联系人</td>
      </tr>
      <tr>
        <td> 更新时间</td>
        <td> 调阅</td>
        <td> 是否有效</td>
        <td> 是否有效操作员</td>
        <td> 是否有效操作时间</td>
      </tr>
      <tr>
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
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <table>
      <tr>
        <td rowspan="5">
          <h2 style="text-align: center">
            个人综合报告
          </h2>
        </td>
        <td colspan="5">配偶联系电话检索有无被填写为联系人</td>
      </tr>
      <tr>
        <td> 更新时间</td>
        <td> 调阅</td>
        <td> 是否有效</td>
        <td> 是否有效操作员</td>
        <td> 是否有效操作时间</td>
      </tr>
      <tr>
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
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>

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
.table-par {
  > table {
    margin-bottom: 20px;
  }
}

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
    height: 24px;
  }

  tr:first-child {
    td:nth-child(2) {
      font-weight: 600;
    }
  }
}
</style>
