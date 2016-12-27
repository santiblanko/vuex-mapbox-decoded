<template>
    <el-input placeholder="Seleccione ubicación">
      <el-select slot="prepend" placeholder="Select">
        <el-option label="Indicadores" value="1"></el-option>
        <el-option label="Flujos" value="2"></el-option>
        <el-option label="Calculos" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="search"></el-button>
    </el-input>
</template>

<script>
export default {
  name: 'searchbox'
}
</script>

<style lang="css" scoped>
</style>
