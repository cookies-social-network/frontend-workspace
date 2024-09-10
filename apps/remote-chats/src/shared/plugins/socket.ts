// export const socket = io('http://localhost:3000', {
//   transports: ['websocket'],
//   withCredentials: true,
//   auth: {
//     token: useCookies().getCookie('token') // Передайте JWT токен
//   },
// })

import { io, Socket } from 'socket.io-client'

import { useCookies } from '../lib'

type EventHandler = (payload: any) => void

export class BaseWebSocketService {
  protected socket: Socket

  constructor(url: string) {
    const token = useCookies().getCookie('token')

    this.socket = io(url, {
      transports: ['websocket'],
      withCredentials: true,
      auth: {
        token,
      },
    })
  }

  // Подписка на событие
  public on(event: string, handler: EventHandler) {
    this.socket.on(event, handler)
  }

  // Отписка от события
  public off(event: string, handler: EventHandler) {
    this.socket.off(event, handler)
  }

  // Отправка сообщения
  public emit(event: string, payload: any) {
    this.socket.emit(event, payload)
  }

  // Подключение к комнате
  public joinRoom(room: string) {
    this.emit('join', room)
  }

  // Отключение от комнаты
  public leaveRoom(room: string) {
    this.emit('leave', room)
  }
}



// import { io, Socket } from 'socket.io-client'
//
// import { useCookies } from '../lib'
//
// type EventHandler<T = any> = (payload: T) => void
//
// interface BaseWebSocketServiceOptions {
//   url?: string
// }
//
// export class BaseWebSocketService {
//   private socket: Socket
//   private readonly url: string
//   private readonly token?: string
//   private interceptors: MessageInterceptor[] = []
//
//   constructor() {
//     this.url = import.meta.env.VITE_API_URL
//
//     this.token = useCookies().getCookie('token')
//
//     this.socket = io(this.url, {
//       transports: ['websocket'],
//       withCredentials: true,
//       auth: {
//         token: this.token,
//       },
//     })
//
//     this.socket.onAny((event, ...args) => {
//       this.interceptors.forEach((interceptor) => interceptor(event, ...args))
//     })
//   }
//
//   public on<T = any>(event: string, handler: EventHandler<T>) {
//     this.socket.on(event, handler)
//   }
//
//   public off<T = any>(event: string, handler: EventHandler<T>) {
//     this.socket.off(event, handler)
//   }
//
//   public emit<T = any>(event: string, payload: T) {
//     this.socket.emit(event, payload)
//   }
//
//   public joinRoom(room: string) {
//     this.emit('join', room)
//   }
//
//   public leaveRoom(room: string) {
//     this.emit('leave', room)
//   }
//
//   public addInterceptor(interceptor: MessageInterceptor) {
//     this.interceptors.push(interceptor)
//   }
//
//   public removeInterceptor(interceptor: MessageInterceptor) {
//     this.interceptors = this.interceptors.filter((i) => i !== interceptor)
//   }
// }
