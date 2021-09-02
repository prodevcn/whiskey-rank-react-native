import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import {PlatformColor, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider, View, Text} from 'native-base';

import store from './redux/store';
// import AppNavigation from './routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View>
          <Text>App</Text>
        </View>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
