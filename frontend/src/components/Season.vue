<template>
  <div>
    <ul>
      <li v-for="episode in season.episodes">
        <a @click="showEpisodeData(episode)">Episode {{episode.number}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'

export default {
  name: 'Show',

  data () {
    return {
      season: {}
    }
  },
  created () {
    this.getSeasonEpisodes()
  },
  watch: {
    '$route': 'getSeasonEpisodes'
  },
  methods: {
    // TODO PASS A CUSTOM SHOW OBJECT CONTAINING INFO FROM PARENTS
    getSeasonEpisodes () {
      var showId = this.$route.params.show_id.trim()
      var seasonId = this.$route.params.season_id.trim()
      console.log(showId + ' ' + seasonId)
      if (showId) {
        Tunefind.seasonCallback(showId, seasonId, (season) => {
          console.log(season)
          this.season = season
        })
      }
    },
    showEpisodeData (episode) {
      this.$router.push({
        path: '/show/' + this.season.show_name + '/' + 'season/' + this.season.number + '/' + episode.id
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="css" scoped>
  li {
    list-style: none;
  }
</style>
