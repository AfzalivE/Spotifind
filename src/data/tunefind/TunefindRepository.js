// import { Client } from 'tunefind'
import EventEmitter from 'events'

class TunefindRepository extends EventEmitter {
  constructor () {
    super()
    this.TUNEFIND_USERNAME = '74d7e40fbd7c452f860ff0cd41633d90'
    this.TUNEFIND_PASSWORD = '23f359a9fd7dbcdac039fc433f54ad18'
    // this.tunefind = new Client({
    //   credentials: {
    //     username: this.TUNEFIND_USERNAME,
    //     password: this.TUNEFIND_PASSWORD
    //   }
    // })
    this.attachTunefindListeners()
  }

  attachTunefindListeners () {

  }

  call (showName, onComplete) {
    // this.tunefind.show(showName)
    // .then(onComplete)
    onComplete('test')
  }
}

export default new TunefindRepository() // this instance will be shared across imports

