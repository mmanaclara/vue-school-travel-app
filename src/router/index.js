import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceDestinations from '@/destinations.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
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
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignInView.vue'),
      meta: {
        requiresAuth: true,
        breadcrumbs: [
          { label: 'Home >', name: 'home' },
          { label: 'Sign in', name: 'signin' }
        ]
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        breadcrumbs: [
          { label: 'Home', name: 'home' },
          { label: 'Login', name: 'login' }
        ]
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('@/views/InvoicesView.vue'),
      meta: {
        requiresAuth: true,
        breadcrumbs: [
          { label: 'Home', name: 'home' },
          { label: 'Invoices', name: 'invoices' }
        ]
      }
    }
  ],
  linkActiveClass: 'active-link'
})

router.beforeEach((to, from = '') => {
  if (to.meta.requiresAuth && !window.user) {
    console.log(to, from, 'need to login if you are not already logged in')
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
