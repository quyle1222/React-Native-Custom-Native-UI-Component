/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  return StyleSheet.create({
    base: {
      width: Layout.fullWidth,
      minHeight: 200,
    },
  })
}
