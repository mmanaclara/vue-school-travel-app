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
      path: '/destination/:id/:slug',
      name: 'destination',
      component: () => import('@/views/DestinationView.vue'),
      props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      children: [
        {
          path: ':experienceSlug',
          name: 'experience',
          component: () => import('@/views/ExperienceView.vue'),
          props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  linkActiveClass: 'active-link'
})

export default router
