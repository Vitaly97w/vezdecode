import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from 'vue-cookie'
import Auth from '../views/Auth'
import Reg from '../views/Reg'
import User from '../views/User'
import Admin from '../views/Admin'
import About from '../views/About'
//Защита роутев
const security = (to, from, next) => {
  console.log(localStorage.token)
  if (localStorage.token) {
    next()
  } else {
    next('/auth')
  }
}
Vue.use(VueRouter)

const routes = [
  //редирект по куки
  {
    path: '/',
    redirect: to => {
      const role = cookie.get("role")
      if(role) return { path: '/' + role}
      return {path: '/auth'}
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: security,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    beforeEnter: security,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: security,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
