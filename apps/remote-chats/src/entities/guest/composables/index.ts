import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { ROUTE_NAMES } from '#shared/constants'

import { guestApi } from '../api'
import { LoginPayloadType } from '../types'

const user = ref()

export const useGuest = () => {
  const router = useRouter()

  const lsUser = localStorage.getItem('user')

  if (!lsUser || lsUser === 'undefined') {
    localStorage.setItem('user', '{}')
  }

  user.value = JSON.parse(lsUser as string)

  const login = async (payload: LoginPayloadType) => {
    const [errors, response] = await guestApi.login(payload)

    user.value = response?.data

    localStorage.setItem('user', JSON.stringify(user.value))

    return {
      errors,
      response,
    }
  }

  const logout = async () => {
    user.value = null

    localStorage.removeItem('user')

    await router.push({ name: ROUTE_NAMES.LOGIN })
  }

  return {
    user,
    login,
    logout,
  }
}
