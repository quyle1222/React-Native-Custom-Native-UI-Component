import { useTheme } from '@/Hooks'
import { User } from '@/Models/User'
import { Screen } from '@/Navigators/Application'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { findUserById, saveUser } from '@/Utils/FireStoreHelper'
import {
  GoogleSigninButton as GoogleSignInButton,
  GoogleSignin as GoogleSignIn,
  User as UserFirebase,
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
      .then(async () => {
        await getCurrentUser()
        navigateAndSimpleReset(Screen.MAIN)
      })
      .catch(error => {})
  }

  const getCurrentUser = async () => {
    const currentUser: UserFirebase | null = await GoogleSignIn.getCurrentUser()
    if (currentUser) {
      const { user }: { user: User } = currentUser
      const { id } = user
      setUser(user)
      findUserById(id).then(response => {
        if (response.docs.length == 0) {
          saveUser(user)
        }
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
