import { AxiosRequestConfig } from 'axios'

import { AxiosService } from '../../../shared/plugins'
import { BaseWebSocketService } from '../../../shared/plugins/socket.ts'
import { CHATS_MOCK_DATA } from '../mock'

class ChatsApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getOne = async (limit = 50, senderId: string, receiverId: string) => {
    return await this.axiosCall({
      url: '/api/v1/chats/recent',
      method: 'get',
      params: {
        limit,
        senderId,
        receiverId,
      },
    })
  }

  getChats = async () => {
    return await this.fakeAxiosCall(CHATS_MOCK_DATA)
  }
}

class ChatWebSocketService extends BaseWebSocketService {
  constructor() {
    super('http://localhost:3000')
  }

  public sendMessage(to: string, message: string) {
    const payload = { to, message }

    this.emit('message', payload)
  }

  public onMessage(handler: (payload: string) => void) {
    this.on('message', handler)
  }
}

export const chatsApi = new ChatsApi()

export const chatWebSocketService = new ChatWebSocketService()
