import { HomeContainer } from '@/Containers'
import useTheme from '@/Hooks/useTheme'
import NAVIGATION from '@/Utils/Navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  const { NavigationColors } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.HOME}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = ''
          switch (route.name) {
            case NAVIGATION.HOME:
              iconName = 'home'
              break
            case NAVIGATION.MAP:
              iconName = 'map'
              break
          }
          return (
            <FontAwesome5 name={iconName} solid size={size} color={color} />
          )
        },
      })}
    >
      <Tab.Screen
        name={NAVIGATION.HOME}
        component={HomeContainer}
        options={{
          lazy: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={NAVIGATION.MAP}
        component={HomeContainer}
        options={{
          lazy: true,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
