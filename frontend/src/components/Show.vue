<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error loading show
    </div>

    <div v-if="show">
      <div class="header header-filter" :style="{'background-image': 'url('+ show.show_image + ')' }">
        <div class="container">
          <h1>
            {{show.show_name}}
          </h1>
        </div>
      </div>
      <div class="main">
        <div class="season-list">
          <ul class="list-group">
            <li v-for="season in show.seasons" class="list-group-item click" @click="showSeasons(season)">
              <div>
                Season {{season.number}}
              </div>
              <div>
                {{season.song_count}} songs in {{season.episode_count}} episodes
              </div>
            </li>
          </ul>
        </div>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
        <vue-progress-bar></vue-progress-bar>
      </div>
    </div>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'

export default {

  name: 'Show',
  data () {
    return {
      error: false,
      loading: false,
      show: null
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
        console.log('undefined showId')
        return
      }
      showId = showId.trim().toLowerCase()
      if (this.show !== null && showId === this.show.show_name.toLowerCase()) {
        // console.log('not requesting the same show again')
        return // don't reload the the same show
      }

      this.loading = true
      this.error = false
      this.show = null
      Tunefind.show(showId, (show) => {
        console.log(show)
        this.loading = false
        this.error = false
        if (show.show_name === undefined) {
          this.error = true
          return
        }
        this.show = show
        this.show.show_image = this.show.show_image.split('&w')[0] + '&w=1980&h=640'

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
