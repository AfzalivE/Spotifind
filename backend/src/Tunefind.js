import { Client } from 'tunefind'

const TUNEFIND_USERNAME = 'tunefind_api_username'
const TUNEFIND_PASSWORD = 'tunefine_api_password'

class Tunefind extends Client {

  constructor () {
    super({
      credentials: {
        username: TUNEFIND_USERNAME,
        password: TUNEFIND_PASSWORD
      }
    })
  }
}

export default new Tunefind() // this instance will be shared across imports

