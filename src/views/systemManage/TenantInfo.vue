<template>
    <el-container>
        <el-main class="tenant_box">
        <div class="input_box">
            <div>
                <span>租户代码:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="tenantCode" clearable></el-input>
            </div>
            <div>
                <span>租户名称:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="tenantName" clearable></el-input>
            </div>
            <div>
                <span>联系人:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="linkman" clearable></el-input>
            </div>
            <div>
                <span>联系电话:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="contactNumber" clearable></el-input>
            </div>
            <div>
                <span>联系地址:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="address" clearable></el-input>
            </div>
            <div>
                <span>租户状态:</span>
                <el-input class='input_01'  placeholder="请输入内容" v-model="tenantState" clearable></el-input>
            </div>
            <div>
                <span>创建人:</span>
                <el-input class='input_01' placeholder="请输入内容" v-model="createUser" clearable></el-input>
            </div>
        </div>
        <div class="button_box">
            <el-button size="medium" type="success" plain @click="saveBtn">保存</el-button>
            <el-button size="medium" type="info" plain @click="cancelBtn">取消</el-button>
        </div>
    </el-main>
  </el-container>
</template>

<script>
import { tenant001 } from "@/api/systemmanage.js";
export default {
    name: 'TenantInfo',
    data(){
        return{
            tenantCode:'',  //租户代码
            tenantName:'',  //租户名称
            linkman:'', //联系人
            contactNumber:'',  //联系电话
            address:'',  //联系地址
            tenantState:'',  //租户状态
            createUser:'',  //创建人
        }
    },
    mounted() {
        
    },
    methods:{
        addTenant(){
            let params ={
                tenantCode:'111',  //租户代码
                tenantName:'天阳',  //租户名称
                linkman:'张三', //联系人
                contactNumber:'15827681234',  //联系电话
                address:'丰台科技园',  //联系地址
                tenantState:1,  //租户状态
                createUser:'小A',  //创建人
            }
            tenant001(params)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {});
        },
        saveBtn(){//保存
            this.addTenant();
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
.tenant_box{
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