import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Show from './components/Show.vue'
import Season from './components/Season.vue'
import Episode from './components/Episode.vue'
import Search from './components/Search.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import VueResourceProgressBarInterceptor from 'vue-resource-progressbar-interceptor'

const progressBarOptions = {
  color: 'rgb(0, 223, 155)',
  failedColor: 'rgb(226, 0, 0)',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueProgressBar, progressBarOptions)
Vue.use(VueResourceProgressBarInterceptor)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/',
    component: Search },
  {
    path: '/show/:show_id',
    component: Show,
    children: [
      {
        path: 'season-:season_id',
        component: Season,
        children: [
          {
            path: ':episode_num',
            component: Episode
          }
        ]
      }
    ]
  },
  { path: '/hello', component: Hello }
  // { path: '*', redirect: '/hello' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
