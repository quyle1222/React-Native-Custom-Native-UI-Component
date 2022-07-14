import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeContainer } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          headerShown: false,
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
