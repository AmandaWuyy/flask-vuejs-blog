<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <!-- router-view 显示的是当前路由地址所对应的内容 -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'App',
  components: {
      navbar: Navbar
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
  margin-top: 60px;
}
</style>
