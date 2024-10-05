import { createRouter, createWebHistory } from 'vue-router'

import { BaseLayout } from '#apps/layouts/BaseLayout'
import { GuestLayout } from '#apps/layouts/GuestLayout'

import { ROUTE_NAMES } from '#shared/constants'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.GUEST_LAYOUT,
      component: GuestLayout,
      children: [
        {
          path: '/auth/login',
          name: ROUTE_NAMES.LOGIN,
          component: () => import('#pages/LoginPage'),
        },
        {
          path: '/auth/register',
          name: ROUTE_NAMES.REGISTER,
          component: () => import('#pages/RegisterPage'),
        },
      ],
    },
    {
      path: '/',
      name: ROUTE_NAMES.BASE_LAYOUT,
      component: BaseLayout,
      children: [
        {
          path: '/',
          name: ROUTE_NAMES.MAIN,
          component: () => import('#pages/MainPage'),
          meta: { requiresAuth: true },
        },
        {
          path: '/dialog',
          name: ROUTE_NAMES.DIALOG,
          component: () => import('#pages/dialog'),
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: ROUTE_NAMES.ERROR_404,
      component: () => import('#pages/ErrorPage'),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
