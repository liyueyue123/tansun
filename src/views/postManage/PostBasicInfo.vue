<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="岗位信息" name="first">
        <post-manage-info :queryPostInfo="$route.query.postInfo"></post-manage-info>
      </el-tab-pane>
      <el-tab-pane label="角色信息" name="second">
        角色信息
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PostManageInfo from '@/views/postManage/PostManageInfo.vue';
export default {
  name: 'PostBasicInfo',
  components: {
    PostManageInfo
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  created() {
      
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>
<style lang="scss" scope>
  
  
</style>