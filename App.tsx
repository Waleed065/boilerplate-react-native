import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {store} from './store';
import ThemeConfig from './theme';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeConfig>
        <NavigationContainer>
          <View>
            <Text>React Native Bolier Plate</Text>
          </View>
        </NavigationContainer>
      </ThemeConfig>
    </Provider>
  );
}
