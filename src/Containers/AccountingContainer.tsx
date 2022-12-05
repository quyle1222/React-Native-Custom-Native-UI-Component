import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { GoogleSignin, User } from '@react-native-google-signin/google-signin'

const AccountingContainer: FC = () => {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    GoogleSignin.getCurrentUser()
      .then(response => {
        console.log('====================================')
        console.log('success', response)
        console.log('====================================')
        setUser(response)
      })
      .catch(error => {
        console.log('====================================')
        console.log('error', error)
        console.log('====================================')
      })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>{user?.user.name} </Text>
    </View>
  )
}

export default AccountingContainer
