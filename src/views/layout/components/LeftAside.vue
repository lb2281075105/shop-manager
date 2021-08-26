<template>
  <el-aside width="200px" style="background-color: #42b983">Aside</el-aside>
</template>

<script>
import menuConfig from './config/menuConfig.json'
export default {
  name: "LeftAside",
  setup(){
    console.log(menuConfig);
    return {

    }
  }
}
</script>

<style scoped>

</style>