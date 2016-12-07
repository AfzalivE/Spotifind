import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Show from './components/Show.vue'
import Season from './components/Season.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/' },
  {
    path: '/show/:id',
    component: Show,
    children: [
      { path: 'season', component: Season }
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
