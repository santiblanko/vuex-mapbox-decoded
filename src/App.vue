<template>
  <div id="app">
    <div class="row fullHeight">
        <div class="col-md-4 lateralContainer">
            <navbar></navbar>
            <submenu></submenu>
            <options></options>
        </div>
        <div class="col-md-8 fullHeight mapBoxContainer">
            <mapbox></mapbox>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import mapbox from './components/geobird/mapbox'
import options from './components/geobird/options'
import submenu from './components/geobird/submenu'
import navbar from './components/geobird/navbar'
import vueInstant from 'vue-instant'
//import 'element-ui/lib/theme-default/index.css'
//import 'bootstrap/dist/css/bootstrap.css'
Vue.use(ElementUI)

export default {
  components: {
    mapbox,
    options,
    submenu,
    navbar,
    vueInstant
  }
}
</script>
<style>
  .fullHeight {
    height: 100% !important;
  }
  .mapBoxContainer{
    padding-left:0px !important;
  }
  .lateralContainer{
    margin:0px !important;
    padding-right:0px !important;
  }
</style>
