<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error loading season
    </div>

    <div v-if="season" class="episode-list">
      <ul class="list-group">
        <li v-for="episode in season.episodes" class="list-group-item click" @click="showEpisodes(episode)">
          <div>Episode {{episode.number}}</div>
          <div>
            {{episode.song_count}} songs
          </div>
        </li>
      </ul>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'
import Data from '../data/Data'

export default {
  name: 'Season',

  data () {
    return {
      error: false,
      loading: false,
      season: {},
      seasonId: ''
    }
  },
  created () {
    this.getSeason()
    Tunefind.$on('loadedShow', () => {
      this.getSeason()
    })
  },
  watch: {
    '$route': 'getSeason'
  },
  methods: {
    getSeason () {
      if (Data.show === undefined) {
        return
      }
      var showId = Data.show.show_name
      if (showId === undefined) {
        return
      }
      showId = showId.trim()
      var seasonId = this.$route.params.season_id
      if (seasonId === undefined) {
        return
      }

      seasonId = seasonId.trim()

      if (Object.keys(this.season).length !== 0 && seasonId === this.seasonId) {
        // console.log('not requesting season again')
        return // don't reload the the same season
      }

      this.seasonId = seasonId
      // console.log(showId + ' ' + seasonId)

      this.loading = true
      this.show = null
      Tunefind.season(showId, seasonId, (season) => {
        console.log(season)
        this.loading = false
        this.error = false
        if (season.show_name === undefined) {
          this.error = true
          return
        }
        this.season = season
        Tunefind.$emit('loadedSeason')
      })
    },
    showEpisodes (episode) {
      this.$router.push({
        path: '/show/' + this.season.show_name.toLowerCase() + '/' + 'season-' + this.seasonId + '/' + episode.number
      })
    }
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
}
.episode-list {
  display: flex;
}
</style>
