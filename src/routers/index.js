import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
Vue.use(Router)

export default new Router({
  mode:'history',
  // base:'process.env.BASE_URL',
  base:'miaomiao',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')  
    //   // 按需加载  // 
    // }
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
