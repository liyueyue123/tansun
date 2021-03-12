<template>

  <el-select v-model="name" placeholder="请选择" style="width: 150px">
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


</template>

<script>
import {loadDeparts} from "@/api/base";


export default {
  name: 'CompSelectDeparts',
  data() {
    return {

      items: [],
      name: this.value

    }
  },
  props: ['value'],

  watch: {
    value() {
      this.name = value;

    }
  },
  methods: {


    async load(org) {

      this.items = [];
      this.name = null;
      loadDeparts(org).then(res => {
        this.items = res.data.items.map((item) => {
          return {label: item.name, value: item.id}
        });
      })

    },
    onChange(v) {
      this.$emit('update:value', v)
      let find = this.items.find(ss => {
        return ss.id == v;
      });
      this.$emit('change', find)
    }

  },


}
</script>
