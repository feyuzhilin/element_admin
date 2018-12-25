<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" status-icon>
      <img src="@/assets/avatar.jpg">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 6, message: '长度在3到6个字符之间', trigger: 'change' }],
        password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }, { min: 6, max: 12, message: '长度在6到12个字符之间', trigger: 'change' }]
      }
    }
  },
  methods: {
    reset() {
      this.$refs.form.resetFields()
    },
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.form
          }).then(res => {
            console.log(res.data)
            if (res.data.meta.status === 200) {
              this.$message({
                message: '登陆成功了',
                type: 'success',
                duration: 1000
              })
              // localStorage.setItem('token', res.data.data.token)
              this.$router.push('/home')
            } else {
              this.$message.error(res.data.meta.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    padding: 75px 40px 15px 40px;
    background-color: #fff;
    margin: 200px auto;
    border-radius: 20px;
    position: relative;
    img {
      width: 120px;
      height: 120px;
      position: absolute;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
  .reset {
    margin-left: 80px;
  }
}
</style>
