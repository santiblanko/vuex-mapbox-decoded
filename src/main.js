import Vue from 'vue'
import VueRouter from 'vue-router'
import GeoBirdApp from './components/geobird/App'
import store from './store/index'
Vue.use(VueRouter)
const routes = [
  { path: '/geobird', component: GeoBirdApp }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    GeoBirdApp
  },
  store
}).$mount('#app')
