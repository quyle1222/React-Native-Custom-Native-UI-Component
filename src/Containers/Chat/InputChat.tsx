import { any } from 'prop-types'
import React, { FC } from 'react'
import { View } from 'react-native'
import { InputToolbar } from 'react-native-gifted-chat'

const InputChat: FC = (props: any) => {
  return <InputToolbar {...props} />
}

export default InputChat
