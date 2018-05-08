<!-- 无用组件 -->

<template lang="html">
  <div class="goodPlace">
    <div class="title">
      点餐区
    </div>
    <div class="popularGoods">
      <ul >
        <li v-for="(item,index) in popularGoods">
          <span>{{item.goodsName}}</span>
          <span class="price">￥{{item.price}}元</span>
        </li>
      </ul>
    </div>
    <div class="goodMenu">
      <el-tabs type="card" value="first">
        <el-tab-pane label="汉堡" name="first">
          <ul class="type0Goods">
            <li v-for="(item,index) in type0Goods">
              <img :src="item.goodsImg" alt="">
              <span>{{item.goodsName}}</span><br>
              <span class="price">￥{{item.price}}元</span>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="小食" name="second">
          <ul class="type0Goods">
            <li v-for="(item,index) in type1Goods">
              <img :src="item.goodsImg" alt="">
              <span>{{item.goodsName}}</span><br>
              <span class="price">￥{{item.price}}元</span>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="饮料" name="third">
          <ul class="type0Goods">
            <li v-for="(item,index) in type2Goods">
              <img :src="item.goodsImg" alt="">
              <span>{{item.goodsName}}</span><br>
              <span class="price">￥{{item.price}}元</span>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="套餐" name="fourth">
          <ul class="type0Goods">
            <li v-for="(item,index) in type3Goods">
              <img :src="item.goodsImg" alt="">
              <span>{{item.goodsName}}</span><br>
              <span class="price">￥{{item.price}}元</span>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      popularGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
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
  }
}
</script>

<style lang="css" scoped>
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
    max-height:300px;
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
</style>
