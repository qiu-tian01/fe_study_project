import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// import Index from '@/pages/index/index.vue'
// import About from '@/pages/about/about.vue'
// import User from '@/pages/user/user.vue'

const Index = () => import('@/pages/index/index.vue')
const About = () => import('@/pages/about/about.vue')
const User = () => import('@/pages/user/user.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: "Index", component: Index },
  { path: '/index', name: "Index", component: Index },
  { path: '/about', name: "About", component: About },
  { path: '/user/:id', name: "User", component: User },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   console.log(`to`, to)
//   // console.log(`from`, from)
// })

// router.beforeResolve((to) => {
//   console.log(`to`, to)
// })


export default router