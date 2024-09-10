<template>
  <aside class="dialog-sidebar">
    <header class="dialog-sidebar__header">
      <input placeholder="Поиск" />
    </header>

    <dialog-preview v-for="preview in previews" :key="preview.uuid" v-bind="preview" />
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import DialogPreview from '#pages/dialog/ui/DialogPreview.vue'

import { chatsApi } from '#entities/chats'

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
