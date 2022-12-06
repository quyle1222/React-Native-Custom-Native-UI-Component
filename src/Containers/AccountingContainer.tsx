import { findUserById } from '@/Utils/FireStoreHelper'
import firestore from '@react-native-firebase/firestore'
import {
  GoogleSignin as GoogleSignIn,
  User
} from '@react-native-google-signin/google-signin'
import { use } from 'i18next'
import { is } from 'immer/dist/internal'
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
      .catch(error => {
        console.log('====================================')
        console.log('error', error)
        console.log('====================================')
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
