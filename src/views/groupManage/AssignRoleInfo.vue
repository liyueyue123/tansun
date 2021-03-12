<template>
    <el-container>
        <el-main>
            <div>
                <el-table
                ref="multipleTable"
                :data="roleList"
                border
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column type="selection"> </el-table-column>
                <el-table-column label="序号" type="index"> </el-table-column>
                <el-table-column label="角色名"  prop="roleName">
                </el-table-column>
                <el-table-column  label="角色用户组管联状态">
                    <template slot-scope="scope">
                    <el-switch
                        v-model="scope.row.state"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                    >
                    </el-switch>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="操作" width="220" >
                    <template slot-scope="scope">
                    <el-button type="success" size="small">查看</el-button>
                    <el-button type="primary" size="small">修改</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column> -->
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { role005 } from "@/api/rolemanage.js";
export default{
    name: 'assignRoleInfo',
    // props:['queryGroupInfo2'],
    data(){
        return{
            tenantCode:'',
            groupId:'',
            roleList:{
                roleName:'22',
                state:'',
            },
        }
    },
    created() {
        // let data = Object.assign({}, JSON.parse(this.queryGroupInfo2))
        // console.log('data:',data)
        // this.tenantCode = data.tenantCode;
        // this.groupId = data.id;
        // this.getRoleList();
    },
    methods:{
        getRoleList(){
            this.tenantCode = 'A'
            this.groupId = '920db90a166e40a992712fbbb76f3f2e'
            role005({tenantCode:this.tenantCode,groupId:this.groupId}).then((res) => {
                console.log('role005:',res);
            }).catch((err) => {
                console.log(err)
            });
        },
        handleSelectionChange(){

        },
    }
}
</script>

<style lang="scss" scoped>
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
</style>