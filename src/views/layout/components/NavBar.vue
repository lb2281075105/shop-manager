<template>
  <el-header class="el-header">

    <div class="nav-left">
      <img src="./../../../assets/images/logo.png" alt="" width="120">
      <h2>电商后台管理系统</h2>
      <div class="nav-center">
        <a href="#" class="a-first">撩课官网</a>
        <a href="#">小撩商城</a>
      </div>
    </div>

    <div class="nav-right">
      <el-avatar style="margin-right: 5px" :size="40" :src="circleUrl"></el-avatar>
      <span class="user-title">{{ username }}</span>
      <el-button type="danger" size="small" round @click="logout()">退出</el-button>
    </div>

  </el-header>
</template>

<script>
import {getLocalData, removeLocalData} from './../../../util/index'
import {checkLogout} from './../../../api/adminApi'
import config from './../../../config/index'
import {useRouter} from 'vue-router'
import {ElMessageBox, ElMessage} from 'element-plus'
import {ref} from 'vue'
export default {
  name: "NavBar",
  setup() {
    const user = getLocalData(config.S_USER)
    const username = ref(user.username)
    const circleUrl = user.icon ? ref(user.icon) : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    const router = useRouter()
    const logout = () => {
      ElMessageBox.confirm('您将进行退出登录操作, 是否继续?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const result = await checkLogout();
        if (result.status === 1) {
          ElMessage.success('退出登录成功!');
          removeLocalData(config.S_USER)
          removeLocalData(config.S_TOKEN)
          router.replace('/login')
        }
      }).catch(() => {
        ElMessage.error(result.msg);
      });
    }
    return {
      username,
      circleUrl,
      logout
    }

  }
}
</script>

<style scoped lang="less">
.el-header {
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      margin-left: 15px;
    }
  }

  .nav-center {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #E9232C;
      font-size: 17px;
    }

    .a-first {
      margin-left: 200px;
      margin-right: 20px;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;

    span {
      margin: 0 15px 0 0;
    }
  }
}
</style>