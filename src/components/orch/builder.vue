<template>
    <div>
      <vueInstant :suggestions="datal" :type="type" v-model="val"></vueInstant>

    <div class="container">
      <h4>Select an option</h4>
      <ul>
        <li><a class="changer" @click="changeType('amazon')">Amazon</a></li>
        <li><a class="changer" @click="changeType('twitter')">Twitter</a></li>
        <li><a class="changer" @click="changeType('facebook')">Facebook</a></li>
        <li><a class="changer" @click="changeType('spotify')">Spotify</a></li>
        <li><a class="changer" @click="changeType('google')">Google</a></li>
      </ul>
      <h4>Try this words</h4>
      <ul>
        <li>santiago</li>
        <li>diego</li>
        <li>andres</li>
        <li>carlos</li>
      </ul>


      <small>¡Under development! It works full in a few days!</small>
    </div>

    </div>
</template>

<script>
import vueInstant from 'vue-instant'

export default {

  name: 'builder',
  components: {
    vueInstant
  },
  methods: {
    changeType (type) {
      this.type = type
      console.log(this.type)
    }
  },
  data () {
    return {
      val: '',
      type: 'facebook',
      datal: [{
        text: 'santiago'
      }, {
        text: 'carlos'
      }, {
        text: 'andres'
      }, {
        text: 'diego'
      }]
    }
  }
}
</script>
<style>
  .container {
    margin-top:50px;
  }

  .changer {
    cursor:pointer;
  }

</style>
