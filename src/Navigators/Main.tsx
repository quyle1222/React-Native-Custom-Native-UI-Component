import {
  AccountingContainer,
  ChatContainer,
  HomeContainer,
  ListUserContainer,
} from '@/Containers'
import useTheme from '@/Hooks/useTheme'
import NAVIGATION from '@/Utils/Navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Screen } from './Application'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  const navigation = useNavigation()
  const { NavigationColors } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.HOME}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = ''
          switch (route.name) {
            case Screen.HOME:
              iconName = 'home'
              break
            case Screen.MAP:
              iconName = 'map'
              break
            case Screen.CHAT:
              iconName = 'comments'
              break
          }
          return (
            <FontAwesome5 name={iconName} solid size={size} color={color} />
          )
        },
      })}
    >
      <Tab.Screen
        name={Screen.HOME}
        component={HomeContainer}
        options={{
          lazy: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Screen.MAP}
        component={AccountingContainer}
        options={{
          lazy: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Screen.CHAT}
        component={ListUserContainer}
        options={{
          lazy: true,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
