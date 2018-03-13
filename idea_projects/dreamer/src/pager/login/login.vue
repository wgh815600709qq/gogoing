<template>
  <div class="login-page">
    <div class="bg-title">
      <img src="../../assets/dreamer.jpg">
    </div>
    <div class="bg-img">
      <img src="../../assets/bg.jpg">
    </div>
    <div class="form">
      <div class="form-item">
        <fb-input type="text"  placeholder="请输入账号" v-model="username" style="width: 6rem;height: 1rem;"></fb-input>
      </div>
      <div class="form-item">
        <fb-input type="password" placeholder="请输入密码" v-model="password" style="width: 6rem;height: 1rem;"></fb-input>
      </div>
      <div class="form-btn">
        <fb-button type="success" @click="login" style="width:5.2rem;height:0.6rem;">登陆</fb-button>
      </div>
      <div class="errmsg" v-show="errmsg">
        {{errmsg}}
      </div>
    </div>
    <div class="bottom">
      <div @click="reset"  class="reset">忘记密码?</div>
      <div class="btn">
        <div @click="register" class="register">注册</div>
      </div>
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
      password: '',
      errmsg: ''
    }
  },
  methods: {
    register () {
    },
    login () {
    },
    reset () {
    },
    check () {
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
  position: relative;
  height: 100%;
  background: -webkit-linear-gradient(#fff, #ccc); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fff, #ccc); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fff, #ccc); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fff, #ccc); /* 标准的语法 */
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
  .form{
    .form-item{
      text-align: center;
    }
    .errmsg{
      margin-top:0.2rem;
      color:#851b25;
      height: 0.6rem;
      text-align: center;
    }
    .form-btn{
      display: flex;
      margin-top:0.6rem;
      justify-content: center;
    }
  }
  .bottom{
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    .reset{
      font-size: 0.3rem;
      margin-left: 10px;
      flex-basis: 1.5rem;
    }
    .btn{
      flex:1;
      display: flex;
      justify-content: flex-end;
      .register{
        margin-right: 10px;
        width: 1.5rem;
        text-align: center;
        line-height: 1rem;
        height: 1rem;
        border-radius: 8px;
        border:1px solid #eee;
      }
    }
  }
}
</style>
