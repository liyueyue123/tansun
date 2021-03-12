<template>
  <el-card :body-style="{position:'relative'}">
    <el-button icon="el-icon-refresh" style="position: absolute;right: 5px;top:5px;" @click="show1=!show1"></el-button>
    <div class="cc" v-if="show1">
      <div v-for="(k,index) in caseInfoKeys1" :key="index">
        {{ k }}:{{ caseInfo[k] }}
      </div>
    </div>

    <div class="cc" v-if="!show1">
      <div v-for="(k,index) in caseInfoKeys2" :key="index">
        {{ k }}:{{ caseInfo[k] }}
      </div>
    </div>

  </el-card>
</template>

<script>


export default {
  data() {
    return {
      show1: true

    }
  },
  computed: {
    caseInfo() {
      console.log(this.$store);
      return this.$store.state.cases.caseInfo
    },

    caseInfoKeys() {
      console.log(this.$store);

      return Object.keys(this.$store.state.cases.caseInfo)
    },

    caseInfoKeys1() {
      return this.caseInfoKeys.slice(0, this.caseInfoKeys.length / 2)
    },

    caseInfoKeys2() {
      return this.caseInfoKeys.slice(this.caseInfoKeys.length / 2)
    }
  },


  mounted() {
  }
}
</script>

<style lang="scss" scope>
.cc {
  display: flex;
  flex-wrap: wrap;

  > div {
    line-height: 1.2rem;
    width: 40%;
  }
}
</style>
