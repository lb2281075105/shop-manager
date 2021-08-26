<template>
    <router-view></router-view>
</template>

<script>
// App.vue 一级路由，每个页面路径都会走这个地方
import {useRouter} from 'vue-router'
import {getLocalData} from "./util";
import config from "./config";

export default {
  setup(){
    const router = useRouter()
    router.beforeEach((to, from, next)=>{
      if(to.path === '/login'){
        next()
      }else {
        // 判断有没有登录
        if(!getLocalData(config.S_TOKEN)){
          next({
            path: '/login'
          })
        }else {
          // 放行
          next()
        }
      }
    })
  }
}
</script>

<style>
@import "assets/less/base.less";
@import "assets/fonts/iconfont.css";
</style>
