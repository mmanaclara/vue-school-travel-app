import { createRouter, createWebHistory } from 'vue-router'
import RecifeView from '../views/RecifeView.vue'
import OlindaView from '../views/OlindaView.vue'
import CaruaruView from '../views/CaruaruView.vue'
import HomeView from '../views/HomeView.vue'
import FernandoDeNoronhaView from '../views/FernandoDeNoronhaView.vue'

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
      component: RecifeView
    },
    {
      path: '/olinda',
      name: 'olinda',
      component: OlindaView
    },
    {
      path: '/caruaru',
      name: 'caruaru',
      component: CaruaruView
    },
    {
      path: '/fernando-de-noronha',
      name: 'fernando-de-noronha',
      component: FernandoDeNoronhaView
    }
  ]
})

export default router
