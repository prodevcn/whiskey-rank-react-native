import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#ddd',
      }}>
      <BottomTab.Screen />
      <BottomTab.Screen />
      <BottomTab.Screen />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
