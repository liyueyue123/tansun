<template>
    <el-container>
        <el-main class="menu_box">
        <div class="input_box">
            <div>
                <span>菜单名称：</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="menuInfo.permName" clearable></el-input>
            </div>
            <div>
                <span>菜单编码：</span>
                <el-input class='input_01' :disabled="jumpFlag==0||jumpFlag==2?true:false" placeholder="请输入内容" v-model="menuInfo.permNum" clearable></el-input>
            </div>
            <div>
                <span>资源类别:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="menuInfo.permType" clearable></el-input>
            </div>
            <div>
                <span>上级id:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="menuInfo.parentId" clearable></el-input>
            </div>
            <div>
                <span>URL:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="menuInfo.url" clearable></el-input>
            </div>
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' :disabled="jumpFlag==0?true:false" placeholder="请输入内容" v-model="menuInfo.tenantCode" clearable></el-input>
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
    name: 'menuManageInfo',
    props:{
        jumpFlag:{
            type:Number,
        },
        menuInfo:{ //菜单信息
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
                params:this.menuInfo,
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
    .menu_box{
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