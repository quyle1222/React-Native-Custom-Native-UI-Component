import { GoogleSignin as GoogleSignIn } from '@react-native-google-signin/google-signin'
import fireStore from '@react-native-firebase/firestore'
import { User } from '@/Models/User'

export enum Collection {
  USERS = 'Users',
}

export enum CollectionUsersField {
  ID = 'id',
  NAME = 'name',
  EMAIL = 'email',
  PHOTO = 'photo',
}

export const findUserById = async (id: string | undefined) => {
  return await fireStore()
    .collection(Collection.USERS)
    .where(CollectionUsersField.ID, '==', id)
    .get()
}

export const saveUser = async (user: User) => {
  fireStore().collection(Collection.USERS).add(user)
}

export const configureFirebase = () => {
  GoogleSignIn.configure()
  fireStore().collection(Collection.USERS)
}
