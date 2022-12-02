import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { FC } from 'react'
import { Screen } from '@/Navigators/Application'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const StartupContainer: FC = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  useEffect(() => {
    setDefaultTheme({ theme: 'default', darkMode: null })
    async function getIsSingedIn() {
      const isSingedIn = await GoogleSignin.isSignedIn()
      navigateAndSimpleReset(isSingedIn ? Screen.MAIN : Screen.AUTH)
    }
    getIsSingedIn()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
