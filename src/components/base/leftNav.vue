<template lang="html">
  <div class="leftNav">
    <ul>
      <li>
        <i class="iconfont icon-msnui-shop"></i>
        <span>店铺</span>
      </li>
      <li>
        <i class="iconfont icon-iconset0315"></i>
        <span>结账</span>
      </li>
      <li class="active">
        <i class="iconfont icon-hanbao"></i>
        <span>点餐</span>
      </li>
      <li>
        <i class="iconfont icon-huiyuan"></i>
        <span>会员</span>
      </li>
      <li>
        <i class="iconfont icon-tongji"></i>
        <span>统计</span>
      </li>
      <li>
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "this is left nav "
    }
  }
}
</script>

<style lang="css" scoped>
  .active{
    background:#fff;
  }
  .leftNav{
    width:5%;
    height:100%;
    float:left;
    background:#CCFFFF;
    font-size: 20px;
  }
  .leftNav ul{
    width:100%;
    padding:0;
    margin:0;
    overflow: hidden;
  }
  .leftNav ul li{
    list-style: none;
    box-sizing: border-box;
    width:100%;
    padding:15px;
    float:left;
  }
  .leftNav ul li:hover{
    background:#fff;
    cursor:pointer;
  }
  .leftNav ul li i{
    font-size: 25px;
  }
  .leftNav ul li span{
    display: block;
    font-size: 16px;
  }
</style>
