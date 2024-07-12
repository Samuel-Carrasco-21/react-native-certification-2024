import React from 'react'
import LoginScreen from "../../screens/auth/LoginScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreenNames } from './RoutesNames';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthScreenNames.loginScreenName} component={LoginScreen} />
      <Stack.Screen name={AuthScreenNames.registerScreenName} component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator