<!-- 无用组件 -->

<template lang="html">
  <div class="orderList">
    <el-table :data="orderListTable"  class="table" max-height="510">
      <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
      <el-table-column prop="count" label="数量" align="center"></el-table-column>
      <el-table-column prop="sum" label="金额" align="center"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small">增加</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="showOrderSum">
      <small>数量总计:</small>{{0}}&nbsp;&nbsp;&nbsp;&nbsp;<small>金额总计:</small>{{0}}
    </div>
    <div class="action">
      <el-button type="warning">挂单</el-button>
      <el-button type="danger">删除</el-button>
      <el-button type="success">结账</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderListTable:[],
    }
  }
}
</script>

<style lang="css" scoped>
  .orderList{
    width:100%;
    height:100%;
  }
  .orderList .table{
    width:100%;
  }
  .orderList .showOrderSum{
    box-sizing: border-box;
    width:100%;
    padding:10px 0;
    border-bottom: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
  }
  .orderList .action{
    padding:10px 0;
  }

</style>
