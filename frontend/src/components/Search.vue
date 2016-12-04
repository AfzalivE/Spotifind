<template>
  <div>
    <form class="search-box" v-on:submit.prevent="doSearch()" id="search-box">
      <input type="text" name="search" v-model="search" placeholder="Search"/>
      <button type="submit">+</button>
    </form>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository.js'

export default {

  data () {
    return {

    }
  },
  methods: {
    doSearch () {
      if (this.search.trim()) {
        Tunefind.show(this.search, (show) => {
          console.log(show)
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
