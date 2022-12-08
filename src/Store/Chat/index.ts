import { MessageType } from '@/Models/Message'
import {
  ChatState,
  ListMessagesPayload,
  ListUserPayload,
} from '@/Models/Store/ChatState'
import { User } from '@/Models/User'
import { createAction, createSlice } from '@reduxjs/toolkit'
import { array } from 'prop-types'

const initialState: ChatState = {
  listMessage: [],
  listUsers: [],
}

const reducers = {
  setMessageStore: (state: ChatState, { payload }: ListMessagesPayload) => {
    state.listMessage = [...state.listMessage, ...payload]
  },
  setListUsers: (state: ChatState, { payload }: ListUserPayload) => {
    state.listUsers = payload
  },
}

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
})

export const { setMessageStore, setListUsers } = slice.actions
export default slice.reducer
