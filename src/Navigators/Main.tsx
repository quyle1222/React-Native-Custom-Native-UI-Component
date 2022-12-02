import { HomeContainer } from '@/Containers'
import useTheme from '@/Hooks/useTheme'
import NAVIGATION from '@/Utils/Navigation'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation, CommonActions } from '@react-navigation/native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Screen } from './Application'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  const navigation = useNavigation()
  useEffect(() => {
    async function getIsSingedIn() {
      const isSingedIn = await GoogleSignin.isSignedIn()
      if (!isSingedIn) {
        navigation.dispatch(
          CommonActions.navigate({
            name: Screen.AUTH,
          }),
        )
      }
    }
    getIsSingedIn()
  }, [])

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
