import { ChatType } from "../types";

export const CHATS_MOCK_DATA: Array<ChatType> = [
  {
    uuid: 'qwerty-1234',
    userUuid: 'qwerty-1234-1',
    avatar: '/avatar.png',
    username: 'username',
    message: 'Cool',
    status: 'read', // read | unread,
    date: '10:22',
  },
]
