import { ROUTE_NAMES } from '../../shared/constants'
import { useCookies } from '../../shared/lib'
import router from '../router'

router.beforeEach((to, from, next) => {
  const { getCookie } = useCookies()
  const token = getCookie('token')

  if (token && to.name === ROUTE_NAMES.GUEST_LAYOUT) {
    return next({ name: ROUTE_NAMES.MAIN })
  }

  if (!token && to.name === ROUTE_NAMES.GUEST_LAYOUT) {
    return next({ name: ROUTE_NAMES.LOGIN })
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      return next({ name: ROUTE_NAMES.LOGIN })
    }
  }

  next()
})
