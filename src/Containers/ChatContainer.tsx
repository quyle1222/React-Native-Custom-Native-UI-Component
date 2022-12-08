import { useChat, useProfile, useTheme } from '@/Hooks'
import { MessageType } from '@/Models/Message'
import { setMessageStore } from '@/Store/Chat'
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'
import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const ChatContainer: FC = () => {
  const { Colors } = useTheme()
  const [messages, setMessages] = useState<Array<MessageType>>([])
  const dispatch = useDispatch()
  const { user } = useProfile()
  const messageStore = useSelector((state: any) => state.chat.listMessage)
  const handleSendMessage = (messages: MessageType[]) => {
    dispatch(setMessageStore(JSON.parse(JSON.stringify(messages))))
  }

  const {} = useChat()

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <GiftedChat
        messages={messageStore}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        onSend={handleSendMessage}
      />
    </View>
  )
}

export default ChatContainer
