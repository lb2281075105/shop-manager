<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="loginForm">
        <el-form-item class="login-title">
          <i style="font-size: 100px;color: #E9232C;" class="iconfont icon-apphoutaiguanli"></i>
          <h2>商城后台管理系统</h2>
        </el-form-item>
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名"
                    type="text"
                    v-model="ruleForm.username"
                    clearable
                    prefix-icon="iconfont icon-icon"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码"
                    :type="pwdStyle"
                    v-model="ruleForm.password"
                    prefix-icon="iconfont icon-mima">
            <template #suffix>
              <i class="iconfont" :class="pwdShowClass" @click="changePwdShow()"></i>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item style="text-align: center">
          <el-button class="login-btn" type="danger" @click="submitForm()">登录</el-button>
          <el-button class="login-btn" type="warning" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

  <img src="./../../assets/images/login_center_bg.png" class="login-bg-img"/>
</template>
<script>
import {ref,reactive,toRefs} from 'vue'
import {checkLogin} from './../../api/adminApi.js'
import {ElMessage} from 'element-plus'
import config from './../../config/index'
import md5 from 'blueimp-md5'
import {setLocalData} from './../../util/index.js'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const loginForm = ref(null)
    const router = useRouter()
    const state = reactive({
      ruleForm:{
        username:'',
        password:''
      },
      rules:{
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}]
      },
      pwdShowClass: 'icon-icon-test1',
      pwdStyle: 'password'
    })

    const changePwdShow = () => {
      state.pwdShowClass = state.pwdShowClass === 'icon-icon-test1' ? 'icon-icon-test' : 'icon-icon-test1'
      state.pwdStyle = state.pwdStyle === 'password' ? 'text' : 'password'
    }
    const submitForm = () => {
      loginForm.value.validate(async (valid) => {
        if (valid) {
          console.log(state.ruleForm.username)
          const result = await checkLogin(state.ruleForm.username,md5(state.ruleForm.password,config.KEY))
          console.log(result);
          // 判断
          if(result.status !==1){
            return ElMessage.error(result.msg);
          }
          // 登录成功
          ElMessage.success(result.msg);
          setLocalData(config.S_TOKEN,result.data.token)
          setLocalData(config.S_USER,result.data)
          router.replace('/')
        } else {
          ElMessage({
            showClose: true,
            message: '用户名或密码格式不正确',
            type: 'error'
          });
          return false;
        }
      });
    }

    const resetForm = () => {
      loginForm.value.resetFields()
    }

    return {
      loginForm,
      ...toRefs(state),
      changePwdShow,
      submitForm,
      resetForm
    }
  }
}
</script>
<style lang="less" scoped>
.box-card {
  width: 360px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 200px auto;
  border-top: 10px solid #E9232C;

  .login-title {
    text-align: center;
    margin: 40px 0px 20px;
    h2 {
      font-size: 24px;
      margin: 5px;
    }
  }

  .login-btn {
    width: 45%;
  }
}

.login-bg-img {
  background-color: #E9232C;
  max-width: 100%;
  margin-top: 240px;
}

</style>