<template>
<div class="fullSize">
  <div class="containerSearchBox">
    <searchbox></searchbox>
  </div>
  <div id="mapbox" class="fullSize"></div>
</div>
</template>

<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import searchbox from './searchbox'
import { mapGetters } from 'vuex'

export default {
  name: 'mapbox',
  mounted () {
    this.showSuccessMessage()
    this.setMap()
    this.setMapEvents()
  },
  computed: {
    ...mapGetters({
      getLat: 'options/getLat',
      getLng: 'options/getLng',
      getZoom: 'options/getZoom',
      getMode: 'options/getMode',
      getLabels: 'options/getLabels',
      getRotation: 'options/getRotation',
      getLoading: 'options/getLoading',
      getPitch: 'options/getPitch'
    })
  },
  components: {
    searchbox
  },
  methods: {
    setMap () {
      mapboxgl.accessToken = this.$store.getters['options/getToken']
      this.map = new mapboxgl.Map({
        container: 'mapbox',
        pitch: this.$store.getters['options/getPitch'],
        bearing: this.$store.getters['options/getRotation'],
        center: this.$store.getters['options/getCenter'],
        zoom: this.$store.getters['options/getZoom'],
        style: 'mapbox://styles/mapbox/streets-v9'
      })
    },
    setMapEvents () {
      this.map.on('mousemove', function (e) {
        console.log(e.point)
        console.log(e.lngLat)
      })
    },
    showSuccessMessage () {
      this.$notify.success({
        title: 'Acción exitosa',
        message: 'El registro se guardo.',
        offset: 10
      })
    }
  },
  watch: {
    'getLat': function () {
      this.map.setCenter(this.$store.getters['options/getCenter'])
    },
    'getLng': function () {
      this.map.setCenter(this.$store.getters['options/getCenter'])
    },
    'getZoom': function () {
      this.map.setZoom(this.$store.getters['options/getZoom'])
    },
    getRotation: function () {
      this.map.setBearing(this.$store.getters['options/getRotation'])
    },
    getPitch: function () {
      this.map.setPitch(this.$store.getters['options/getPitch'])
    },
    'getMode': function () {
      var mode = 0
      if (this.$store.getters['options/getMode']) {
        mode = 60
      }
      this.map.setPitch(mode)
    }
  }
}
</script>

<style lang="css">
  .mapboxgl-canvas:focus {
    outline: 0px !important;
  }

  .fullSize {
    width: 100%;
    height: 100%;
  }

  .containerSearchBox {
    margin:14.5px;
  }
</style>
