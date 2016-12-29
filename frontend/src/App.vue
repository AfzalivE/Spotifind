<template>
  <div id="app">
    <div class="navbar navbar-fixed-top navbar-transparent">
      <div class="container">
        <a class="navbar-brand" href="#">SpotiFind</a>
        <search></search>
      </div>
    </div>
    <router-view></router-view>
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
}
a {
    cursor: pointer;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
