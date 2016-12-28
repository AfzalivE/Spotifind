<template>
  <div id="app" class="wrapper">
    <div class="navbar navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">SpotiFind</a>
        <search></search>
      </div>
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
a {
    cursor: pointer;
}
</style>
