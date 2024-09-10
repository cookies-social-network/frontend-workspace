export type ReadStatusType = 'read' | 'unread'

export type ChatType = {
  uuid: string
  userUuid: string
  avatar: string
  username: string
  message: string
  status: ReadStatusType
  date: string
}
