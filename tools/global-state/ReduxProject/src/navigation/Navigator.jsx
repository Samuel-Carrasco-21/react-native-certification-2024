import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthNavigator from './auth/AuthNavigator';
import AppNavigator from './app/AppNavigator';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const authReducer = useSelector(store => store.authReducer);
  const { auth } = authReducer;
  return (
    <NavigationContainer>
      {
        auth ? <AppNavigator/> : <AuthNavigator/>
      }
    </NavigationContainer>
  )
}

export default Navigator