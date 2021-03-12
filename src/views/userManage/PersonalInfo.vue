<template>
    <el-container>
        <el-main>
            <div class="input_box">
                <div>
                    <span>登录名：</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="loginName" clearable></el-input>
                </div>
                <div>
                    <span>姓名：</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="userName" clearable></el-input>
                </div>
                <div>
                    <span>密码：</span>
                    <el-input class='input_01' placeholder="请输入密码" v-model="password" show-password clearable></el-input>
                </div>
                <div>
                    <span>确认密码：</span>
                    <el-input class='input_01' placeholder="请再次输入密码" v-model="confirmPassword" show-password clearable></el-input>
                </div>
                <div>
                    <span>邮箱:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="email" clearable></el-input>
                </div>
                <div>
                    <span>手机号:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="mobile" clearable></el-input>
                </div>
                <div>
                    <span>生日:</span>
                    <el-date-picker
                    class='input_01'
                    v-model="birthday"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div>
                    <span>性别：</span>
                    <el-select class='input_01' v-model="sex" placeholder="请选择">
                    <el-option
                        v-for="item in sexOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
                <div>
                    <span>证件类型：</span>
                    <el-select class='input_01' v-model="certType" placeholder="请选择">
                    <el-option
                        v-for="item in certTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
                <div>
                    <span>证件号码:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="certNumber" clearable></el-input>
                </div>
                <div>
                    <span>机构id:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="orgId" clearable></el-input>
                </div>
                <div>
                    <span>机构名称:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="orgName" clearable></el-input>
                </div>
                <div>
                    <span>租户代码:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="tenantCode" clearable></el-input>
                </div>
                <div>
                    <span>租户名称:</span>
                    <el-input class='input_01' placeholder="请输入内容" v-model="tenantName" clearable></el-input>
                </div>
                <div>
                    <span>状态:</span>
                    <el-input class='input_01'  placeholder="请输入内容" v-model="state" clearable></el-input>
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
export default {
    name: 'PersonalInfo',
    data(){
        return{
            activeName: 'first',
            loginName:'', //登录名
            userName:'',  //姓名
            password:'',  //密码
            confirmPassword:'',  //确认密码
            email:'',//邮箱
            mobile:'',//手机号
            birthday:'', //生日
            sex:'1',  //性别选中项
            sexOptions:[  //性别选项
                { 
                    value: '1',
                    label: '男'
                },
                { 
                    value: '2',
                    label: '女'
                }
            ],  
            certType:'',//证件类型选中项
            certTypeOptions:[//证件类型选项
                { 
                    value: '1',
                    label: '身份证'
                },
                { 
                    value: '2',
                    label: '护照'
                },
            ],
            certNumber:'',  //证件号码
            orgId:'',   //机构id
            orgName:'',  //机构名称
            tenantCode:'',  //租户代码
            tenantName:'',  //租户名称
            state:'',  //状态
            createUser:'',  //创建人
        }
    },
    methods:{
        saveBtn(){//保存
            this.$emit('on-save',{
                value:'点击了保存按钮'
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
    .input_box{
        padding: 0 20px;
        box-sizing: border-box;
        // width:80%;
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
</style>