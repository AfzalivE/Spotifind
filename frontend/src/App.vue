<template>
  <div id="app">
    <img src="./assets/logo.png">
    <search></search>
    <show></show>
  </div>
</template>

<script>
import Show from './components/Show'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Show,
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
