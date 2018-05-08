<!-- 无用组件 -->

<template lang="html">
  <div class="orderNav">
    <el-tabs type="card" value="first">
      <el-tab-pane label="点餐" name="first">
        <orderList></orderList>
      </el-tab-pane>
      <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
      <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import orderList from "./orderList.vue";
export default {
  components:{
    orderList
  },
}
</script>

<style lang="css" scoped>
  .orderNav{
    width:100%;
    height:100%;

  }
</style>
