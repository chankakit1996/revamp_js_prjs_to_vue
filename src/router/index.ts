import MemoryCards from '@/components/memory-cards/MemoryCards.vue'
import Main from '@/views/Main.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { repo } from '../config/config'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'main',
    path: '/',
    component: Main
  },
  {
    name: 'memory-cards',
    path: '/memory-cards',
    component: MemoryCards
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  },
]
const router = createRouter({
  history: process.env.NODE_ENV === 'production' ? createWebHistory(`${repo}`): createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router