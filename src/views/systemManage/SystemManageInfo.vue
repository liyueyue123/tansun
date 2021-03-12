<template>
    <el-container>
        <el-main class="system_box">
        <div class="input_box">
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' :disabled="jumpFlag==0||jumpFlag==2?true:false" placeholder="请输入内容" v-model="tenantInfo.tenantCode" clearable></el-input>
            </div>
            <div>
                <span>租户名称:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="tenantInfo.tenantName" clearable></el-input>
            </div>
            <div>
                <span>联系人:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="tenantInfo.linkman" clearable></el-input>
            </div>
            <div>
                <span>联系电话:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="tenantInfo.contactNumber" clearable></el-input>
            </div>
            <div>
                <span>联系地址:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="tenantInfo.address" clearable></el-input>
            </div>
            <div>
                <span>租户状态:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false"  placeholder="请输入内容" v-model="tenantInfo.tenantState" clearable></el-input>
            </div>
        </div>
        <div class="button_box" v-if=" jumpFlag!=0 ">
            <el-button size="medium" type="success" plain @click="saveBtn">{{jumpFlag==1?'添加':'保存'}}</el-button>
            <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
        </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
    name: 'systemManageInfo',
    props:{
        jumpFlag:{
            type:Number,
        },
        tenantInfo:{ //租户信息
            type:Object,
            default:{},
        }
    },
    data(){
        return{
    
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods:{
        saveBtn(){//保存
            this.$emit('on-save',{
                value:'点击了保存按钮',
                jumpFlag:this.jumpFlag,  //操作标识
                params:this.tenantInfo,
            })
        },
        cancelBtn(){//取消
            this.$emit('on-cancel',{
                value:'点击了取消按钮'
            })
        }
    }
}
</script>

<style lang="scss" scope>
    .system_box{
        padding: 0;
    }
    .input_box{
        box-sizing: border-box;
        flex-flow: wrap;
        display: flex;
        justify-content:center;
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
</style>