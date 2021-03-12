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
        <el-button class="queryBtn" size="medium" type="success" plain @click="getMenuDatas(1)">搜索</el-button>
        <el-button class="resetBtn" size="medium"  type="success" plain @click="resetSearch">重置</el-button>
        <el-button type="success" size="medium" plain @click="toDialog({},1)">添加</el-button>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="menuData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column label="菜单ID"  prop="id">
          </el-table-column>
          <el-table-column label="菜单名称"  prop="permName">
          </el-table-column>
          <el-table-column label="菜单编码"  prop="permNum">
          </el-table-column>
          <el-table-column label="资源类别"  prop="permType">
          </el-table-column>
          <el-table-column label="上级id"  prop="parentId">
          </el-table-column>
          <el-table-column label="URL"  prop="url">
          </el-table-column>
          <el-table-column label="租户代码"  prop="tenantCode">
          </el-table-column>
          <el-table-column label="操作" width="220" >
            <template slot-scope="scope">
              <el-button @click="toDialog(scope.row,0)" type="success"  size="small">查看</el-button>
              <el-button @click="toDialog(scope.row,2)" type="primary"  size="small">修改</el-button>
              <el-button type="danger" size="small" @click="deleteMenu(scope.row)">删除</el-button>
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
        <menu-manage-info
          @on-save="saveCallback"
          @on-cancel="cancelCallback"
          :menuInfo="menuInfo"
          :jumpFlag="jumpFlag"
        ></menu-manage-info>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
import MenuManageInfo from "@/views/menuManage/MenuManageInfo.vue";
import { menu001,menu002,menu003,menu004 } from "@/api/menuManage.js";
export default {
  name: "menuManage",
  components: {
    MenuManageInfo,
  },
  data() {
    return {
      dialogVisible: false,
       options: [{
          value: 'permName',
          label: '菜单名称'
        }, {
          value: 'permNum',
          label: '菜单编码'
        }, {
          value: 'menuType',
          label: '资源类别'
      }],
      selVal: '',  //搜索选中值
      keyWord:'',  //关键字
      checkList: [""],  //多选选中值
      menuData: [],  //菜单列表
      multipleSelection: [], //所选中的行
      pageTotal:1,  //总页码
      currentPage: 1, //默认第几页
      singleFlag: false, //是否只有一页
      alertTiltle:'',   //新增/修改/查看的title
      jumpFlag:null,  //点击事件标识  0--查看|1--新增|2--修改
      menuInfo:null,  //菜单信息
    };
  },
  created() {
    this.getMenuDatas();
  },
  mounted() {
    
  },
  methods: {
    handleSelectionChange(val) {//选中表格的某一项
      this.multipleSelection = val;
      console.log(val, this.multipleSelection);
    },
    resetSearch(){//重置
        this.selVal = '';
        this.keyWord = '';
        this.getMenuDatas(1);  //重置后默认请求第一页
    },
    getMenuDatas(page){// 获取菜单列表数据 
      let  iamTenant = {}  //搜索
      if(this.selVal!=''){
        iamTenant[`${this.selVal}`] = this.keyWord;
      }
      let currentPage = page?page:this.currentPage;
      menu004({start:currentPage,limit:10,iamTenant})
      .then((res) => {
        console.log(res);
        const { records, total } = res.data;
        this.menuData = records;
        this.pageTotal = total;
      })
      .catch((err) => {});
    },
    toDialog(row,type){ //查看|新增|修改
      this.jumpFlag = type; 
      this.alertTiltle = type==0?"查看菜单信息":type==1?"添加菜单信息":type==2?"修改菜单信息":'';
      this.dialogVisible = true;
      this.menuInfo = {
        id:row.id||'', //菜单ID
        permName:row.permName||'',  //菜单名称
        permNum:row.permNum||'',  //菜单编码
        menuType:row.permType||'', //资源类别
        parentId:row.parentId||'',  //上级id
        url:row.url||'', //url
        tenantCode:row.tenantCode||'',  //租户代码
        state:row.state||'',  //状态
      }
    },
     deleteMenu(row){  //删除菜单
        this.$confirm('确定删除该条菜单信息？', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          menu002({id:row.id,permNum:row.permNum,menuType:row.menuType})  
          .then((res) => {
              console.log(res);
              if(res.code==0){
                this.$message({
                  type: 'success',
                  message: '删除成功',
                  duration: 5 * 1000
                });
                this.getMenuDatas();
              }
              
          }).catch((err) => {
              console.log(err)
          });
        })
    },
    saveCallback(val) {//子组件保存按钮回调
      this.dialogVisible = false;
      if(val.jumpFlag==1){//新增
        menu001(val.params)  
        .then((res) => {
          console.log(res);
          this.getMenuDatas();
        })
        .catch((err) => {
          console.log(err)
        });
      }else if(val.jumpFlag==2){// 修改
       menu003(val.params)  
        .then((res) => {
          console.log(res);
          this.getMenuDatas();
        })
        .catch((err) => {
          console.log(err)
        });
      }
    },
    cancelCallback(val) {//子组件取消按钮回调
      this.dialogVisible = false;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getMenuDatas()
    },
  },
};
</script>
<style lang="scss" scope>
.search_box {
  margin-bottom: 10px;
  & > div {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
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
</style>