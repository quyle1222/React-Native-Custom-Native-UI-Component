import { User } from '@/Models/User'
import { setListUsers } from '@/Store/Chat'
import { getListUsers } from '@/Utils/FireStoreHelper'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const useChat = () => {
  const [listUser, setListUser] = useState<Array<User>>([])
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.chat.listUsers)

  useEffect(() => {
    setListUser(state)
  }, [state])

  useEffect(() => {
    getListUserFromFirebaseStore()
  }, [])

  const getListUserFromFirebaseStore = async () => {
    getListUsers().then(response => {
      let listUser = [] as Array<User>
      response.forEach(item => {
        listUser.push(item.data() as unknown as User)
      })
      dispatch(setListUsers(listUser))
    })
  }

  return { listUser }
}

export default useChat
