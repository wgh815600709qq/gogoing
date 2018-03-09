<template>
  <div class="login-page">
    <div class="bg-title">
      <img src="../../assets/dreamer.jpg">
    </div>
    <div class="bg-img">
      <img src="../../assets/bg.jpg">
    </div>
    <div>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
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
    img{
      width: 10rem;
    }
  }
}
</style>
