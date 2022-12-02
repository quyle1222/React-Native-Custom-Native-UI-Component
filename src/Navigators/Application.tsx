import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContainer, StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
const Stack = createStackNavigator()
GoogleSignin.configure()
// @refresh reset

export enum Screen {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
  START_UP = 'START_UP',
}
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screen.START_UP} component={StartupContainer} />
          <Stack.Screen
            name={Screen.MAIN}
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name={Screen.AUTH}
            component={AuthContainer}
            options={{
              animationEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
