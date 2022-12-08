import { MessageType } from '../Message'
import { User } from '../User'

export type ChatState = {
  listMessage: Array<MessageType>
  listUsers: Array<User>
}

export type ListUserPayload = {
  payload: Array<User>
}

export type ListMessagesPayload = {
  payload: Array<MessageType>
}
