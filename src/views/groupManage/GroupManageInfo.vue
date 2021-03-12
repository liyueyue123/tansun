<template>
    <el-container>
        <el-main class="group_main">
            <div class="input_box">
                <div>
                    <span>组代码:</span>
                    <el-input class='input_01' :disabled="groupInfo.jumpFlag==0?true:false" placeholder="请输入内容" v-model="groupInfo.code" clearable></el-input>
                </div>
                <div>
                    <span>组名称:</span>
                    <el-input class='input_01' :disabled="groupInfo.jumpFlag==0?true:false"  placeholder="请输入内容" v-model="groupInfo.name" clearable></el-input>
                </div>
                <div>
                    <span>租户代码:</span>
                    <el-input class='input_01' :disabled="groupInfo.jumpFlag==0?true:false"  placeholder="请输入内容" v-model="groupInfo.tenantCode" clearable></el-input>
                </div>
                <div>
                    <span>状态:</span>
                    <el-switch
                        class="input_01"
                        :disabled="groupInfo.jumpFlag==0?true:false"
                        v-model="groupInfo.state"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                    </el-switch>
                </div>
            </div>
            <div class="button_box" v-if="groupInfo.jumpFlag!=0">
                <el-button size="medium" type="success" plain @click="saveBtn">{{groupInfo.jumpFlag==1?'添加':'保存'}}</el-button>
                <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { egroup001,egroup003 } from "@/api/groupManage.js";
export default {
    name: 'groupManageInfo',
    props:['queryGroupInfo'],
    data(){
        return{
            groupInfo:null,
        }
    },
    created() {
        let data = Object.assign({}, JSON.parse(this.queryGroupInfo))
        this.groupInfo = {
            jumpFlag:data.jumpFlag||0,
            id:data.id||'',
            code:data.code || '',
            name:data.name || '',
            state:data.state || false,
            tenantCode:data.tenantCode || '',
        }
    },
    methods:{
        saveBtn(){//保存
            this.groupInfo.state = ''
            if(this.groupInfo.jumpFlag==1){
                delete this.groupInfo.jumpFlag 
                egroup001(this.groupInfo)  
                .then((res) => {
                    console.log('egroup001:',res);
                    this.$message({
                        type: 'success',
                        message: '添加成功',
                        duration: 5 * 1000
                    });
                    sessionStorage.setItem('activeFlag','1')
                    setTimeout(()=>{
                        this.$store.dispatch("tagsView/delView", this.$route);
                        this.$router.go(-1);
                    },300)
                })
                .catch((err) => {
                    console.log(err)
                });
            }
            if(this.groupInfo.jumpFlag==2){
                delete this.groupInfo.jumpFlag 
                egroup003(this.groupInfo).then((res) => {
                    console.log('egroup004:',res);
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

<style lang="scss">
.group_main{
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