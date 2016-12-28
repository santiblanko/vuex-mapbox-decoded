<template>
<el-menu :default-active="getDefault" @select="change" class="el-menu-demo" mode="horizontal">
    <el-menu-item v-for="item in getMenu" :index="item.id">{{item.name}}</el-menu-item>
</el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'submenu',
  computed: {
    ...mapGetters({
      getMenu: 'submenu/getMenu',
      getDefault: 'submenu/getDefault'
    })
  },
  methods: {
    change (o) {
      this.$store.commit('submenu/CHANGE_DEFAULT', o)
    }
  }
}
</script>

<style lang="css" scoped>
  a:hover{
    text-decoration: none;
  }
</style>
