import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthNavigator from './auth/AuthNavigator';
import AppNavigator from './app/AppNavigator';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const authUser = useSelector(store => store.userAuth);
  const { auth } = authUser;
  return (
    <NavigationContainer>
      {
        auth ? <AppNavigator/> : <AuthNavigator/>
      }
    </NavigationContainer>
  )
}

export default Navigator