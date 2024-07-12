import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from './home/HomeNavigator';
import AccountNavigator from './account/AccountNavigator';
import { AppTabNames } from './RoutesNames';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={AppTabNames.home}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={AppTabNames.account}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;