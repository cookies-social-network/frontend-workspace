<template>
  <div>
    <div>
      <h3>Chat</h3>
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Type a message" />
      <button @click="sendMessage">Send</button>
    </div>
    <div>
      <h4>Messages:</h4>
      <ul>
        <li v-for="msg in messages" :key="msg">{{ msg }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'

import { chatsApi, chatWebSocketService } from "#entities/chats";
import { useCookies } from "#shared/lib";

const message = ref('')
const messages = ref<string[]>([])

const recipientId = computed(() => {
  const user = useCookies().getCookie('user')

  return user ? (JSON.parse(user).login === 'miirsery' ? '2' : '1') : '2'
})

const senderId = computed(() => {
  const user = useCookies().getCookie('user')

  return user ? (JSON.parse(user).login === 'miirsery' ? '1' : '2') : '2'
})

// Отправка сообщения
const sendMessage = () => {
  if (!message.value.trim()) return

  chatWebSocketService.sendMessage(senderId.value, message.value)

  message.value = ''
}

// Получение недавних сообщений
const getRecent = async () => {
  const [error, response] = await chatsApi.getOne(50, senderId.value, recipientId.value)

  if (response) {
    messages.value = response.data.data.map(({ message }) => message)
  }
}

const fetchAll = async () => {
  await Promise.all([getRecent()])
}

onMounted(() => {
  fetchAll()

  // Подключение к комнатам
  chatWebSocketService.joinRoom(recipientId.value)

  chatWebSocketService.joinRoom(senderId.value)

  // Обработка сообщений
  chatWebSocketService.onMessage((payload: string) => {
    messages.value.push(payload)

    console.log(messages.value)
  })
})

onUnmounted(() => {
  // Очистка
  chatWebSocketService.off('message', () => {})

  chatWebSocketService.leaveRoom(recipientId.value)

  chatWebSocketService.leaveRoom(senderId.value)
})
</script>
