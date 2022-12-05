import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { GoogleSignin as GoogleSignIn, User } from '@react-native-google-signin/google-signin'

const AccountingContainer: FC = () => {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    getCurrentUser()
  }, [])

  async function getCurrentUser() {
    GoogleSignIn.signInSilently().then(response => {
      setUser(response)
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>{user?.user.name} </Text>
    </View>
  )
}

export default AccountingContainer
