<template>
  <div id="app" class="wrapper">
    <div class="header">
      <search></search>
    </div>
    <div class="main main-raised">
      <div id="container" class="container">
        <router-view></router-view>
      </div>
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

<style lang="css">
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
