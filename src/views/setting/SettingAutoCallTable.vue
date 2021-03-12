<template>
  <div style="display: flex;" class="cc">

    <div style="margin-right: 100px">
      <h4>
        AI出表配置
      </h4>
      <el-calendar></el-calendar>
      <el-button>保存</el-button>
    </div>
    <div>
      <h4>
        IVR出表配置
      </h4>
      <el-calendar></el-calendar>
      <el-button>保存</el-button>
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

.cc {
  > div {
    .el-button {
      float: right;
      margin-right: 20px;
    }
  }
}
</style>
