import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';

import store from './redux/store';
import AppNavigation from './navigations';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
