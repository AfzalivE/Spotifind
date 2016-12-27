import Vue from 'vue'

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
      callback(show)
    })
  }

  season (showId, seasonId, callback) {
    this.request(`/show/${showId}/season-${seasonId}`, (season) => {
      callback(season)
    })
  }

  episode (showId, seasonId, episodeId, callback) {
    this.request(`/show/${showId}/season-${seasonId}/${episodeId}`, (episode) => {
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

