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
ExpressSanitizer.sanitizeParams(router, ['show_id', 'season_id', 'episode_id'])

const port = process.env.PORT || 1337

router.get('/show/:id', (req, res) => {
    console.log("Fetching show " + req.params.id)
    Tunefind.show(req.params.id)
        .then((show) => {
            res.json(show)
        })
        .catch((error) => {
            res.json(error)
        })
})

router.get('/show/:show_id/season-:season_id', (req, res) => {
    console.log("Fetching show " + req.params.show_id + " season " + req.params.season_id)
    Tunefind.season(req.params.show_id, req.params.season_id)
        .then((season) => {
            res.json(season)
        })
        .catch((error) => {
            res.json(error)
        })
})

router.get('/show/:show_id/season-:season_id/:episode_id', (req, res) => {
    console.log("Fetching show " + req.params.show_id + " season " + req.params.season_id + " episode " + req.params.episode_id)
    // TODO SANITIZE BEFORE PARSEINT() !!!!
    Tunefind.episode(req.params.show_id, req.params.season_id, parseInt(req.params.episode_id, 10))
        .then((episode) => {
            res.json(episode)
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