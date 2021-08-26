<template>
  <el-container class="app-wrapper">
    <NavBar />
    <el-container>
      <LeftAside />
      <el-container >

        <router-view></router-view>
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
<style scoped lang="less">
.app-wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .el-footer{
    height: 120px !important;
    text-align: center;
    line-height: 60px;
    border-top: 1px solid #cccccc;
  }
}
</style>