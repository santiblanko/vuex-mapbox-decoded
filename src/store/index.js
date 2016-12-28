import Vuex from 'vuex'
import Vue from 'vue'
import options from './modules/geobird/options/index'
import submenu from './modules/geobird/submenu/index'
import share from './modules/geobird/share/index'
Vue.use(Vuex)

var store = new Vuex.Store({
  strict: true,
  modules: {
    options,
    submenu,
    share
  }
})

export default store
