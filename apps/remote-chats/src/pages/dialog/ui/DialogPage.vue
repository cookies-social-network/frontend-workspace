<template>
  <div class="dialog-page">
    <dialog-sidebar />

    <div>
      <dialog-header />

      <dialog-chat />
    </div>
  </div>
</template>

<script setup lang="ts">
import DialogChat from './DialogChat.vue'
import DialogHeader from './DialogHeader.vue'
import DialogSidebar from './DialogSidebar.vue'
</script>
