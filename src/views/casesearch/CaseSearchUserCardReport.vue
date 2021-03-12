<template>
  <el-card :body-style="{padding:'3px'}">
    <div style="height:30px;display: flex;justify-content: space-between;align-items: center;">
      <div class="p1">
        <div>语音外呼次数：X</div>
        <div>投诉次数：X</div>
        <div>PTP次数：X</div>
        <div>BP次数：X</div>
        <div>来电协商次数：X</div>
      </div>
      <div class="p2">
        <div @click="onSelect(3)" :class="[selected==3?'selected':'unselected']">3</div>
        <div @click="onSelect(6)" :class="[selected==6?'selected':'unselected']">6</div>
        <div @click="onSelect(12)" :class="[selected==12?'selected':'unselected']">12</div>
      </div>
    </div>

    <h3>催记报告</h3>
    <h3>催记报告</h3>
    <h3>催记报告</h3>

  </el-card>
</template>

<script>


export default {
  data() {
    return {
      selected: 3

    }
  },


  methods: {
    onSelect(n) {
      this.selected = n;
    }
  },

  mounted() {
  }
}
</script>

<style lang="scss" scope>
.p1 {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  flex-grow: 1;

  > div {

  }
}

.selected {
  background-color: whitesmoke;
  color: black;
  cursor: auto;
}

.unselected {

  cursor: pointer;
  color: white;
  background-color: #1c6ca1;
}

.p2 {
  width: 100px;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-around;

  > div {
    border-radius: 50%;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px !important;
    height: 22px !important;
  }
}
</style>
