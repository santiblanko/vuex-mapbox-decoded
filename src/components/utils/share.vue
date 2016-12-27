<template>
    <div class="row">
        <div class="col-md-5">
            Compartir
        </div>
        <div class="col-md-7">
            <el-switch
              :width="100"
              @change="changeVisibility"
              v-model="getVisible"
              on-text="Publico"
              off-text="Privado"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'share',
  computed: {
    ...mapGetters([
      'getVisible'
    ])
  },
  methods: {
    changeVisibility (o) {
      this.$store.commit('CHANGE_VISIBILITY', o)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
