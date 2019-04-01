import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Animation from './views/Animation.vue'
import Login from './views/Login.vue'
import Axios from './views/Axios.vue'
import Admin from './views/admin/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
