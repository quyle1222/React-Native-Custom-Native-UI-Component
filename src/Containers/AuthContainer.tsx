import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import React, { FC } from 'react'
import { View } from 'react-native'

const AuthContainer: FC = () => {
  return (
    <View>
      <GoogleSigninButton></GoogleSigninButton>
    </View>
  )
}

export default AuthContainer
