<template>
  <el-aside width="200px" style="background-color: #42b983">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <el-menu-item index="1-1">首页</el-menu-item>
      <el-sub-menu index="1">
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>

      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
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