import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../../screens/app/AccountScreen";
import { AccountScreenNames } from './RoutesNames';

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
      <Stack.Screen name={AccountScreenNames.account} component={AccountScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator;