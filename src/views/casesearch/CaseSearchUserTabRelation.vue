<template>

  <div class="mm">

    <el-card class="center">
      <el-form ref="form" label-position="top" label-suffix=":">
        <el-form-item label="姓名">
          <el-input v-model="clientData.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="clientData.id"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="border" style="top: 5%;left: 10%">
      <el-form ref="form" label-position="top" label-suffix=":">
        <el-form-item label="姓名">
          <el-input v-model="clientData.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="clientData.id"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="border" style="bottom: 10%;left: 10%">
      <el-form ref="form" label-position="top" label-suffix=":">
        <el-form-item label="姓名">
          <el-input v-model="clientData.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="clientData.id"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="border" style="top: 5%;right: 10%">
      <el-form ref="form" label-position="top" label-suffix=":">
        <el-form-item label="姓名">
          <el-input v-model="clientData.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="clientData.id"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="border" style="bottom: 10%;right: 10%">
      <el-form ref="form" label-position="top" label-suffix=":">
        <el-form-item label="姓名">
          <el-input v-model="clientData.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input v-model="clientData.id"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>


export default {
  data() {
    return {
      clientData: {
        name: '',
        id: ''
      },
      phones: [
        {source: '登记', contact: '13122223333', relation: '夫妻'},
        {source: '登记', contact: '13122223333', relation: '夫妻'}
      ],
      address: [
        {source: '登记', contact: '13122223333', relation: '夫妻'},
        {source: '登记', contact: '13122223333', relation: '夫妻'}
      ],
      others: [
        {source: '登记', contact: '13122223333', relation: '夫妻'},
        {source: '登记', contact: '13122223333', relation: '夫妻'}
      ],
      contact: {
        name: '',
        id: ''
      },
      relation: {
        name: '',
        id: ''
      }
    }
  },


  mounted() {
  }
}
</script>


<style lang="scss" scoped>
.mm {
  position: relative;
  height: 600px;

  .el-card {
    position: absolute;
  }

  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .border {

  }
}

</style>
