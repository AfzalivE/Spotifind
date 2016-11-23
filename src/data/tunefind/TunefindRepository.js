// import { Client } from '../../../../tunefind/dist/tunefind.js'
import Got from 'got'
import EventEmitter from 'events'

class TunefindRepository extends EventEmitter {
  constructor () {
    super()
    const username = '74d7e40fbd7c452f860ff0cd41633d90'
    const password = '23f359a9fd7dbcdac039fc433f54ad18'
    // this.tunefind = new Client({
    //   credentials: {
    //     username: this.TUNEFIND_USERNAME,
    //     password: this.TUNEFIND_PASSWORD
    //   }
    // })

    this.defaultOptions = {
      json: true,
      auth: `${username}:${password}`
    }
    this.baseUrl = 'https://www.tunefind.com/api/v1'

    this.attachTunefindListeners()
  }

  attachTunefindListeners () {

  }

  call (showName, onComplete) {
    this.request(`/show/${showName}`, onComplete)
    // onComplete('test')
  }

  /**
   * [request description]
   * @param  {[type]}   path     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  request (path, callback) {
    const options = {
      ...this.defaultOptions
    }

    const url = `${this.baseUrl}${path}`
    Got(url, options)
            .then(callback)
            .catch(error => {
              console.log(error)
            })
  }
}

export default new TunefindRepository() // this instance will be shared across imports

