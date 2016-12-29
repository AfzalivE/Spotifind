<template>
  <div>
    <div class="header header-filter" style='background-image: url("http://localhost:8080/static/img/arrow.jpg")'>
      <div class="container">
        <h1>
          {{show.show_name}}
        </h1>
      </div>
    </div>
    <div class="main">
      <div class="season-list">
        <ul class="list-group">
          <li v-for="season in show.seasons" class="list-group-item">
            <a class="seasonName" @click="showSeasons(season)">
              Season {{season.number}}
            </a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
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
.header {
  background-size: cover;
  min-height: 300px;
  background-position: top center;
}
h1 {
  padding-top: 60px;
  color: #fff;
  text-align: left;
}
.main {
  display: flex;
}
</style>
