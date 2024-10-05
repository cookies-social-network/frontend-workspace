<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Login:
        <input v-model="login" type="text" required />
      </label>
      <br />
      <label>
        Name:
        <input v-model="name" type="text" required />
      </label>
      <br />
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <br />
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { guestApi } from '../../../entities/guest'

const login = ref('miirsery')
const email = ref('sania.nika@mail.ru')
const password = ref('vnsanya3838')
const name = ref('Alex')

const handleSubmit = async () => {
  await guestApi.register({
    login: login.value,
    email: email.value,
    password: password.value,
    name: name.value,
  })
}
</script>
