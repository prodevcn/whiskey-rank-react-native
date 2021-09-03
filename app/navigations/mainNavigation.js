import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/MainScreens/Home';

const Tab = createMaterialBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#ddd',
      }}>
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
