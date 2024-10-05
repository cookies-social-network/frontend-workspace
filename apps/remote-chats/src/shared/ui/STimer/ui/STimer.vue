<template>
  <div>
    <p style="color: #aaa">До повторной отправки: {{ formattedTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

type Emits = {
  canResendEmail: []
}

// Эмиссия события после завершения отсчета
const emit = defineEmits<Emits>()

// Время отсчета в секундах
const countdown = ref(600)

// Форматирование времени в формате mm:ss
const formattedTime = computed(() => {
  const minutes = Math.floor(countdown.value / 60)
  const seconds = countdown.value % 60

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
})

// Установка таймера при монтировании компонента
onMounted(() => {
  const timerInterval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(timerInterval)

      emit('canResendEmail')
    }
  }, 1000)
})
</script>
