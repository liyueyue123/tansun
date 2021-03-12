<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :before-leave='leaveTab'>
      <el-tab-pane label="用户组信息" name="first">
        <group-manage-info :queryGroupInfo="$route.query.groupInfo" ></group-manage-info>
      </el-tab-pane>
      <el-tab-pane label="角色信息" name="second">
        角色信息
        <!-- <assign-role-info></assign-role-info> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import GroupManageInfo from '@/views/groupManage/GroupManageInfo.vue';
import AssignRoleInfo from '@/views/groupManage/AssignRoleInfo.vue'
export default {
  name: 'GroupBasicInfo',
  components: {
    GroupManageInfo,
    AssignRoleInfo
  },
  data() {
    return {
      activeName: 'first',
      activeFlag:'0',  //新增必须先添加基本信息  0-未新增|1-已新增
    };
  },
  created() {
    
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    leaveTab(activeName, oldActiveName){
      // this.activeFlag = sessionStorage.getItem('activeFlag');
      // let data = Object.assign({}, JSON.parse(this.$route.query.groupInfo))
      // console.log(activeName, oldActiveName,this.activeFlag,data.jumpFlag)
      // // 新增时必须先完成新增用户，再进行角色分配
      // if(oldActiveName=='first'&&this.activeFlag=='0'&&data.jumpFlag==1){
      //   this.$message({
      //     type: 'error',
      //     message: '请先添加用户组信息',
      //     duration: 5 * 1000
      //   });
      //   return false
      // }
    },
  }
}
</script>
<style lang="scss" scope>
  
  
</style>