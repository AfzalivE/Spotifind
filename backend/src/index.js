import Express from 'express'
import Tunefind from './TunefindRepository'

var app = Express()
var router = Express.Router()

const port = process.env.PORT || 1337
const username = '74d7e40fbd7c452f860ff0cd41633d90'
const password = '23f359a9fd7dbcdac039fc433f54ad18'

router.get('/', (req, res) => {
    Tunefind.call("heroes")
    .then((show) => {
        res.json(show)
    })
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)