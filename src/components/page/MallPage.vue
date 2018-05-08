<template lang="html">
  <div class="mallPage">
    <el-row class="page">
      <el-col :span="7" class="mallLeft">
        <div class="orderNav">
          <el-tabs type="card" value="first">
            <el-tab-pane label="点餐" name="first">
              <div class="orderList">
                <el-table :data="orderListTable"  class="table" max-height="480">
                  <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
                  <el-table-column prop="count" label="数量" align="center"></el-table-column>
                  <el-table-column prop="price" label="单价" align="center"></el-table-column>
                  <el-table-column label="操作" fixed="right" align="center">
                    <template slot-scope="scope">
                      <el-button type="text" size="small" @click="addSingle(scope.row)">增加</el-button>
                      <el-button type="text" size="small" @click="removeSingle(scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="showOrderSum">
                  <small>数量总计:</small>{{sumCount}}&nbsp;&nbsp;&nbsp;&nbsp;<small>金额总计:</small>{{sumMoney}}
                </div>
                <div class="action">
                  <el-button type="warning" @click="guadan">挂单</el-button>
                  <el-button type="danger" @click="removeAll">删除</el-button>
                  <el-button type="success" @click="checkAll">结账</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
            <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="17" class="mallRight">
        <div class="goodPlace">
          <div class="title">
            点餐区
          </div>
          <div class="popularGoods">
            <ul >
              <li v-for="(item,index) in popularGoods" @click="addGoodToList(item)">
                <span>{{item.goodsName}}</span>
                <span class="price">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
          <div class="goodMenu">
            <el-tabs type="card" value="first">
              <el-tab-pane label="汉堡" name="first">
                <ul class="type0Goods">
                  <li v-for="(item,index) in type0Goods" @click="addGoodToList(item)">
                    <img :src="item.goodsImg" alt="">
                    <span>{{item.goodsName}}</span><br>
                    <span class="price">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食" name="second">
                <ul class="type0Goods">
                  <li v-for="(item,index) in type1Goods" @click="addGoodToList(item)">
                    <img :src="item.goodsImg" alt="">
                    <span>{{item.goodsName}}</span><br>
                    <span class="price">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料" name="third">
                <ul class="type0Goods">
                  <li v-for="(item,index) in type2Goods" @click="addGoodToList(item)">
                    <img :src="item.goodsImg" alt="">
                    <span>{{item.goodsName}}</span><br>
                    <span class="price">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐" name="fourth">
                <ul class="type0Goods">
                  <li v-for="(item,index) in type3Goods" @click="addGoodToList(item)">
                    <img :src="item.goodsImg" alt="">
                    <span>{{item.goodsName}}</span><br>
                    <span class="price">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      orderListTable:[],
      popularGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      sumCount: 0,
      sumMoney: 0,
    }
  },
  created(){
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
         .then((res)=>{
           this.type0Goods = res.data[0];
           this.type1Goods = res.data[1];
           this.type2Goods = res.data[2];
           this.type3Goods = res.data[3];
         })
         .catch((err)=>console.log("网络错误"));
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then((res)=>{
          this.popularGoods = res.data;
        })
        .catch((err)=>console.log("网络错误"));
  },
  methods:{
    sumAll(){
      this.sumMoney = 0;
      this.sumCount = 0;
      this.orderListTable.forEach(item=>{
        this.sumCount += item.count;
        this.sumMoney += item.count*item.price;
      })
    },
    addGoodToList(good){
      let isSelect = false;
      this.orderListTable.forEach(item=>{
        if(item.goodsId === good.goodsId){
          isSelect = true;
        }
      })
      if(isSelect){
        let arr = this.orderListTable.filter(item=>item.goodsId===good.goodsId);
        //返回的是一个数组对象 arr[0]代表选中的对象
        arr[0].count += 1;
      }else{
        let newArr = {goodsId:good.goodsId,goodsName:good.goodsName,price:good.price,count:1};
        this.orderListTable.push(newArr);
      }
      // 更新数量和金额
      this.sumAll();
    },
    addSingle(good){
      let arr = this.orderListTable.filter(item=>item.goodsId===good.goodsId);
      //返回的是一个数组对象 arr[0]代表选中的对象
      arr[0].count += 1;
      this.sumAll()
    },
    removeSingle(good){
      this.orderListTable = this.orderListTable.filter(item=>item.goodsId!==good.goodsId);
      //返回一个新数组 代替原来的orderListTable
      this.sumAll()
    },
    removeAll(){
      this.orderListTable = [];
      this.$message({
        type:'warning',
        message:'订单删除成功',
      })
      this.sumMoney = 0;
      this.sumCount = 0;
    },
    checkAll(){
      if(this.orderListTable.length !== 0){
        this.orderListTable = [];
        this.$message({
          type:'success',
          message:'订单提交成功,共计'+this.sumMoney+'元',
        });
        this.sumMoney = 0;
        this.sumCount = 0;
      }else{
        this.$message({
          type:'warning',
          message:'请先选择商品,再提交订单',
        });
      }
    },
    guadan(){
      this.orderListTable = [];
      this.$message({
        type:'primary',
        message:'功能开发中',
      })
    }

  }
}
</script>

<style lang="css" scoped>
  /* 布局样式 */
  .mallPage{
    width:95%;
    height:100%;
    float:left;
    font-size: 16px;
  }
  .page{
    width:100%;
    height:100%;
  }
  .mallLeft{
    height:100%;
    overflow: hidden;
    background: #fff;
    border:1px solid #ebeef5;
  }
  .mallRight{
    overflow: hidden;
    height:100%;
  }

  /* 点餐区域 */
  .goodPlace{
    width:100%;
    box-sizing: border-box;
    float: left;
    border-left: 1px solid #ebeef5;
  }
  .goodPlace .title{
    height:40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    font-weight: bolder;
    color:#909399;
    border-bottom:1px solid #ebeef5;
  }
  .popularGoods{
    padding:10px;
    float:left;
    width:100%;
    border-bottom:1px solid #ebeef5;
  }
  .popularGoods ul{
    padding:0;
    margin:0;
    float:left;
  }
  .popularGoods ul li{
    list-style: none;
    background: #fff;
    border:1px solid #ebeef5;
    border-radius: 5px;
    float:left;
    padding:5px;
    margin:10px;
    cursor:pointer;
  }
 .price{
    color:#3a8ee6;
  }
  .goodMenu{
    clear:both;
    width:100%;
    max-height:200px;
  }
  .type0Goods{
    padding:0;
    margin:0;
    width:100%;
    overflow: hidden;
  }
  .type0Goods li{
    width:20%;
    float: left;
    margin:10px;
    cursor:pointer;
    border:1px solid #ebeef5;
    border-radius: 10px;
    padding:3px;
    list-style: none;
  }
  .type0Goods li img{
    width:40%;
    float:left;
  }
  .type0Goods li span{
    display: inline-block;
    margin:10px 0;
  }
  .orderNav{
    width:100%;
    height:100%;
  }

  /* 左侧tab */
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
