import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthNavigator from './auth/AuthNavigator';
import AppNavigator from './app/AppNavigator';
import { useStore } from '../hooks/useStore';

const Navigator = () => {
  const { auth } = useStore();

  return (
    <NavigationContainer>
      {
        auth ? <AppNavigator/> : <AuthNavigator/>
      }
    </NavigationContainer>
  )
}

export default Navigator