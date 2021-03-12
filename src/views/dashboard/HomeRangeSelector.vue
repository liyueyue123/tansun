<template>

  <el-form ref="form" label-width="80px" label-suffix=":" :inline="true">
    <el-form-item label="机构">
      <comp-select-org v-bind:value.sync="org" @change="onChangeOrg"></comp-select-org>
    </el-form-item>
    <el-form-item label="科室">
      <comp-select-departs v-model="department" ref="departmentComp"></comp-select-departs>
    </el-form-item>
    <el-form-item label="策略组">
      <comp-select-group v-model="group" ref="groupComp"></comp-select-group>
    </el-form-item>
    <el-form-item label="团队">
      <comp-select-team v-model="team" ref="teamComp"></comp-select-team>
    </el-form-item>
    <el-form-item label="催收员">
      <comp-select-member v-model="user" ref="userComp"></comp-select-member>
    </el-form-item>
    <el-form-item label="月份">
      <el-date-picker
        v-model="month"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="账单日">
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="请选择">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button>查询</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import CompSelectOrg from "@/views/comp/CompSelectOrg.vue";
import CompSelectDeparts from "@/views/comp/CompSelectDeparts.vue";
import CompSelectGroup from "@/views/comp/CompSelectGroup";
import CompSelectTeam from "@/views/comp/CompSelectTeam";
import CompSelectMember from "@/views/comp/CompSelectMember";

export default {
  name: 'HomeRangeSelector',
  components: {CompSelectMember, CompSelectTeam, CompSelectGroup, CompSelectDeparts, CompSelectOrg},

  data() {
    return {
      orgOpt: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      departmentOpt: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      org: '',
      department: '',
      group: '',
      team: '',
      user: '',
      month: '',
      day: ''
    }
  },

  mounted() {
  },
  methods: {

    onChangeOrg(v) {
      this.$refs.departmentComp.load(v.id)
    }
  }


}
</script>
