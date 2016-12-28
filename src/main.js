import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: App }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    App
  },
  store
}).$mount('#app')
