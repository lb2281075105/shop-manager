<template>
  <div class="app-container">
    <el-col :span="12">
      <img src="../assets/images/gif_404.gif" alt="" class="img-style">
    </el-col>
    <el-col :span="12">
      <div class="right-container">
        <h1>oh! no!!</h1>
        <h2>很抱歉, 小撩宝宝把页面走丢了!</h2>
        <div>请检查输入的网址是否正确, 请点击按钮返回主页!</div>
        <el-button type="danger" round style="margin-top: 10px" @click="$router.replace('/')">返回首页</el-button>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="less">
.app-container {
  width: 80%;
  margin: 120px auto;

  .right-container {
     margin-left: 100px;
     margin-top: 100px;
  }

  .img-style {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>