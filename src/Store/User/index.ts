import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState: ChatState = {
  listMessage: [],
}

const reducers = {
  setMessageStore: (state: ChatState, { payload }: any) => {
    state.listMessage = [...state.listMessage, ...payload]
  },
}

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
})
export const { setMessageStore } = slice.actions
export default slice.reducer

type ChatState = {
  listMessage: Array<any>
}
