import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import InputChat from './Chat/InputChat'

const ChatContainer: FC = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GiftedChat
        messages={messages}
        user={{
          _id: 1,
        }}
        // renderInputToolbar={InputChat}
      />
    </View>
  )
}

export default ChatContainer
