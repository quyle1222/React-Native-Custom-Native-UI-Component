import { useChat } from '@/Hooks'
import { User } from '@/Models/User'
import React, { FC } from 'react'
import { View, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'

const ListUserContainer: FC = () => {
  const { listUser } = useChat()
  const renderItem = (item: User, index: number) => {
    const { photo } = item
    return (
      <View
        style={{ width: '100%', height: 50, backgroundColor: 'red' }}
        key={index}
      >
        <FastImage source={{ uri: photo ?? '' }} style={{ flex: 1 }} />
      </View>
    )
  }

  const renderList = () => {
    return (
      <FlatList
        style={{ flex: 1 }}
        extraData={listUser}
        data={listUser}
        renderItem={({ item, index }: { item: User; index: number }) =>
          renderItem(item, index)
        }
      />
    )
  }
  return <View style={{ flex: 1 }}>{renderList()}</View>
}

export default ListUserContainer
