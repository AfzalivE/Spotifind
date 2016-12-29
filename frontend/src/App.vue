<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <!--
    <show></show> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
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
a, .click {
    cursor: pointer;
    color: #9c27b0;
}
.click:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.navbar {
  background-color: rgba(0, 0, 0, 0.5);
  /* background-size: cover; */
  /* background-position: center center; */
  /* background-image: url("http://localhost:8080/static/img/arrow.jpg"); */
}
.navbar-transparent {
  /* background-image: none; */
}
</style>
