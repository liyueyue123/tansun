<template>

  <el-card>
    <div slot="header">
      <span>待处理事务</span>
    </div>
    <div>
      <el-tag
        v-for="(item,index) in list" :key="index"
        :type="item.done?'success':'info'">
        <i :class="item.done?'el-icon-success':'el-icon-remove-outline'"></i>
        {{ item.msg }}
      </el-tag>

      <!--            <el-checkbox v-for="(item,index) in list" :key="index" :model="item.done">{{item.msg}}</el-checkbox>-->

    </div>

  </el-card>


</template>

<script>

export default {
  name: 'HomeTodo',

  data() {
    return {
      list: [
        {done: true, msg: '您有6条人行征信待审批'},
        {done: true, msg: '您有6条人行征信待审批'},
        {done: false, msg: '您有6条人行征信待审批'},
        {done: false, msg: '您有6条人行征信待审批'},
        {done: true, msg: '您有6条人行征信待审批'},
      ]
    }
  },

  mounted() {
  }


}
</script>
