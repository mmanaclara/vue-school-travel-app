import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceDestinations from '@/destinations.json'

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
      beforeEnter(to, from, next) {
        // the to argument refers to the route that is being navigated to
        const { destinations } = sourceDestinations
        const routeExists = destinations.find((destination) => destination.id == to.params.id)
        if (!routeExists) {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.split('/').slice(1) }
          })
        } else {
          next() // Allow the navigation to proceed
        }
      },
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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  linkActiveClass: 'active-link'
})

export default router
