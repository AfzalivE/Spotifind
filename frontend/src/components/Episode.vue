<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error loading season
    </div>

    <div v-if="episode">
      <ul class="list-group">
        <li v-for="song in episode.songs" class="list-group-item">
            {{song.name}} by {{song.artist.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'
import Data from '../data/Data'

export default {
  name: 'Episode',

  data () {
    return {
      error: false,
      loading: false,
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
      var episodeNum = this.$route.params.episode_num
      if (episodeNum === undefined) {
        return
      }

      episodeNum = episodeNum.trim()

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

      // console.log(showId + ' ' + seasonId + ' ' + episodeNum)

      if (Object.keys(this.episode).length !== 0 && episodeNum === this.episodeNum) {
        return // don't reload the the same episode
      }

      this.loading = true
      this.show = null
      Tunefind.episode(showId, seasonId, episodeNum, (episode) => {
        console.log(episode)
        this.loading = false
        this.error = false
        if (episode.episode_name === undefined) {
          this.error = true
          return
        }
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
