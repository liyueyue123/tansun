<template>
  <div class="app-container" style="font-size: 14px">

    <el-tag
      size="default"
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
  </div>

</template>
<script>


export default {
  data() {
    return {

      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      data: null,

      listFunc: null,
      addFunc: null

    }
  },
  props: ['type'],

  mounted() {
    this.listFunc().then((res) => {
      if (res.length > 0) {
        this.data = res[0];
        this.dynamicTags = res[0].value.split(",");
      }
    })
  },
  methods: {

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.save();
    },

    save() {
      if (this.data == null) {
        this.data = {
          name: this.type,
          value: this.dynamicTags.join(",")
        }
        this.addFunc(this.data).then((res) => {
          this.$message.success('保存成功')
        })
      } else {
        this.data.value = this.dynamicTags.join(",")
        /* sysDb.update(this.data).then(res => {
             this.$message.success('更新成功')
         })*/
      }
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        // this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.save();
      }
      this.inputVisible = false;
      this.inputValue = '';
    }

  }


}
</script>

<style lang="scss" scoped>
</style>
