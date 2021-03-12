<template>
    <el-container>
        <el-main class="post_main">
        <div class="input_box">
            <div>
                <span>岗位代码:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="postInfo.jumpFlag==0?true:false" v-model="postInfo.postCode" clearable></el-input>
            </div>
            <div>
                <span>岗位名称:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="postInfo.jumpFlag==0?true:false" v-model="postInfo.postName" clearable></el-input>
            </div>
            <div>
                <span>父岗位ID:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="postInfo.jumpFlag==0?true:false" v-model="postInfo.parentId" clearable></el-input>
            </div>
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="postInfo.jumpFlag==0?true:false" v-model="postInfo.tenantCode" clearable></el-input>
            </div>
            <div>
                <span>状态:</span>
                <el-switch
                    class='input_01'
                    :disabled="postInfo.jumpFlag==0?true:false"
                    v-model="postInfo.state"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </div>
        </div>
        <div class="button_box" v-if="postInfo.jumpFlag!=0">
            <el-button size="medium" type="success" plain @click="saveBtn">{{postInfo.jumpFlag==1?'添加':'保存'}}</el-button>
            <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
        </div>
    </el-main>
  </el-container>
</template>

<script>
import { duty001,duty003 } from "@/api/postManage.js";
export default {
    name: 'positionManageInfo',
    props:['queryPostInfo'],
    data(){
        return{
            postInfo:null, 
        }
    },
    created() {
        let data = Object.assign({}, JSON.parse(this.queryPostInfo))
        this.postInfo = {
            jumpFlag:data.jumpFlag||0,
            id:data.id||'',
            postCode:data.postCode || '',
            postName:data.postName || '',
            parentId:data.parentId || '',
            state:data.state || false,
            tenantCode:data.tenantCode || '',
        }
    },
    methods:{
        saveBtn(){//保存
            this.postInfo.state = ''
            if(this.postInfo.jumpFlag==1){
                delete this.postInfo.jumpFlag 
                duty001(this.postInfo)  
                .then((res) => {
                    console.log('duty001:',res);
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
            if(this.postInfo.jumpFlag==2){
                delete this.postInfo.jumpFlag 
                duty003(this.postInfo).then((res) => {
                    console.log('duty003:',res);
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
        }
    }
}
</script>

<style lang="scss" scope>
.post_main{
    .input_box{
        width: 600px;
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
        width: 600px;
        margin-top: 20px;
        text-align: center;
    }
}
</style>