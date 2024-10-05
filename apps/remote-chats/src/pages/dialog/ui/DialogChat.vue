<template>
  <div class="dialog-chat">
    <div class="dialog-chat__content">
      <dialog-message v-for="preview in previews" :key="preview.uuid" v-bind="preview" />
    </div>

    <dialog-footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { chatsApi } from '#entities/chats'

import DialogFooter from './DialogFooter.vue'
import DialogMessage from './DialogMessage.vue'

const previews = ref()

onMounted(() => {
  getPreviews()
})

const getPreviews = async () => {
  const [error, response] = await chatsApi.getChats()

  if (response) {
    previews.value = response.data.data
  }
}
</script>
