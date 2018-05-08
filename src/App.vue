<template>
  <div id="app">
    <leftNav></leftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import leftNav from './components/base/leftNav.vue'

export default {
  name: 'App',
  components:{
    leftNav:leftNav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
