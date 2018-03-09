import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pager/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
