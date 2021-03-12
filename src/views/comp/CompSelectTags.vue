<template>

  <div>

    <table>
      <tr v-for="(row) in rowCnt">
        <template v-for="(cc) in colCnt" v-if="((row-1)*colCnt+(cc-1))<enabledCnt">

          <td>{{ enabledItems[((row - 1) * colCnt + (cc - 1))].value }}</td>
          <td>
            <el-button @click="onDelItem(enabledItems[((row - 1) * colCnt + (cc - 1))].value)">删除
            </el-button>
          </td>
        </template>
      </tr>
    </table>
    <br/>
    <div style="text-align: center;">
      <el-button style="margin-right: 50px" @click="onAdd">新增</el-button>
      <el-button @click="onSave">保存</el-button>
    </div>

    <el-dialog :visible.sync="onAddVisible">
      <div style="display: flex;justify-content: center">
        <h4 v-if="disabledItems.length==0">没有可增加的项目</h4>
        <el-checkbox-group v-model="addedItems">
          <el-checkbox v-for="(cc) in disabledItems" :label="cc.value"></el-checkbox>
        </el-checkbox-group>

      </div>
      <div style="text-align: center;" slot="footer">
        <el-button style="margin-right: 50px" @click="onAddVisible=false">取消</el-button>
        <el-button @click="onAdded">保存</el-button>
      </div>
    </el-dialog>

  </div>


</template>
<script>


export default {
  data() {
    return {
      onAddVisible: false,
      addedItems: [],

      cDatas: this.datas

    }
  },
  props: {
    datas: {
      type: Array
    },
    colCnt: {
      default: 3
    }
  },

  watch: {
    datas() {
      this.cDatas = this.datas;

    }
  },
  computed: {

    enabledKeys() {
      return this.cDatas.filter(d => {
        return d.enabled
      }).length
    },

    enabledItems() {
      return this.cDatas.filter(d => {
        return d.enabled
      })
    },

    disabledItems() {
      return this.cDatas.filter(d => {
        return !d.enabled
      })
    },

    enabledCnt() {
      return this.enabledItems.length
    },

    rowCnt() {
      return Math.ceil(this.enabledCnt / this.colCnt);
    }

  },

  methods: {

    onAdd() {
      this.onAddVisible = true;
      this.addedItems = [];
    },

    onAdded() {

      this.addedItems.forEach(ii => {
        let dd = this.cDatas.find(cc => {
          return cc.value == ii
        })
        if (dd) {
          dd.enabled = true;
        }
      })
      this.onAddVisible = false;

    },

    onDelItem(v) {
      let dd = this.cDatas.find(cc => {
        return cc.value == v
      })
      if (dd) {
        dd.enabled = false;
      }
    },

    onSave() {
      this.$emit('save', this.enabledItems)
    }
  },
  mounted() {

  }


}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid darkgrey;
  border-collapse: collapse;

  td {
    border: 1px solid darkgrey;
    line-height: 2rem;

    &:nth-child(2n) {
      text-align: center;
    }

    &:nth-child(2n+1) {
      padding-left: 5px;
    }
  }


}
</style>
