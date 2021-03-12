<template>
  <div class="mm">

    <h1 style="text-align: center">
      案件流转
    </h1>
    <h2>客户信息</h2>
    <el-form label-width="120px" label-suffix=":" label-position="right" inline>
      <el-form-item label="客户姓名">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="卡号">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="单位名称">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="性质">
        <el-select>
          <el-option value="1" label="张三"></el-option>
          <el-option value="2" label="李四"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="流转原因">
        <el-select>
          <el-option value="1" label="张三"></el-option>
          <el-option value="2" label="李四"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <hr/>
    <h2>金额信息</h2>
    <el-form label-width="120px" label-suffix=":" label-position="right" inline>
      <el-form-item label="本金">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="本息费">
        <el-input>
        </el-input>
      </el-form-item>

    </el-form>
    <hr/>
    <h2>时间信息</h2>
    <el-form label-width="120px" label-suffix=":" label-position="right" inline>
      <el-form-item label="发生时间">
        <el-date-picker></el-date-picker>
      </el-form-item>
      <el-form-item label="申报时间">
        <el-input>
        </el-input>
      </el-form-item>
    </el-form>
    <hr/>

    <h2>申报信息</h2>
    <el-form label-width="120px" label-suffix=":" label-position="right" inline>
      <el-form-item label="提交人">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="本息费">
        <el-input>
        </el-input>
      </el-form-item>

      <el-form-item label="卡种">
        <el-select>
          <el-option value="1" label="张三"></el-option>
          <el-option value="2" label="李四"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="推广机构">
        <comp-select-promotion-org></comp-select-promotion-org>
      </el-form-item>
      <el-form-item label="特殊案件编号">
        <el-input>
        </el-input>
      </el-form-item>
      <el-form-item label="转入催收组">
        <el-input>
        </el-input>
      </el-form-item>
      <br/>
      <el-form-item label="风险情况简述">
        <el-input type="textarea" :rows="5" style="width: 400px">
        </el-input>
      </el-form-item>
    </el-form>
    <hr/>

    <h2>核销信息</h2>
    <el-form label-width="120px" label-suffix=":" label-position="right" inline>
      <el-form-item label="特殊认定机构">
        <el-input>
        </el-input>
      </el-form-item>

      <el-form-item label="特殊发生原因">
        <el-select>
          <el-option value="1" label="张三"></el-option>
          <el-option value="2" label="李四"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="特殊发生时间">
        <el-date-picker></el-date-picker>
      </el-form-item>
      <el-form-item label="特殊终止时间">
        <el-date-picker></el-date-picker>
      </el-form-item>

      <el-form-item label="特殊证明时间">
        <el-date-picker></el-date-picker>
      </el-form-item>

      <el-form-item label="特殊有效年限">
        <el-input>
        </el-input>
      </el-form-item>

      <el-form-item label="特殊检附材料">
        <el-input>
        </el-input>
      </el-form-item>

      <el-form-item label="特殊有效文书号">
        <el-input>
        </el-input>
      </el-form-item>
      <br/>
      <el-form-item label="备注">
        <el-input type="textarea" :rows="5" style="width: 400px">
        </el-input>
      </el-form-item>
    </el-form>
    <hr/>
    <h2>核销信息</h2>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
    <hr/>

    <div style="text-align: center">

      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>


import CompSelectPromotionOrg from "@/views/comp/CompSelectPromotionOrg";
export default {
  components: {CompSelectPromotionOrg},
  data() {
    return {
      fileList: []

    }
  },


  mounted() {
  }
}
</script>


<style lang="scss" scoped>

.mm {
  .el-input {
    width: 200px !important;
  }

  .el-select {
    width: 200px !important;
  }
}
</style>
