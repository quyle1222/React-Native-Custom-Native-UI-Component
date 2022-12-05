import fireStore, { firebase } from '@react-native-firebase/firestore'

export const findUserById = async (id: string | undefined) => {
  return await fireStore().collection('Users').where('id', '==', id).get()
}
