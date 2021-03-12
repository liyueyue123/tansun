<template>
  <el-container>
    <el-main>
      <div class="search_box">
        <div>
          <span>搜索:</span>
          <el-select v-model="selVal" size="medium" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-input
            size="medium"
            class="input_01"
            placeholder="输入关键字"
            v-model="keyWord"
            clearable
          ></el-input>
        </div>
        <el-button class="queryBtn" size="medium" type="success" plain @click="getDatas(1)">搜索</el-button>
        <el-button class="resetBtn" size="medium"  type="success" plain @click="resetSearch">重置</el-button>
        <el-button type="success" size="medium" plain @click="toDialog({},1)">添加</el-button>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tenantList"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="租户ID" prop="id"> </el-table-column>
          <el-table-column label="租户代码" prop="tenantCode">
          </el-table-column>
          <el-table-column label="租户名称" prop="tenantName">
          </el-table-column>
          <el-table-column label="联系人 " prop="linkman"> </el-table-column>
          <el-table-column label="联系电话 " prop="contactNumber">
          </el-table-column>
          <el-table-column label="联系地址" prop="address"> </el-table-column>
          <el-table-column label="租户状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.tenantState"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="220">
            <template slot-scope="scope">
              <el-button
                @click="toDialog(scope.row,0)"
                type="success"
                size="small"
                >查看</el-button
              >
              <el-button
                @click="toDialog(scope.row,2)"
                type="primary"
                size="small"
                >修改</el-button
              >
              <el-button type="danger" size="small" @click="deleteTenant(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination_box">
        <el-pagination
          :hide-on-single-page="singleFlag"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal"
        >
        </el-pagination>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        :title="alertTiltle"
        width="40%"
      >
        <system-manage-info
          @on-save="saveCallback"
          @on-cancel="cancelCallback"
          :tenantInfo="tenantInfo"
          :jumpFlag="jumpFlag"
        ></system-manage-info>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
import SystemManageInfo from "@/views/systemManage/SystemManageInfo.vue";
import { tenant001,tenant002,tenant003,tenant004 } from "@/api/systemmanage.js";
import { Message } from 'element-ui'
export default {
  name: "systemManage",
  components: {
    SystemManageInfo,
  },
  data() {
    return {
      dialogVisible: false,
      options: [{
          value: 'id',
          label: '租户ID'
        }, {
          value: 'tenantCode',
          label: '租户代码'
        }, {
          value: 'tenantName',
          label: '租户名称'
      }],
      selVal: '',  //搜索选中值
      keyWord:'',  //关键字
      checkList: [""], //多选选中值
      tenantList: [], //租户列表
      multipleSelection: [], //所选中的行
      pageTotal:1,  //总页码
      currentPage: 1, //默认第几页
      singleFlag: false, //是否只有一页
      alertTiltle:'',   //新增/修改/查看的title
      jumpFlag:null,  //点击事件标识  0--查看|1--新增|2--修改
      tenantInfo:null,  //租户信息
    };
  },
  created() {
    this.getDatas();  //获取第一页数据
  },
  mounted() {
    
  },
  methods: {
    resetSearch(){//重置
        this.selVal = '';
        this.keyWord = '';
        this.getDatas(1);
    },
    getDatas(page){// 租户信息管理-列表 
      let  iamTenant = {}  //搜索
      if(this.selVal!=''){
        iamTenant[`${this.selVal}`] = this.keyWord;
      }
      let currentPage = page?page:this.currentPage;
      tenant004({start:currentPage,limit:10,iamTenant})
      .then((res) => {
        console.log(res);
        const { records, total } = res.data;
        this.tenantList = records;
        this.pageTotal = total;
      })
      .catch((err) => {});
    },
    handleSelectionChange(val) {
      //选中表格的某一项
      this.multipleSelection = val;
      console.log(val, this.multipleSelection);
    },
    toDialog(row,type){ //查看|新增|修改
      this.jumpFlag = type; 
      this.alertTiltle = type==0?"查看租户信息":type==1?"添加租户信息":type==2?"修改租户信息":'';
      this.dialogVisible = true;
      this.tenantInfo = {
        id:row.id || null,  //租户id
        tenantCode:row.tenantCode||'',  //租户代码
        tenantName:row.tenantName||'',  //租户名称
        linkman:row.linkman||'', //联系人
        contactNumber:row.contactNumber||'',  //联系电话
        address:row.address||'',  //联系地址
        tenantState:row.tenantState||'',  //租户状态
      }
    },
    deleteTenant(row){  //删除租户
        this.$confirm('确定删除该条租户信息？', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          tenant002({id:row.id,tenantCode:row.tenantCode})  
          .then((res) => {
              console.log(res);
              if(res.code==0){
                Message({
                  message: '删除成功',
                  type: 'success',
                  duration: 5 * 1000
                })
                this.getDatas();
              }
              
          }).catch((err) => {
              console.log(err)
          });
        })
    },
    saveCallback(val) {//子组件保存按钮回调
      if(val.jumpFlag==1){//新增
        tenant001(val.params)  
        .then((res) => {
          console.log(res);
          this.getDatas();
          this.dialogVisible = false;
        })
        .catch((err) => {
          console.log(err)
        });
      }else if(val.jumpFlag==2){// 修改
       tenant003(val.params)  
        .then((res) => {
          console.log(res);
          this.getDatas();
          this.dialogVisible = false;
        })
        .catch((err) => {
          console.log(err)
        });
      }
      
    },
    cancelCallback(val) {
      //子组件点击取消按钮回调
      this.dialogVisible = false;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getDatas()
    },
  },
};
</script>
<style lang="scss" scope>
.search_box {
  margin-bottom: 10px;
  & > div {
    padding: 0 10px;
    font-size: 14px;
    display: inline-block;
    &>span{
      margin-right: 10px;
    }
    .input_01 {
      width: 200px;
      margin-right: 20px;
    }
  }
}
.pagination_box {
  margin-top: 20px;
}
.el-dialog__header{
  background-color: #F8F8F8;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.el-table th.gutter{
   display: table-cell!important;
}
</style>