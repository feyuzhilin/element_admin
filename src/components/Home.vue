<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="title">电商后台管理系统</div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    logout() {
      this.$confirm('您确定要退出此系统吗, 是否继续?', '温馨提示', {
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出系统成功')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #a8a9ad;
    display: flex;
    .logo {
      width: 180px;
      background: url(~@/assets/logo.jpg) no-repeat;
      background-size: contain;
      background-position: center center;
    }
    .title {
      flex: 1;
      font-size: 30px;
      color: #fff;
      text-align: center;
      line-height: 60px;
    }
    .logout {
      width: 180px;
      text-align: right;
      line-height: 60px;
      font-weight: 700;

      a {
        color: orange;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
