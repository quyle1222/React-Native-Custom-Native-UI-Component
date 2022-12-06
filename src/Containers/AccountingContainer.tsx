import { findUserById } from '@/Utils/FireStoreHelper'
import {
  GoogleSignin as GoogleSignIn,
  User,
} from '@react-native-google-signin/google-signin'
import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const AccountingContainer: FC = () => {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    getCurrentUser()
  }, [])

  useEffect(() => {
    if (user) {
      getCollection()
    }
  }, [user])

  const getCurrentUser = async () => {
    GoogleSignIn.signInSilently()
      .then(response => {
        setUser(response)
      })
      .catch(error => {})
  }

  const getCollection = async () => {
    findUserById(user?.user.id).then(response => {
      response.docs.forEach(data => {})
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>{user?.user.name} </Text>
    </View>
  )
}

export default AccountingContainer
