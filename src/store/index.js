import Vuex from 'vuex'
import Vue from 'vue'
import options from './modules/options/index'
import submenu from './modules/submenu/index'
import share from './modules/share/index'
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
