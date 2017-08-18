<template>
  <div class="login-root">
    <div class="login-container">
      <div class="login-meta">
        <img src="../assets/logo.png">
        <p>后台管理系统</p>
      </div>
      <div class="login-form" @keyup.enter="doLogin">
        <p>系统登录</p>
        <label>
          <i class="fa fa-user-o fw" aria-hidden="true"></i>
          <input type="text" v-model="username" placeholder="用户名">
        </label>
        <label>
          <i class="fa fa-lock fw" aria-hidden="true"></i>
          <input type="password" v-model="password" placeholder="密码">
        </label>
        <button @click="doLogin">确认登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      checkValidity(){
        let isValid = true

        if (!this.username || !this.password) {
          this.$message.error({message: this.username ? '密码不能为空' : '用户名不能为空'})
          return false
        }

        if (!/^[-a-zA-Z0-9_]{2,30}$/.test(this.username)) {
          this.$message.error({message: '奇怪的用户名'})
          isValid = false
        }

        if (this.password.legend < 3) {
          this.$message.error({message: '密码长度太短'})
          isValid = false
        }

        return isValid
      },
      doLogin(){
        if (this.checkValidity()) {
          window.localStorage.setItem('username', this.username)
          this.$router.push({path: '/home'})
        }
      }
    },
  }
</script>
<style lang="scss" scoped>

  p {
    color: white;
  }

  .login-root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("http://oqjgod7s1.bkt.clouddn.com/bg-min.jpg");
    background-size: cover;
    text-align: center;
    font-weight: lighter;
  }

  .login-container {
    border-radius: 4px;
    position: absolute;
    width: 800px;
    height: 300px;
    top: 40%;
    left: 50%;
    background-color: #333;
    transform: translate(-50%, -50%);
  }

  .login-meta {
    width: 400px;
    padding: 60px 0;
    font-size: 16px;
    letter-spacing: 1px;
    img {
      width: 100px;
      margin-bottom: 20px;
    }
  }

  .login-form {
    box-sizing: border-box;
    width: 340px;
    position: absolute;
    right: 60px;
    border-radius: 4px;
    height: 420px;
    top: -60px;
    font-weight: lighter;
    background-color: white;
    padding: 50px 0;

    p {
      font-size: 26px;
      color: #20a0ff;
    }

    label {
      display: block;
      color: #ccc;
      font-size: 20px;
      height: 40px;
      margin: 40px 0;
    }

    i {
      font-size: 14px;
    }

    input {
      height: 40px;
      padding: 0 10px;
      display: inline-block;
      width: 70%;
      color: #666666;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #e4e4e4;
      outline: none;
      &::placeholder {
        color: #8c939d;
      }
    }

    button {
      float: right;
      outline: none;
      margin: 40px 30px 0 0;
      height: 34px;
      width: 80px;
      border: none;
      background-color: #20a0ff;
      color: white;
      font-size: 14px;
      font-weight: lighter;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #4db3ff;
      }
      &:active {
        background-color: #1d90e6;
      }
    }
  }

</style>
