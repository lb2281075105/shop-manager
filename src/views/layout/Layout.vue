<template>
  <el-container class="app-wrapper">
    <NavBar />
    <el-container>
      <LeftAside />
      <el-container >
        <el-main>Main</el-main>
        <el-footer>
          <a>CopyRight @ 2021-2023 撩课学院. All right reserved</a>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import LeftAside from "./components/LeftAside.vue";


export default {
  name: "Layout",
  setup() {

  },
  components: {
    NavBar,
    LeftAside
  }
}

</script>
<style scoped>
.app-wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

}
</style>