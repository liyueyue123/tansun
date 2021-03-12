<template>
    <el-container>
        <el-main class="organ_main">
        <div class="tree_box">
            <el-tree
            :props="defaultProps"
            :load="loadNode"
            lazy
            accordion
            highlight-current
            @node-click="handleNodeClick">
            </el-tree>
        </div>
        <div class="input_box">
            <div>
                <span>机构代码:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="organInfo.jumpFlag==0?true:false" v-model="organInfo.code" clearable></el-input>
            </div>
            <div>
                <span>机构名称:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="organInfo.jumpFlag==0?true:false" v-model="organInfo.name" clearable></el-input>
            </div>
            <div>
                <span>父机构ID:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="organInfo.jumpFlag==0?true:false" v-model="organInfo.parentId" clearable></el-input>
            </div>
            <div>
                <span>机构类型:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="organInfo.jumpFlag==0?true:false" v-model="organInfo.type" clearable></el-input>
            </div>
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="organInfo.jumpFlag==0?true:false" v-model="organInfo.tenantCode" clearable></el-input>
            </div>
            <div>
                <span>状态:</span>
                <el-switch
                    class='input_01'
                    v-model="organInfo.state"
                    :disabled="organInfo.jumpFlag==0?true:false"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </div>
        </div>
        <div class="button_box" v-if="organInfo.jumpFlag!=0">
            <el-button size="medium" type="success" plain @click="saveBtn">{{organInfo.jumpFlag==1?'添加':'保存'}}</el-button>
            <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
        </div>
    </el-main>
  </el-container>
</template>

<script>
import { morg001,morg003 } from "@/api/organmanage.js";
export default {
    props:['queryOrganInfo'],
    name: 'OrganManageInfo',
    data(){
        return{
            defaultProps: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
            organInfo:null,
        }
    },
    created() {
        let data = Object.assign({}, JSON.parse(this.queryOrganInfo))
        this.organInfo = {
            jumpFlag:data.jumpFlag||0,
            id:data.id || '',
            code:data.code || '',
            name:data.name || '',
            parentId:data.parentId || '',
            type:data.type||'',
            tenantCode:data.tenantCode ||'',
            state:data.state || false,
        }
        console.log(this.organInfo)
    },
    methods:{
        handleNodeExpand(data){
            console.log(data)
        },
        handleNodeClick(data) {
            console.log(data);
        },
        loadNode(node, resolve) {
            //  console.log(node.level,node)
            if (node.level === 0) {  //如果展开第一级节点，请求第一级数据
                let firstDatas = [{name:'总行'},{name:'分行'},{name:'支行'}]
                return resolve(firstDatas);
            }
            if (node.level === 1) { //如果展开其他级节点，动态请求数据
                console.log("当前节点id值为："+ node.data.$treeNodeId)
                let getDatas = [{name: '北京分行'},{name:'天津分行'}]
                return resolve(getDatas);
            }
            if(node.level>1)return resolve([]);
        },
        saveBtn(){//保存
            this.organInfo.state=''
            if(this.organInfo.jumpFlag==1){
                delete this.organInfo.jumpFlag
                morg001(this.organInfo)  
                .then((res) => {
                    console.log('morg001:',res);
                    this.$message({
                    type: 'success',
                    message: '添加成功',
                    duration: 5 * 1000
                    });
                    setTimeout(()=>{
                        this.$store.dispatch("tagsView/delView", this.$route);
                        this.$router.go(-1);
                    },300)
                })
                .catch((err) => {
                    console.log(err)
                });
            }
            if(this.organInfo.jumpFlag==2){
                delete this.organInfo.jumpFlag
                morg003(this.organInfo).then((res) => {
                    console.log('morg003:',res);
                    this.$message({
                    type: 'success',
                    message: '修改成功',
                    duration: 5 * 1000
                    });
                    setTimeout(()=>{
                        this.$store.dispatch("tagsView/delView", this.$route);
                        this.$router.go(-1);
                    },300)
                    
                })
                .catch((err) => {
                    console.log(err)
                });
            }
            
        },
        cancelBtn(){//取消
            this.$store.dispatch("tagsView/delView", this.$route);
            this.$router.go(-1);
        },
    }
}
</script>

<style lang="scss" scope>
.organ_main{
    padding: 0;
    border: 1px solid rgb(238, 238, 238);
    .tree_box{
        padding: 20px;
        width: 200px;
        height: 100%;
        box-sizing: border-box;
        float: left;
        margin-right: 20px;
        border-right: 1px solid rgb(238, 238, 238);
    }
    .input_box{
        padding: 20px;
        width:660px;
        box-sizing: border-box;
        flex-flow: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div{
        margin-bottom: 10px;
        &>span{
            display: inline-block;
            width: 80px;
        }
        }
        .input_01{
            width:200px;
        }
    }
    .button_box{
        margin-top: 20px;
        text-align: center;
    }
}
</style>