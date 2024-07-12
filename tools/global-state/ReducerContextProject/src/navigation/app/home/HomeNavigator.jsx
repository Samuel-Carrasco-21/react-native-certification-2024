import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/app/HomeScreen";
import { HomeScreenNames } from './RoutesNames';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
      <Stack.Screen name={HomeScreenNames.home} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;