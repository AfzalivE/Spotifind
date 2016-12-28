<template>
  <div>
    <ul>
      <li v-for="episode in season.episodes">
        <a @click="showEpisodes(episode)">Episode {{episode.number}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'
import Data from '../data/Data'

export default {
  name: 'Season',

  data () {
    return {
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
      this.seasonId = seasonId
      // console.log(showId + ' ' + seasonId)

      if (Object.keys(this.season).length !== 0 && seasonId === this.seasonId) {
        console.log('not loading season again')
        return // don't reload the the same season
      }

      Tunefind.season(showId, seasonId, (season) => {
        console.log(season)
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
</style>
