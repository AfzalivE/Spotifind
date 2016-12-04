import Express from 'express'
import Tunefind from './Tunefind'
import Helmet from 'helmet'
import ExpressSanitizer from 'express-sanitize-escape'
import Cors from 'cors'

var app = Express()
// Set secure HTTP headers
// https://expressjs.com/en/advanced/best-practice-security.html
// https://blog.risingstack.com/node-js-security-checklist/
app.use(Helmet())
app.use(ExpressSanitizer.middleware())
app.use(Cors())

var router = Express.Router()
ExpressSanitizer.sanitizeParams(router, ['name'])


const port = process.env.PORT || 1337
const username = '74d7e40fbd7c452f860ff0cd41633d90'
const password = '23f359a9fd7dbcdac039fc433f54ad18'

router.get('/show/:name', (req, res) => {
    console.log("Fetching show " + req.params.name)
    Tunefind.show(req.params.name)
        .then((show) => {
            res.json(show)
        })
        .catch((error) => {
            res.json(error)
        })
})

router.get('/movie/:name', (req, res) => {
    console.log("Fetching movie " + req.params.name)
    Tunefind.movie(req.params.name)
        .then((show) => {
            res.json(show)
        })
        .catch((error) => {
            res.json(error)
        })
})

router.get('/artist/:name', (req, res) => {
    console.log("Fetching show " + req.params.name)
    Tunefind.artist(req.params.name)
        .then((show) => {
            res.json(show)
        })
        .catch((error) => {
            res.json(error)
        })
})


app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)