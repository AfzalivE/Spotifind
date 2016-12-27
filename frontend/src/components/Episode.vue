<template>
  <div>
    <h1>
      {{show.show_name}}
    </h1>
    <ul>
      <li v-for="song in episode.songs">
          Song {{song.number}}
      </li>
    </ul>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'

export default {
  name: 'Episode',

  data () {
    return {
      episode: {}
    }
  },
  created () {
    // this.getEpisode()
    Tunefind.$on('loadedSeason', () => {
      this.getEpisode()
    })
  },
  watch: {
    '$route': 'getEpisode'
  },
  methods: {
    getEpisode () {
      var showId = this.$parent.$parent.show.show_name
      if (showId === undefined) {
        console.log('show Id is undefined')
        return
      }

      var seasonId = this.$parent.seasonId
      if (seasonId === undefined) {
        console.log('season Id is undefined')
        return
      }

      showId = showId.trim()
      seasonId = seasonId.trim()

      var episodeId = this.$route.params.episode_id
      if (episodeId === undefined) {
        console.log('episode Id is undefined')
        return
      }
      episodeId = episodeId.trim()
      console.log(showId + ' ' + seasonId + ' ' + episodeId)
      Tunefind.episode(showId, seasonId, episodeId, (episode) => {
        console.log(episodeId)
        this.episode = episode
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
