import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import News from '@/views/Home/News.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/banner',
    name: 'banner',
    component: () => import('@/views/Home/Banner.vue')
  },
  {
    path: '/News',
    name: 'news',
    component: () => import('@/views/Home/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
