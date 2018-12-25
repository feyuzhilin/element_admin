import Vue from 'vue'
import Router from 'vue-router'
// @表示的src的绝对路由
import Home from '@/components/Home'
import Login from '@/components/Login'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(from)
  if (to.path === '/login') {
    next()
    return
  }

  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
