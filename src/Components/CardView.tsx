/* eslint-disable react/require-default-props */
import { useTheme } from '@/Hooks'
import React from 'react'
import { View, Text } from 'react-native'

type props = {
  name?: string
}

const CardView = ({ name }: props) => {
  const { Common } = useTheme()
  const { cardView: style } = Common
  return (
    <View style={style.base}>
      <Text>{name}</Text>
    </View>
  )
}

export default CardView
