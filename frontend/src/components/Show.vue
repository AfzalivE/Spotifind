<template>
  <div>
    <h1>
      {{show.show_name}}
    </h1>
    <ul>
      <li v-for="season in show.seasons">
        <a class="seasonName" @click="showSeasons(season)">
          Season {{season.number}}
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'

export default {

  name: 'Show',
  data () {
    return {
      show: {}
    }
  },
  created () {
    this.getShow()
  },
  watch: {
    '$route': 'getShow'
  },
  methods: {
    getShow () {
      var showId = this.$route.params.show_id
      if (showId === undefined) {
        return
      }
      showId = showId.trim()
      // console.log(showId)
      if (this.show && showId === this.show.show_name) {
        return // don't reload the the same show
      }
      Tunefind.show(showId, (show) => {
        console.log(show)
        this.show = show
        Tunefind.$emit('loadedShow')
      })
    },
    showSeasons (season) {
      this.$router.push({
        path: '/show/' + this.show.show_name.toLowerCase() + '/' + 'season-' + season.number
      })
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    list-style: none;
  }
</style>
