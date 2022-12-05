import { useTheme } from '@/Hooks'
import {
  GoogleSigninButton as GoogleSignInButton,
  GoogleSignin as GoogleSignIn,
} from '@react-native-google-signin/google-signin'
import React, { FC, useMemo } from 'react'
import { View } from 'react-native'

const AuthContainer: FC = () => {
  const { Container } = useTheme()
  const style = useMemo(() => Container.auth, [])

  const handlePlayServices = async () => {
    GoogleSignIn.hasPlayServices()
      .then(() => {
        handleSignIn()
      })
      .catch(error => {
        console.log('====================================')
        console.log('playService Error', error)
        console.log('====================================')
      })
  }

  const handleSignIn = () => {
    GoogleSignIn.signIn()
      .then(response => {
        console.log('====================================')
        console.log('response', response)
        console.log('====================================')
      })
      .catch(error => {
        console.log('====================================')
        console.log('sign error', error)
        console.log('====================================')
      })
  }

  return (
    <View style={{ ...style.container, justifyContent: 'center' }}>
      <GoogleSignInButton
        onPress={handlePlayServices}
        style={{ alignSelf: 'center' }}
      />
    </View>
  )
}

export default AuthContainer
