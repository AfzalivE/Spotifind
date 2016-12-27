<template>
  <div>
    <ul>
      <li v-for="song in episode.songs">
          {{song.name}} by {{song.artist.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'
import Data from '../data/Data'

export default {
  name: 'Episode',

  data () {
    return {
      episode: {},
      episodeNum: ''
    }
  },
  created () {
    this.getEpisode()
    Tunefind.$on('loadedSeason', () => {
      this.getEpisode()
    })
  },
  watch: {
    '$route': 'getEpisode'
  },
  methods: {
    getEpisode () {
      if (Data.show === undefined) {
        return
      }
      var showId = Data.show.show_name
      if (showId === undefined) {
        console.log('show Id is undefined')
        return
      }

      var seasonId = Data.show.selectedSeasonId
      if (seasonId === undefined) {
        console.log('season Id is undefined')
        return
      }

      showId = showId.trim()
      seasonId = seasonId.trim()

      var episodeNum = this.$route.params.episode_num
      if (episodeNum === undefined) {
        console.log('episodeNum is undefined')
        return
      }
      episodeNum = episodeNum.trim()
      // console.log(showId + ' ' + seasonId + ' ' + episodeNum)

      if (Object.keys(this.episode).length !== 0 && episodeNum === this.episodeNum) {
        return // don't reload the the same episode
      }
      Tunefind.episode(showId, seasonId, episodeNum, (episode) => {
        console.log(episode)
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
