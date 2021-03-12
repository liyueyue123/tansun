<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="所属机构" name="first">
        <organ-manage-info :queryOrganInfo="$route.query.organInfo"></organ-manage-info>
      </el-tab-pane>
      <el-tab-pane label="角色信息" name="second">
        角色信息
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import OrganManageInfo from '@/views/organManage/OrganManageInfo.vue';
export default {
  name: 'organBasicInfo',
  components: {
    OrganManageInfo
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  created() {
    console.log(this.$route.query.organInfo)
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