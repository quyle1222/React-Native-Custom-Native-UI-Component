/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
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
  return (
    <View style={style}>
      <Text>{title}</Text>
    </View>
  )
}

export default Header
