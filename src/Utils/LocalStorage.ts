import AsyncStorage from '@react-native-async-storage/async-storage'

type CallbackWithResult<T> = (error?: Error | null, result?: T | null) => void

export enum KEY {
  FIRE_BASE_TOKEN = 'FIRE_BASE_TOKEN',
}

export const setValue = async (
  key: KEY,
  value: string,
  completion: (error?: Error | null) => void | undefined,
) => {
  await AsyncStorage.setItem(key, value, () => {
    completion && completion()
  })
}

export const getValue = async (
  key: KEY,
  callback: CallbackWithResult<string> | undefined,
) => {
  return AsyncStorage.getItem(key, callback)
}
