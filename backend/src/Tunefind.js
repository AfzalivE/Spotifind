import { Client } from 'tunefind'

const TUNEFIND_USERNAME = '74d7e40fbd7c452f860ff0cd41633d90'
const TUNEFIND_PASSWORD = '23f359a9fd7dbcdac039fc433f54ad18'

class TunefindRepository extends Client {

  constructor () {
    super({
      credentials: {
        username: TUNEFIND_USERNAME,
        password: TUNEFIND_PASSWORD
      }
    })
  }
}

export default new TunefindRepository() // this instance will be shared across imports

