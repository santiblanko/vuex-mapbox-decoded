<template>
    <div>
                <div class="row">
                    <div class="col-md-5">
                        Latitud
                    </div>
                    <div class="col-md-5">
                        <el-input :value="getLat" @input="changeLat" placeholder="Latitud">
                        </el-input>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Longitud
                    </div>
                    <div class="col-md-5">
                        <el-input :value="getLng" @input="changeLng" placeholder="Longitud">
                        </el-input>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Visualización
                    </div>
                    <div class="col-md-2">
                        <el-switch @change="changeMode" off-color="#ff4949" off-text="2D" on-color="#13ce66" on-text="3D" v-model="getMode">
                        </el-switch>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Pendiente
                    </div>
                    <div class="col-md-5">
                        <el-input :disabled="!getMode" :value="getPitch" @input="changePitch" placeholder="Pendiente">
                        </el-input>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Rotación
                    </div>
                    <div class="col-md-5">
                        <el-input :value="getRotation" @input="changeRotation" placeholder="Rotación">
                        </el-input>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Zoom
                    </div>
                    <div class="col-md-5">
                        <el-input-number :max="16" :min="3" :value="getZoom" @input="changeZoom">
                        </el-input-number>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;">
                    <div class="col-md-5">
                        Etiquetas
                    </div>
                    <div class="col-md-5">
                        <el-switch @change="changeLabels" off-color="#ff4949" off-text="NO" on-color="#13ce66" on-text="SI" v-model="getLabels">
                        </el-switch>
                    </div>
                </div>
                <div class="row" style="margin-top:30px;">
                    <div class="col-md-6">
                        <el-button :loading="getLoading" @click="save" icon="edit" size="large" type="primary">
                            Guardar
                        </el-button>
                    </div>
                </div>
    </div>


</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'config',
  methods: {
    changeLat (o) {
      this.$store.commit('options/CHANGE_LAT', o)
    },
    changeLng (o) {
      this.$store.commit('options/CHANGE_LNG', o)
    },
    changeRotation (o) {
      this.$store.commit('options/CHANGE_ROTATION', o)
    },
    changeZoom (o) {
      this.$store.commit('options/CHANGE_ZOOM', o)
    },
    changeLabels (o) {
      this.$store.commit('options/CHANGE_LABELS', o)
    },
    changeMode (o) {
      this.$store.commit('options/CHANGE_MODE', o)
    },
    changePitch (o) {
      this.$store.commit('options/CHANGE_PITCH', o)
    },
    save (o) {
      this.$store.commit('options/LOADING', true)
    }
  },
  computed: {
    ...mapGetters({
      getLat: 'options/getLat',
      getLng: 'options/getLng',
      getPitch: 'options/getPitch',
      getZoom: 'options/getZoom',
      getMode: 'options/getMode',
      getLabels: 'options/getLabels',
      getRotation: 'options/getRotation',
      getLoading: 'options/getLoading',
      getDefault: 'submenu/getDefault'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
