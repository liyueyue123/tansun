<template>
    <el-container>
        <el-main  class="role_box">
        <div class="input_box">
            <div>
                <span>角色编码：</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="jumpFlag==0||jumpFlag==2?true:false" v-model="roleInfo.roleCode" clearable></el-input>
            </div>
            <div>
                <span>角色名称：</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="jumpFlag==0?true:false" v-model="roleInfo.roleName" clearable></el-input>
            </div>
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' placeholder="请输入内容" :disabled="jumpFlag==0?true:false" v-model="roleInfo.tenantCode" clearable></el-input>
            </div>
            <div>
                <span>状态:</span>
                <el-input class='input_01'  placeholder="请输入内容" :disabled="jumpFlag==0?true:false" v-model="roleInfo.state" clearable></el-input>
            </div>
        </div>
        <div class="button_box"  v-if=" jumpFlag!=0 ">
            <el-button size="medium" type="success" plain @click="saveBtn">{{jumpFlag==1?'添加':'保存'}}</el-button>
            <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
        </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
    name: 'roleManageInfo',
    props:{
        jumpFlag:{
            type:Number,
        },
        roleInfo:{ //角色信息
            type:Object,
            default:{},
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        saveBtn(){//保存
            this.$emit('on-save',{
                value:'点击了保存按钮',
                jumpFlag:this.jumpFlag,  //操作标识
                params:this.roleInfo,
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
    .role_box{
        padding: 0;
    }
    .input_box{
        box-sizing: border-box;
        flex-flow: wrap;
        display: flex;
        justify-content: center;
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