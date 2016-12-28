class Tunefind {

  constructor () {
  }

  show(showId, callback) {
    return new Promise((resolve, reject) => {
        resolve({"show_name":"Arrow","show_image":"http://localhost:8080/static/img/arrow.jpg","seasons":[{"id":"1089","number":"1","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1","song_count":"273","episode_count":"23"},{"id":"1350","number":"2","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-2","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-2","song_count":"47","episode_count":"23"},{"id":"1698","number":"3","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-3","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-3","song_count":"25","episode_count":"23"},{"id":"2161","number":"4","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-4","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-4","song_count":"29","episode_count":"23"},{"id":"2898","number":"5","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-5","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-5","song_count":"13","episode_count":"9"}]})
    })
  }

  season(showId, seasonNumber, callback) {
    return new Promise((resolve, reject) => {
        resolve({"episodes":[{"id":"12610","name":"Pilot","number":"1","air_date":"2012-10-10T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12610","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610","song_count":"19"},{"id":"12611","name":"Honor Thy Father","number":"2","air_date":"2012-10-17T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12611","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12611","song_count":"8"},{"id":"12612","name":"Lone Gunmen","number":"3","air_date":"2012-10-24T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12612","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12612","song_count":"8"},{"id":"12613","name":"An Innocent Man","number":"4","air_date":"2012-10-31T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12613","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12613","song_count":"7"},{"id":"12614","name":"Damaged","number":"5","air_date":"2012-11-07T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12614","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12614","song_count":"11"},{"id":"12615","name":"Legacies","number":"6","air_date":"2012-11-14T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12615","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12615","song_count":"11"},{"id":"12616","name":"Muse of Fire","number":"7","air_date":"2012-11-28T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12616","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12616","song_count":"14"},{"id":"12617","name":"Vendetta","number":"8","air_date":"2012-12-05T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12617","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12617","song_count":"15"},{"id":"12621","name":"Year's End","number":"9","air_date":"2012-12-12T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12621","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12621","song_count":"11"},{"id":"12857","name":"Burned","number":"10","air_date":"2013-01-16T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12857","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12857","song_count":"8"},{"id":"12858","name":"Trust But Verify","number":"11","air_date":"2013-01-23T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12858","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12858","song_count":"14"},{"id":"12945","name":"Vertigo","number":"12","air_date":"2013-01-30T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12945","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12945","song_count":"10"},{"id":"12946","name":"Betrayal","number":"13","air_date":"2013-02-06T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/12946","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12946","song_count":"10"},{"id":"13036","name":"The Odyssey","number":"14","air_date":"2013-02-13T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/13036","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/13036","song_count":"10"},{"id":"13335","name":"Dodger","number":"15","air_date":"2013-02-20T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/13335","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/13335","song_count":"11"},{"id":"13854","name":"Dead to Rights","number":"16","air_date":"2013-02-27T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/13854","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/13854","song_count":"12"},{"id":"13867","name":"The Huntress Returns","number":"17","air_date":"2013-03-20T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/13867","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/13867","song_count":"15"},{"id":"13868","name":"Salvation","number":"18","air_date":"2013-03-27T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/13868","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/13868","song_count":"12"},{"id":"14069","name":"Unfinished Business","number":"19","air_date":"2013-04-03T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/14069","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/14069","song_count":"15"},{"id":"14403","name":"Home Invasion","number":"20","air_date":"2013-04-24T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/14403","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/14403","song_count":"15"},{"id":"14413","name":"The Undertaking","number":"21","air_date":"2013-05-01T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/14413","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/14413","song_count":"13"},{"id":"14414","name":"Darkness on the Edge of Town","number":"22","air_date":"2013-05-08T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/14414","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/14414","song_count":"11"},{"id":"14415","name":"Sacrifice","number":"23","air_date":"2013-05-15T00:00:00+00:00","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/show/arrow/season-1/14415","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/14415","song_count":"13"}],"show_name":"Arrow","season_name":"Season 1"})
    })
  }

  episode(showId, seasonNumber, identifier, callback) {
    return new Promise((resolve, reject) => {
        resolve({"songs":[{"id":"32442","name":"Levels","confidence":"high","scene":"Oliver is confronted by Tommy, about having his party near Hunt's building","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/32442/56650","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/32442","artist":{"id":"avicii","name":"Avicii","tunefind_url":"http://www.tunefind.com/artist/avicii","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/avicii"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/32442?store=amazon&referrer=&x=oiz1ds&y=lco819ubvhcgs84s84k0gskw0ocsgos&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/32442?store=itunes&referrer=&x=oiz1ds&y=h4j8u6mwdz40owck8kg0sook8scwck0&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/32442?store=applemusic&referrer=&x=oiz1ds&y=gf6mb6ocogg8c44oc880c8c04w4w0k0&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://localhost:8080/static/m4a/mzm.wtdviygy.aac.p.m4a"},{"id":"65519","name":"Returning Home / Scars","confidence":"high","scene":"","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/65519/120901","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/65519","artist":{"id":"blake-neely","name":"Blake Neely","tunefind_url":"http://www.tunefind.com/artist/blake-neely","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/blake-neely"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/65519?store=amazon&referrer=&x=oiz1ds&y=k8rwxp34v28ws80co4kww4cskg440so&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/65519?store=itunes&referrer=&x=oiz1ds&y=k8yowz3qa74gk0osw8w4w8oo0oc8wos&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/65519?store=applemusic&referrer=&x=oiz1ds&y=h4a2laalv808gg0kc8wg4swck0o88o8&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a1513.phobos.apple.com/us/r1000/005/Music6/v4/14/79/43/14794394-67f0-c74f-345f-5b53a6a7c3a6/mzaf_3582567485865782877.plus.aac.p.m4a"},{"id":"94715","name":"Sacrifice","confidence":"high","scene":"","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/94715/120905","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/94715","artist":{"id":"blake-neely","name":"Blake Neely","tunefind_url":"http://www.tunefind.com/artist/blake-neely","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/blake-neely"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/94715?store=amazon&referrer=&x=oiz1ds&y=sykc5zrfzdw4k4g400g0o4wc8008kwk&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/94715?store=itunes&referrer=&x=oiz1ds&y=s9y3pab995c8kw0wss0c8okk4gkc808&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/94715?store=applemusic&referrer=&x=oiz1ds&y=g9gvtzjuojcw4080g88cg4ss4o8ggg0&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a1159.phobos.apple.com/us/r1000/057/Music4/v4/2d/48/78/2d487837-507e-23d9-13aa-9c8bf8f52411/mzaf_8306845616281151080.plus.aac.p.m4a"},{"id":"44803","name":"Babes","confidence":"high","scene":"police shut down the party","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44803/56515","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44803","artist":{"id":"icky-blossoms","name":"Icky Blossoms","tunefind_url":"http://www.tunefind.com/artist/icky-blossoms","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/icky-blossoms"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44803?store=amazon&referrer=&x=oiz1ds&y=awpro93wyqwokwc0g0sco0cko0k4k44&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44803?store=itunes&referrer=&x=oiz1ds&y=o3gz0iozzeo0k0cgcwg04wc4gcows8k&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44803?store=applemusic&referrer=&x=oiz1ds&y=awxeijo0qj48osow8cokwswgc0404co&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a1495.phobos.apple.com/us/r1000/101/Music/1a/15/9a/mzi.moxsmflr.aac.p.m4a"},{"id":"44905","name":"Outlaw","confidence":"high","scene":"Hunts comments on party to his security","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44905/56646","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44905","artist":{"id":"jeremy-thurber","name":"Jeremy Thurber","tunefind_url":"http://www.tunefind.com/artist/jeremy-thurber","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/jeremy-thurber"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44905?store=amazon&referrer=&x=oiz1ds&y=1dgbnkh6dvtwwkkwcoww8o0w08kgw8o&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":""},{"id":"44906","name":"Playing In The Dark","confidence":"high","scene":"Diggle tries to get Oliver to return to party","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44906/56647","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44906","artist":{"id":"jeremy-thurber","name":"Jeremy Thurber","tunefind_url":"http://www.tunefind.com/artist/jeremy-thurber","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/jeremy-thurber"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44906?store=amazon&referrer=&x=oiz1ds&y=gpqb47boj7wowooscsow4004scwsk08&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":""},{"id":"44902","name":"Blow (Cirkut Remix)","confidence":"high","scene":"the crowds is told Oliver missed tequila","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44902/56642","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44902","artist":{"id":"keha","name":"Ke$ha","tunefind_url":"http://www.tunefind.com/artist/keha","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/keha"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44902?store=amazon&referrer=&x=oiz1ds&y=lqzfryfcls0wkcccwscgs4gcckow8o4&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44902?store=itunes&referrer=&x=oiz1ds&y=cugjc0bdd0gg8c0kw8cwc4swg0o8s4g&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44902?store=applemusic&referrer=&x=oiz1ds&y=18c1fczw9s2occ0g4c4cgsss44004sg&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a141.phobos.apple.com/us/r1000/115/Music/be/7d/bb/mzm.kzhyejqq.aac.p.m4a"},{"id":"42351","name":"C'mon Doll","confidence":"high","scene":"Tommy proposes a welcome home bash to Oliver","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/42351/56643","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/42351","artist":{"id":"my-goodness","name":"My Goodness","tunefind_url":"http://www.tunefind.com/artist/my-goodness","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/my-goodness"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/42351?store=amazon&referrer=&x=oiz1ds&y=ryr7pkvsbu8scksos4gs00coc0w884s&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/42351?store=itunes&referrer=&x=oiz1ds&y=58yodnxdi0kcs8w8ggwgk08gsgsooc8&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/42351?store=applemusic&referrer=&x=oiz1ds&y=ssfq0ajns7k8k480s0kss8sgks04kk0&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a609.phobos.apple.com/us/r1000/069/Music/v4/55/7a/74/557a7467-3894-830c-7cce-4f15e5c4ed95/mzaf_4571466825936904082.aac.m4a"},{"id":"46896","name":"superload","confidence":"medium","scene":"Oliver's sister is handed the drugs","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/46896/59077","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/46896","artist":{"id":"oliver-lieb","name":"oliver lieb","tunefind_url":"http://www.tunefind.com/artist/oliver-lieb","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/oliver-lieb"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/46896?store=amazon&referrer=&x=oiz1ds&y=m1yoyb9tqdcwc4sckc0okk840ow8ckc&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":""},{"id":"17994","name":"We Are the Champions","confidence":"high","scene":"Oliver takes the stage","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/17994/56648/we-are-the-champions","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/17994","artist":{"id":"queen","name":"Queen","tunefind_url":"http://www.tunefind.com/artist/queen","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/queen"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/17994?store=amazon&referrer=&x=oiz1ds&y=8kwvhjwfi5wcc88cccwkgo0scog0888&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/17994?store=itunes&referrer=&x=oiz1ds&y=72twtckcz5cs4g0c4k8c8c8808gkcsg&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/17994?store=applemusic&referrer=&x=oiz1ds&y=rhb59ytwttcsws0okc8wgwgkk484ccs&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a218.phobos.apple.com/us/r1000/014/Music5/v4/41/3b/bc/413bbcd4-a966-f339-7ef4-dbec066645bf/mzaf_8897192829424538739.plus.aac.p.m4a"},{"id":"44802","name":"Apparitions","confidence":"high","scene":"Lauren & Tommy talk about their relationship","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44802/56513","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44802","artist":{"id":"the-raveonettes","name":"The Raveonettes","tunefind_url":"http://www.tunefind.com/artist/the-raveonettes","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/the-raveonettes"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44802?store=amazon&referrer=&x=oiz1ds&y=4u2pu9ibxxk4gwgw80w4cgcws84c4o0&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44802?store=itunes&referrer=&x=oiz1ds&y=ho9gt3c01z40g8cw8kw004cwgkswo00&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44802?store=applemusic&referrer=&x=oiz1ds&y=8upif8p87z8k4sgsk8wkck4wskkc4kg&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a453.phobos.apple.com/us/r1000/170/Music69/v4/34/52/74/345274c1-485c-2584-9e87-b4d0b71d16af/mzaf_5402679011085206073.plus.aac.p.m4a"},{"id":"44907","name":"Work Hard, Play Hard (Radio Mix)","confidence":"high","scene":"Oliver arrives at the party","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44907/56649","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44907","artist":{"id":"tiesto","name":"Tiësto","tunefind_url":"http://www.tunefind.com/artist/tiesto","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/tiesto"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44907?store=amazon&referrer=&x=oiz1ds&y=627diktrzzgokc0o044g4k48s84s8so&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44907?store=itunes&referrer=&x=oiz1ds&y=s62i1s3h0fkssc884kk8owgc8ws4s48&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44907?store=applemusic&referrer=&x=oiz1ds&y=532ib6kmtckcgwgc80wkc4g8wc0wwok&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a691.phobos.apple.com/us/r30/Music/7b/65/22/mzm.ktcuyvsd.aac.p.m4a"},{"id":"44903","name":"Gloryhole","confidence":"high","scene":"Laurel & Oliver leave party to talk","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44903/56644","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44903","artist":{"id":"trust","name":"Trust","tunefind_url":"http://www.tunefind.com/artist/trust","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/trust"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44903?store=amazon&referrer=&x=oiz1ds&y=rzj9zm00c68go4o04g4kc0408skk440&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44903?store=itunes&referrer=&x=oiz1ds&y=s3bt1yacnj4g8o8owcwk0s8kkwso4wg&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44903?store=applemusic&referrer=&x=oiz1ds&y=sfnjbu4xnb44owss48wgscww4scgwso&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a1427.phobos.apple.com/us/r1000/091/Music/0a/bc/c5/mzi.jtvekbtt.aac.p.m4a"},{"id":"44904","name":"Hurricane II","confidence":"high","scene":"Oliver & Thea are interrupted by Tommy's arrival","date_updated":"2010-01-01T00:00:00+00:00","tunefind_url":"http://www.tunefind.com/song/44904/56645","tunefind_api_url":"https://www.tunefind.com/api/v1/show/arrow/season-1/12610/44904","artist":{"id":"ume","name":"Ume","tunefind_url":"http://www.tunefind.com/artist/ume","tunefind_api_url":"https://www.tunefind.com/api/v1/artist/ume"},"stores":[{"id":"amazon-tunefind","countries":["CA","US","FR","DE","UK"],"url":"http://www.tunefind.com/forward/song/44904?store=amazon&referrer=&x=oiz1ds&y=jhn5s16hrmog8w88c8oo0o4sk0cw4wo&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"itunes-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44904?store=itunes&referrer=&x=oiz1ds&y=y6k8l8tbh40kwwkwskg80kwswc4okw&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"},{"id":"applemusic-tunefind","countries":["US"],"url":"http://www.tunefind.com/forward/song/44904?store=applemusic&referrer=&x=oiz1ds&y=amw9k5asqzcckkcgk88kocsgwcs44wk&z=NzRkN2U0MGZiZDdjNDUyZjg2MGZmMGNkNDE2MzNkOTA"}],"preview_url":"http://a842.phobos.apple.com/us/r30/Music2/v4/ea/6f/20/ea6f20aa-2504-1c4b-407e-8f2eec72e5a1/mzaf_1648828019906287261.plus.aac.p.m4a"}],"name":"Arrow","season_name":"Season 1","episode_name":"Pilot","episode_description":"Oliver is rescued and creates the persona of Arrow, an expert archer determined to fight evil in his beloved city in the opener of a series about billionaire playboy Oliver Queen, who becomes a vigilante after being shipwrecked for five years on a remote island."})
    })
  }
}

export default new Tunefind() // this instance will be shared across imports
