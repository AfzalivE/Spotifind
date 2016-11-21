# SpotiFind

Find tracks for a show on Tunefind and create playlists on Spotify

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tunefind API
NPM Package: https://www.npmjs.com/package/tunefind

API Reference: http://www.tunefind.com/api

## Spotify API
NPM Package: https://www.npmjs.com/package/spotify-web-api-node

API Reference: https://developer.spotify.com/web-api/working-with-playlists/


## Web UI
Full functionality
1. Enter the name of the show
2. List the search results (possible shows)
3. Go into a show, list all the seasons (or episodes)
4. Go into a season, list all the episodes
5. Go into an episode, list all the songs

Show option to create a playlist out of each TV show, season, and episode. Also
show option to add a track to existing playlist.

## Version 1

### Main functionality

1. List elements (shows, seasons, episodes, songs)
2. Create playlist, add tracks to playlist.

For the first version, we just create a playlist for each episode.

## Future

Allow filters for songs, like exclude songs under a certain rating etc.
