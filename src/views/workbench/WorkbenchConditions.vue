<template>
  <el-form ref="form" label-width="80px" label-suffix=":" :inline="true">
    <el-form-item label="策略组">
      <el-select v-model="group" placeholder="请选择">
        <el-option
          v-for="item in groupOpt"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="催收组">
      <el-select v-model="team" placeholder="请选择">
        <el-option
          v-for="item in teamOpt"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="催收员">
      <el-select v-model="user" placeholder="请选择">
        <el-option
          v-for="item in userOpt"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="账单日">
      <el-date-picker
        v-model="day"
        type="date"
        placeholder="请选择">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button icon="el-icon-plus" @click="onChoseCondition"></el-button>
    </el-form-item>

    <el-form-item>
      <el-button>查询</el-button>
      <el-button>重置</el-button>
    </el-form-item>

    <el-dialog :visible.sync="dialogVisible">
      <workbench-conditions-dialog></workbench-conditions-dialog>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </span>
    </el-dialog>

  </el-form>
</template>

<script>
import WorkbenchConditionsDialog from "@/views/workbench/WorkbenchConditionsDialog.vue";

export default {
  name: 'WorkbenchConditions',
  components: {WorkbenchConditionsDialog},

  data() {
    return {
      dialogVisible: false,
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
      groupOpt: [{
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
      teamOpt: [{
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
      userOpt: [{
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


  methods: {

    onChoseCondition() {

      this.dialogVisible = true;
    }
  },
  mounted() {
  }


}
</script>
