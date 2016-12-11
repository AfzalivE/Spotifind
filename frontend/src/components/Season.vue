<template>
  <div>
    <ul>
      <li v-for="episode in season.episodes">
        Episode {{episode.number}}
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
  watch: {
    '$route': 'getSeasonEpisodes'
  },
  methods: {
    getSeasonEpisodes () {
      var showName = this.$route.params.show_id.trim()
      console.log(showName)
      if (showName) {
        Tunefind.showCallback(showName, (show) => {
          console.log(show)
          this.show = show
        })
      }
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
