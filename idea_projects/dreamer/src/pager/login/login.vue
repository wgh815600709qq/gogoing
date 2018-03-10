<template>
  <div class="login-page">
    <div class="bg-title">
      <img src="../../assets/dreamer.jpg">
    </div>
    <div class="bg-img">
      <img src="../../assets/bg.jpg">
    </div>
    <div>
      <fb-input type="text"  placeholder="请输入账号" v-model="username"></fb-input>
      <fb-input type="password" placeholder="请输入密码" v-model="password"></fb-input>
      <fb-button type="error" @click="register">注册</fb-button>
      <fb-button type="success" @click="login">登陆</fb-button>
    </div>
  </div>
</template>

<script>
import fbInput from '@/components/ui/input'
import fbButton from '@/components/ui/button'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
    },
    login () {
    }
  },
  components: {
    fbInput,
    fbButton
  }
}
</script>

<style lang="less" scoped>
.login-page{
  height: 100%;
  .bg-title{
    height: 3rem;
    text-align: center;
    img{
      height: 100%;
    }
  }
  .bg-img{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
