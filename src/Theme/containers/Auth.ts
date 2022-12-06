import { StyleSheet } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({
  Colors,
  Gutters,
  Layout,
  Fonts,
}: CommonParams<C>) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.baseColor,
    },
  })
}
