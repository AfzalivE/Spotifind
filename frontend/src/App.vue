<template>
  <div id="app">
    <img src="./assets/logo.png">
    <search></search>
    <div id='container'>
      <router-view></router-view>
    </div>
    <!--
    <show></show> -->
  </div>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Search
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
