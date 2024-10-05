<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Login:
        <input v-model="login" type="text" required />
      </label>
      <br />
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { ROUTE_NAMES } from '#shared/constants'
import { useCookies } from '#shared/lib'

import { guestApi } from '../../../entities/guest'

const router = useRouter()

const login = ref('miirsery')
const password = ref('vnsanya3838')

const handleSubmit = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, response] = await guestApi.login({
    login: login.value,
    password: password.value,
  })

  if (response) {
    useCookies().setCookie('token', response.data.data.access_token)

    useCookies().setCookie(
      'user',
      JSON.stringify({
        login: login.value,
      })
    )

    await router.push({
      name: ROUTE_NAMES.MAIN,
    })
  }
}
</script>
