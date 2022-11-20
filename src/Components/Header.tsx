/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { useTheme } from '@/Hooks'
import React, { FC } from 'react'
import { Component } from 'react'
import { StyleSheet, View, ViewStyle, Text } from 'react-native'

type Props = {
  title?: string
  leftComponent?: JSX.Element
  rightComponent?: JSX.Element
  style?: ViewStyle
}

const Header = ({ title, leftComponent, rightComponent, style }: Props) => {
  const { Colors } = useTheme()
  return (
    <View style={style}>
      <Text style={{ color: Colors.text }}>{title}</Text>
    </View>
  )
}

export default Header
