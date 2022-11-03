import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeContainer } from '@/Containers'
import Icon from 'react-native-vector-icons/FontAwesome'
import useTheme from '@/Hooks/useTheme'
import NAVIGATION from '@/Utils/Navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { NavigationColors } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = ''
          if (route.name === NAVIGATION.HOME) {
            iconName = 'rocket'
          }
          return <FontAwesome5 name={'git'} solid size={30} />
        },
      })}
    >
      <Tab.Screen
        name={NAVIGATION.HOME}
        component={HomeContainer}
        options={{
          headerShown: false,
          // tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
