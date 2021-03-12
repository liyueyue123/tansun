<template>
  <el-container>
    <el-main>
      <div class="user_box">
        <div class='search_box'>
          <div>
              <span>登录名：</span>
              <el-input class='input_01' size="medium" placeholder="请输入内容" v-model="loginName" clearable></el-input>
          </div>
          <div>
              <span>姓名：</span>
              <el-input class='input_01' size="medium" placeholder="请输入内容" v-model="userName" clearable></el-input>
          </div>
          <el-button class="queryBtn" size="medium" type="success" plain>查询</el-button>
          <el-button class='resetBtn' size="medium" type="primary" plain>重置</el-button>
          <el-button size="medium" type="success" plain @click="addHandleClick">新增</el-button>
        </div>
        <div class="table_box">
          <el-table
            border
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="40">
            </el-table-column>
            <el-table-column
              label="登录名"
              prop="loginName">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="手机"
              width="100">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="certType"
              label="证件类型">
            </el-table-column>
            <el-table-column
              prop="certNumber"
              label="证件号码"
              width="140">
            </el-table-column>
            <el-table-column
              prop="orgId"
              label="机构id">
            </el-table-column>
            <el-table-column
              prop="orgName"
              label="机构名称">
            </el-table-column>
            <el-table-column
              prop="tenantCode"
              label="租户代码"
              width="80">
            </el-table-column>
            <el-table-column
              prop="tenantCode"
              label="租户名称">
            </el-table-column>
            <el-table-column
              label="状态"
              width="80">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.state"
                  @change='stateChange'
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="220">
              <template slot-scope="scope">
                <el-button @click="detailHandleClick(scope.row)" type="success" size="small">查看</el-button>
                <el-button @click="editHandleClick(scope.row)" type="primary" size="small">修改</el-button>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    components: {
      
    },
    data(){
      return{
        loginName:'',  //登录名
        userName:'',  //姓名
        tableData: [{
          loginName:'小明',
          userName:'小明',
          mobile:'12345678910',
          sex:'男',
          certType:'身份证',
          certNumber:'122311199801012345',
          orgId:'111099',
          orgName:'民生银行',
          tenantCode:'128983',
          tenantName:'十九世纪',
          state:0
        },{
          loginName:'小花',
          userName:'小花',
          mobile:'12345678910',
          sex:'男',
          certType:'身份证',
          certNumber:'122311199801012345',
          orgId:'111099',
          orgName:'民生银行',
          tenantCode:'129983',
          tenantName:'十九世纪',
          state:1
        }],
        multipleSelection: [],  //所选中的
      }
    },
     methods: {
      handleSelectionChange(val) { 
        this.multipleSelection = val;
        console.log(val,this.multipleSelection)
      },
      addHandleClick(){  //新增按钮
        this.$router.push({path:'/userManage/basicInfo',query:{}})
      },
      detailHandleClick(row){//查看详情
          this.$router.push({path:'/userManage/basicInfo',query:{}})
      },
      editHandleClick(row) {  //修改按钮
        console.log(row);
        this.$router.push({path:'/userManage/basicInfo',query:{}})
      },
      stateChange(val){//状态切换
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scope>
  .search_box{
    margin-bottom: 10px;
    &>div{
      display: inline-block;
      .input_01{
        width: 200px;
        margin-right: 20px;
      }
    }
  }
.el-table th.gutter{
   display: table-cell!important;
}
</style>