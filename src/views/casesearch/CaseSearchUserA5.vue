<template>
  <div style="padding-left: 40px">

    <el-row>
      <el-col :span="12">

        <el-select>
          <el-option value="1" label="系统内溢缴款购汇还款"></el-option>
          <el-option value="2" label="系统外溢缴款购汇还款"></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">

        <el-select>
          <el-option value="1" label="系统内溢缴款购汇还款"></el-option>
          <el-option value="2" label="系统外溢缴款购汇还款"></el-option>
        </el-select>
      </el-col>
    </el-row>

    <br/>
    <el-row>
      <el-col :span="12">

        <el-radio v-model="radio" label="1">全额还款</el-radio>
      </el-col>
      <el-col :span="12">
        <el-radio v-model="radio" label="2">最低还款额</el-radio>
      </el-col>
    </el-row>

    <br/>
    <br/>

    <div style="display: flex;justify-content: center;">
      <el-button style="margin-right: 50px" @click="$emit('close')">确定</el-button>
      <el-button @click="$emit('close')">关闭</el-button>
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      radio: '1'

    }
  },

  mounted() {
  }
}
</script>


<style lang="scss" scoped>

</style>
