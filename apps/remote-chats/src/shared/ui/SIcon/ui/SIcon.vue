<template>
  <component :is="icon" class="s-icon" height="1em" width="1em" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

type Props = {
  name: string
}

const props = defineProps<Props>()

const icon = defineAsyncComponent(() => import(`#apps/assets/${props.name}.svg?component`))
</script>

<style scoped lang="scss">
.s-icon {
  font-size: 16px;
}
</style>
