<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="卡片止付">
        <el-form ref="form" label-width="160px" label-suffix=":" label-position="right">
          <el-form-item label="卡号">
            <el-select v-model="params.cardNo">
              <el-option value="1134134352451234134" label="1134134352451234134"></el-option>
              <el-option value="1134134352451234134" label="1134134352451234134"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="止付申请人">
            <el-select v-model="params.applier">
              <el-option value="1" label="张三"></el-option>
              <el-option value="2" label="李四"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="卡片止付原因">
            <el-input v-model="params.reason" type="textarea" :rows="6">

            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button>返回</el-button>
            <el-button>提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="卡片解付">
        <el-form ref="form" label-width="160px" label-suffix=":" label-position="right">
          <el-form-item label="卡号">
            <el-select v-model="params.cardNo">
              <el-option value="1134134352451234134" label="1134134352451234134"></el-option>
              <el-option value="1134134352451234134" label="1134134352451234134"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="解付申请人">
            <el-select v-model="params.applier">
              <el-option value="1" label="张三"></el-option>
              <el-option value="2" label="李四"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="卡片解付原因">
            <el-input v-model="params.reason" type="textarea" :rows="6">

            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button>返回</el-button>
            <el-button>提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>


export default {
  data() {
    return {
      params: {
        cardNo: '',
        applier: '',
        reason: ''
      }
    }
  },

  mounted() {
  }
}
</script>


<style lang="scss" scoped>

</style>
