<template>
  <div>
    <form class="search-box" v-on:submit.prevent="" id="search-box">
      <input type="text" name="search" v-model="search" placeholder="Search"/>
      <button type="submit" @click="doSearch()">+</button>
    </form>
  </div>
</template>

<script>
// import Tunefind from '../data/tunefind/TunefindRepository.js'

export default {

  data () {
    return {

    }
  },
  methods: {
    doSearch () {
      console.log('test')
      this.$router.push({
        path: '/show/' + this.search
      })
    }
  }
}
</script>

<style lang="css" scoped>
a.router-link, a.router-link-active {
  text-decoration: none;
}
</style>
