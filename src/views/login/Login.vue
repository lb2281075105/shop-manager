<template>
    <div>
        <el-card class="box-card">
            <el-form :model="ruleForm"
                     :rules="rules"
                     ref="ruleForm">
                <el-form-item class="login-title">
                    <i style="font-size: 100px;color: #E9232C;" class="iconfont icon-apphoutaiguanli"></i>
                    <h2>商城后台管理系统</h2>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input placeholder="请输入用户名"
                              type="text"
                              v-model="ruleForm.pass"
                              autocomplete="off"
                              clearable
                              prefix-icon="iconfont icon-icon"/>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input placeholder="请输入密码"
                              type="password"
                              v-model="ruleForm.checkPass"
                              autocomplete="off"
                              prefix-icon="iconfont icon-mima"
                              suffix-icon="iconfont icon-icon-test1"/>
                </el-form-item>

                <el-form-item style="text-align: center">
                    <el-button class="login-btn" type="danger" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button class="login-btn" type="warning" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

    <img src="./../../assets/images/login_center_bg.png" class="login-bg-img"/>
</template>
<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="less" scoped>
.box-card{
    width: 360px;
    position: fixed;
    left:0;
    right: 0;
    margin: 200px auto;
    border-top: 10px solid #E9232C;
    .login-title{
        text-align: center;
        margin: 40px 0px 20px;
        h2{
            font-size: 24px;
            margin: 5px;
        }
    }
    .login-btn{
        width: 45%;
    }
}
    .login-bg-img{
        background-color: #E9232C;
        max-width: 100%;
        margin-top: 240px;
    }

</style>