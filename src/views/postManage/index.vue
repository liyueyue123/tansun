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
        <el-button class="queryBtn" size="medium" type="success" plain @click="getPostData(1)">搜索</el-button>
        <el-button class="resetBtn" size="medium"  type="success" plain @click="resetSearch">重置</el-button>
        <el-button type="success" size="medium" plain @click="addPost()">添加</el-button>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="postData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column label="岗位ID"  prop="id">
          </el-table-column>
          <el-table-column label="岗位代码"  prop="postCode">
          </el-table-column>
          <el-table-column label="岗位名称"  prop="postName">
          </el-table-column>
          <el-table-column label="父岗位ID"  prop="parentId">
          </el-table-column>
          <el-table-column label="租户代码"  prop="tenantCode">
          </el-table-column>
          <el-table-column  label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="220" >
            <template slot-scope="scope">
              <el-button @click="detailPost(scope.row)" type="success" size="small">查看</el-button>
              <el-button
                @click="editPost(scope.row)"
                type="primary"
                size="small"
                >修改</el-button
              >
              <el-button type="danger" size="small" @click="deletePost(scope.row)">删除</el-button>
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
    </el-main>
  </el-container>
</template>
<script>
import { duty002,duty004 } from "@/api/postManage.js";
export default {
  name: "postManage",
  components: {
    
  },
  data() {
    return {
      options: [{
          value: 'postCode',
          label: '岗位代码'
        }, {
          value: 'postName',
          label: '岗位名称'
        }, {
          value: 'tenantCode',
          label: '租户代码'
      }],
      selVal: '',  //搜索选中值
      keyWord:'',  //关键字
      checkList: [""],  //多选选中值
      postData: [], //岗位列表
      multipleSelection: [], //所选中的行
      pageTotal:1,  //总页码
      currentPage: 1, //默认第几页
      singleFlag: false, //是否只有一页
    };
  },
  created() {
    this.getPostData();  //获取第一页数据
  },
  methods: {
    handleSelectionChange(val) {
      //选中表格的某一项
      this.multipleSelection = val;
      console.log(val, this.multipleSelection);
    },
    resetSearch(){//重置
        this.selVal = '';
        this.keyWord = '';
        this.getOrganData(1);
    },
    getPostData(page){ //获取岗位列表
      let  iamTenant = {}  //搜索
      if(this.selVal!=''){
        iamTenant[`${this.selVal}`] = this.keyWord;
      }
      let currentPage = page?page:this.currentPage;
      duty004({start:currentPage,limit:10,iamTenant})
      .then((res) => {
        console.log(res);
        const { records, total } = res.data;
        this.postData = records;
        this.pageTotal = total;
      })
      .catch((err) => {});
    },
    detailPost(row){ //查看
      row.jumpFlag = 0;
      let data = JSON.stringify(row)
      this.$router.push({path:'/postManage/viewPost',query:{postInfo:data}})
    },
    addPost() {//新增
      let data ={
        jumpFlag : 1
      }
      this.$router.push({path:'/postManage/addPost',query:{postInfo:JSON.stringify(data)}})
    },
    editPost(row) {//编辑
      row.jumpFlag = 2;
      let data = JSON.stringify(row)
      this.$router.push({path:'/postManage/editPost',query:{postInfo:data}})
    },
    deletePost(row){//删除
      this.$confirm('确定删除该条机构信息？', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          duty002({id:row.id,postCode:row.postCode})  
          .then((res) => {
              console.log(res);
              if(res.code==0){
                this.$message({
                  type: 'success',
                  message: '删除成功',
                  duration: 5 * 1000
                });
                this.getPostData();
              }
          }).catch((err) => {
              console.log(err)
          });
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getOrganData()
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
.el-table th.gutter{
   display: table-cell!important;
}
.pagination_box {
  margin-top: 20px;
}
</style>