import { StyleSheet, Dimensions } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({
  Colors,
  Gutters,
  Layout,
  Fonts,
}: CommonParams<C>) {
  const { width } = Dimensions.get('screen')
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    fill: {
      flex: 1,
    },
    itemCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: width * 0.4,
      height: width * 0.4,
    },
    container: {
      flex: 1,
      paddingHorizontal: 5,
      maxHeight: width * 0.4,
      overflow: 'hidden',
    },
    viewItem: {
      width: width,
      marginVertical: 5,
    },
    text: {
      ...Fonts.textSmall,
      fontWeight: 'bold',
    },
    video: {
      width: '100%',
      height: 200,
      justifyContent: 'center',
      alignSelf: 'center',
    },
  })
}
