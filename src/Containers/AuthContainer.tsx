import { useTheme } from '@/Hooks'
import { findUserById } from '@/Utils/FireStoreHelper'
import {
  GoogleSigninButton as GoogleSignInButton,
  GoogleSignin as GoogleSignIn,
  User,
} from '@react-native-google-signin/google-signin'
import React, { FC, useMemo, useState } from 'react'
import { View } from 'react-native'

const AuthContainer: FC = () => {
  const { Container } = useTheme()
  const [user, setUser] = useState<User | null>()
  const style = useMemo(() => Container.auth, [])

  const handlePlayServices = async () => {
    GoogleSignIn.hasPlayServices()
      .then(() => {
        handleSignIn()
      })
      .catch(error => {})
  }

  const handleSignIn = () => {
    GoogleSignIn.signIn()
      .then(() => getCurrentUser())
      .catch(error => {})
  }

  const getCurrentUser = async () => {
    const currentUser: User | null = await GoogleSignIn.getCurrentUser()
    if (currentUser) {
      const { user } = currentUser
      const { id, email } = user
      console.log('email', email)
      findUserById(email).then(response => {
        console.log('response', response)
        console.log('response.docs.length', response.docs.length)
      })
    }
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
