import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recife',
      name: 'recife',
      component: () => import('@/views/RecifeView.vue')
    },
    {
      path: '/olinda',
      name: 'olinda',
      component: () => import('@/views/OlindaView.vue')
    },
    {
      path: '/caruaru',
      name: 'caruaru',
      component: () => import('@/views/CaruaruView.vue')
    },
    {
      path: '/fernando-de-noronha',
      name: 'fernando-de-noronha',
      component: () => import('@/views/FernandoDeNoronhaView.vue')
    }
  ],
  linkActiveClass: 'active-link'
})

export default router
