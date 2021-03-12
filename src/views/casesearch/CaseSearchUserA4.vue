<template>
  <div style="padding-left: 40px">


    <el-row>
      <el-col :span="4">

      </el-col>
      <el-col :span="10">
        <el-select v-model="type">
          <el-option value="减免清户" label="减免清户"></el-option>
          <el-option value="关注类还款分期" label="关注类还款分期"></el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-select v-model="type1">
          <el-option v-if="type!=null" value="1" :label="'APP关注类'+type"></el-option>
          <el-option v-if="type!=null" value="2" :label="'线上关注类'+type"></el-option>
          <el-option v-if="type!=null" value="3" :label="'特殊关注类'+type"></el-option>
        </el-select>
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

      type: null,
      type1: null
    }
  },

  mounted() {
  }
}
</script>


<style lang="scss" scoped>

</style>
