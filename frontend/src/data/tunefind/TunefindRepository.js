import EventEmitter from 'events'
import Vue from 'vue'

class TunefindRepository extends EventEmitter {
  constructor () {
    super()
    this.defaultOptions = {
      json: true
    }
    this.baseUrl = 'http://localhost:1337/api'

    this.attachTunefindListeners()
  }

  attachTunefindListeners () {

  }

  show (showName, onComplete) {
    this.request(`/show/${showName}`, onComplete)
  }

  request (path, callback) {
    Vue.http.get(this.baseUrl + path)
        .then((response) => {
          callback(response.body)
        }, (error) => {
          console.log(error)
        })
  }
}

export default new TunefindRepository() // this instance will be shared across imports

