<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">
        <self-info ></self-info>
      </el-tab-pane>
      <el-tab-pane label="角色信息" name="second">
        <role-info ></role-info>
      </el-tab-pane>
      <el-tab-pane label="机构信息" name="third">
        <organ-info ></organ-info>
      </el-tab-pane>
      <el-tab-pane label="用户组信息" name="fourth">
        <group-info></group-info>
      </el-tab-pane>
      <el-tab-pane label="岗位信息" name="fifth">
        <post-info></post-info>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SelfInfo from '@/views/userManage/SelfInfo.vue';
import RoleInfo from '@/views/userManage/RoleInfo.vue';
import OrganInfo from '@/views/userManage/OrganInfo.vue';
import GroupInfo from '@/views/userManage/GroupInfo.vue';
import PostInfo from '@/views/userManage/PostInfo.vue';
export default {
  name: 'BasicInfo',
  components: {
    SelfInfo,
    RoleInfo,
    OrganInfo,
    GroupInfo,
    PostInfo
  },
  data() {
    return {
      activeName: 'first',
    };
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