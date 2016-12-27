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
    // TODO PASS A CUSTOM SHOW OBJECT CONTAINING INFO FROM PARENTS
    getSeason () {
      var showId = this.$parent.show.show_name
      if (showId === undefined) {
        return
      }
      showId = showId.trim()
      console.log('parent' + this.$parent.show.show_name)
      var seasonId = this.$route.params.season_id
      if (seasonId === undefined) {
        return
      }
      seasonId = seasonId.trim()
      this.seasonId = seasonId
      console.log(showId + ' ' + seasonId)

      Tunefind.season(showId, seasonId, (season) => {
        console.log(season)
        this.season = season
        Tunefind.$emit('loadedSeason')
      })
    },
    showEpisodes (episode) {
      this.$router.push({
        path: '/show/' + this.season.show_name + '/' + 'season-' + this.season.number + '/' + episode.id
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
