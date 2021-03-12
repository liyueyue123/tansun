<template>

  <el-select v-model="name" placeholder="请选择" @change="onChange" style="width: 150px">
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


</template>

<script>
import {loadAccType} from "@/api/base";


export default {
  name: 'CompSelectAccType',

  data() {
    return {

      items: [],
      name: this.value
    }
  },
  props: ['value'],

  watch: {

    value(value) {

      this.name = value;
    }
  },
  methods: {
    onChange(v) {
      this.$emit('update:value', v)
      let find = this.items.find(ss => {
        return ss.id == v;
      });
      this.$emit('change', find)
    }
  },


  async mounted() {

    loadAccType().then(res => {
      this.items = res.data.items.map((item) => {
        return {label: item.name, value: item.id, ...item}
      });
    })

  }


}
</script>
