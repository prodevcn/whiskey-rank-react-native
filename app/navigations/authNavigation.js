import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login';
import Signup from '../screens/AuthScreens/Signup';

const Stack = createStackNavigator();

const AuthNavigation = props => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
