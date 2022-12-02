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
      color: Colors.text,
    },
    video: {
      width: '100%',
      height: 200,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    cardStack: {
      width: width * 0.9,
      height: 600,
      alignSelf: 'center'
    },
    card: {
      width: width * 0.9,
      height: 600,
      alignSelf: 'center',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 25,
      overflow: 'hidden',
    },
    cardImage: {
      flex: 1,
      borderRadius: 25
    }
  })
}
