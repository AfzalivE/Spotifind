import Vue from 'vue'
import Data from '../Data'

class TunefindRepository extends Vue {

  constructor () {
    super()
    this.defaultOptions = {
      json: true
    }
    this.baseUrl = 'http://localhost:1337/api'
  }

  show (showId, callback) {
    this.request(`/show/${showId}`, (show) => {
      Data.show = show
      callback(show)
    })
  }

  season (showId, seasonId, callback) {
    this.request(`/show/${showId}/season-${seasonId}`, (season) => {
      Data.show.selectedSeasonId = seasonId
      Data.show.seasons[seasonId].details = season
      callback(season)
    })
  }

  episode (showId, seasonId, episodeNum, callback) {
    this.request(`/show/${showId}/season-${seasonId}/${episodeNum}`, (episode) => {
      callback(episode)
    })
  }

  request (path, callback) {
    this.$http.get(this.baseUrl + path)
        .then((response) => {
          callback(response.body)
        }, (error) => {
          console.log(error)
        })
  }
}

export default new TunefindRepository() // this instance will be shared across imports

