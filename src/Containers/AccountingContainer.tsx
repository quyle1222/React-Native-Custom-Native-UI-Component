import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {
  GoogleSignin as GoogleSignIn,
  User,
} from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
import { use } from 'i18next'
import { is } from 'immer/dist/internal'
import { findUserById } from '@/Utils/FireStoreHepler'

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
    GoogleSignIn.signInSilently().then(response => {
      setUser(response)
    })
  }

  const getCollection = async () => {
    findUserById(user?.user.id).then(response => {
      response.docs.forEach(data => {
        console.log('====================================')
        console.log('data', data.data())
        console.log('====================================')
      })
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>{user?.user.name} </Text>
    </View>
  )
}

export default AccountingContainer
