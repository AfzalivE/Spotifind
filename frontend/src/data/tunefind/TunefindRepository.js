import Vue from 'vue'

class TunefindRepository extends Vue {

  constructor () {
    super()
    this.defaultOptions = {
      json: true
    }
    this.baseUrl = 'http://localhost:1337/api'
  }

  onShowChanged (show) {
    this.$emit('changed', show)
  }

  show (showName) {
    this.request(`/show/${showName}`, (show) => {
      this.onShowChanged(show)
    })
  }

  showCallback (showName, callback) {
    this.request(`/show/${showName}`, (show) => {
      callback(show)
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

