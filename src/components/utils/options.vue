<template>
    <div>
        <div class="row" v-if="getDefault == 3">
            <div class="col-md-12" style="padding:10px; margin:15px;">
                <share></share>
            </div>
        </div>

        <div class="row" v-if="getDefault == 1">
            <div class="col-md-12" style="padding:10px; margin:15px;">
                <config></config>
            </div>
        </div>
    </div>
</template>
<script>
import share from './share'
import config from './config'
import { mapGetters } from 'vuex'
export default {
  name: 'options',
  components: {
    share,
    config
  },
  computed: {
    ...mapGetters([
      'getDefault'
    ])
  }
}
</script>
<style lang="css" scoped="">
</style>
