/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigation from './authNavigation';
import MainNavigation from './mainNavigation';

import {checkAuth} from '../redux/actions/authAction';

const Stack = createStackNavigator();

const AppRoutes = () => {
  const dispatch = useDispatch();
  const {authenticated} = useSelector(state => state.auth);
  const headerOption = {
    headerShown: false,
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Screen
            name="main"
            component={MainNavigation}
            options={headerOption}
          />
        ) : (
          <Stack.Screen
            name="auth"
            component={AuthNavigation}
            options={headerOption}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
