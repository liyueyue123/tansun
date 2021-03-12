<template>

  <el-form ref="form" label-width="80px" label-suffix=":" :inline="true">
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
      <comp-select-member v-model="member" ref="memberComp"></comp-select-member>
    </el-form-item>
    <el-form-item label="账户类型">
      <comp-select-acc-type v-model="accType" ref="accTypeComp"></comp-select-acc-type>
    </el-form-item>
    <el-form-item label="推广机构">
      <comp-select-promotion-org v-model="promotionOrg" ref="promotionOrgComp"></comp-select-promotion-org>
    </el-form-item>
    <el-form-item label="账单日">
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="请选择" style="width: 150px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="标识">
      <comp-select-sign v-model="sign" ref="signComp"></comp-select-sign>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import CompSelectOrg from "@/views/comp/CompSelectOrg.vue";
import CompSelectDeparts from "@/views/comp/CompSelectDeparts.vue";
import CompSelectGroup from "@/views/comp/CompSelectGroup";
import CompSelectTeam from "@/views/comp/CompSelectTeam";
import CompSelectMember from "@/views/comp/CompSelectMember";
import CompSelectAccType from "@/views/comp/CompSelectAccType";
import CompSelectPromotionOrg from "@/views/comp/CompSelectPromotionOrg";
import CompSelectSign from "@/views/comp/CompSelectSign";

export default {
  name: 'CaseMgrAssignRangeSelector',
  components: {
    CompSelectSign,
    CompSelectPromotionOrg,
    CompSelectAccType, CompSelectMember, CompSelectTeam, CompSelectGroup, CompSelectDeparts, CompSelectOrg},

  data() {
    return {
      org: '',
      department: '',
      group: '',
      team: '',
      member: '',
      accType: '',
      promotionOrg: '',
      sign: '',
      month: '',
      day: ''
    }
  },


  mounted() {
  },
  methods: {

    onChangeOrg(v) {
      console.log(v);
      this.$refs.departmentComp.load(v.id)
    }
  }


}
</script>
