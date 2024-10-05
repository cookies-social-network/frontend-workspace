<template>
  <teleport to="body" :disabled="!props.toBody">
    <transition name="alert-fade">
      <v-alert v-if="modelValue" v-model="modelValue" v-bind="$attrs">
        <slot />
      </v-alert>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { watch, onUnmounted, ref } from 'vue'

type Props = {
  toBody?: boolean
  autoClose?: boolean | { timeout: number }
}

const props = withDefaults(defineProps<Props>(), {
  toBody: true,
  autoClose: () => ({
    timeout: 4_000,
  }),
})

const modelValue = defineModel<boolean>({ default: false })

const timer = ref<NodeJS.Timeout>()

watch(modelValue, (newValue) => {
  if (newValue && props.autoClose) {
    if (timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(
      () => {
        modelValue.value = false
      },
      (props.autoClose as { timeout: number }).timeout
    )
  }
})

onUnmounted(() => {
  if (timer.value) {
    clearTimeout(timer.value)
  }
})

defineOptions({
  inheritAttrs: false,
})
</script>
