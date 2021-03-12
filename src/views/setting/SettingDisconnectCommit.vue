<template>
  <div>
    <h3>
      失联提报设置
    </h3>

    <div style="display: flex;">
      <div style="width: 50%">
        ①持卡人本人号码连续
        <el-input style="width: 30px">2</el-input>
        天拨打结果为无效
      </div>
      <div style="width: 50%">
        ②持卡人本人号码
        <el-input style="width: 30px">5</el-input>
        天拨打结果为通无人接/拒接/无效，其中有3天连续拨打记录
      </div>
    </div>

    <br/>
    <div style="display: flex;">
      <div style="width: 50%">
        ③直系亲属号码连续
        <el-input style="width: 30px">2</el-input>
        天拨打结果为无效
      </div>
      <div style="width: 50%">
        ④直系亲属号码
        <el-input style="width: 30px">5</el-input>
        天拨打结果为通无人接/拒接/无效，其中有3天连续拨打记录
      </div>
    </div>


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

</style>
