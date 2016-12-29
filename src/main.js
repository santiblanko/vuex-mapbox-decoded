import Vue from 'vue'
import VueRouter from 'vue-router'
import GeoBirdApp from './components/geobird/App'
import store from './store/index'
import builder from './components/orch/builder'

Vue.use(VueRouter)
const routes = [
  { path: '/geobird', component: GeoBirdApp },
  { path: '/builder', component: builder }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    GeoBirdApp,
    builder
  },
  store
}).$mount('#app')
