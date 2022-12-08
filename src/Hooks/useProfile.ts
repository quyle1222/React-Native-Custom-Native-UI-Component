import { useEffect, useMemo, useRef, useState } from 'react'
import {
  GoogleSignin as GoogleSignIn,
  User,
} from '@react-native-google-signin/google-signin'
import { useFocusEffect } from '@react-navigation/native'

const useProfile = () => {
  const [userData, setUser] = useState<User>()

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    GoogleSignIn.getCurrentUser()
      .then(response => {
        if (response) {
          setUser(response)
        } else {
          getUser()
        }
      })
      .catch(() => {})
  }

  const getUser = () => {
    GoogleSignIn.signInSilently()
      .then(response => {
        setUser(response)
      })
      .catch(() => {})
  }

  const user = useMemo(() => userData, [userData])

  return { user }
}

export default useProfile
