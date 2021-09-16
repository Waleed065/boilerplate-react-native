import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {persistor, store} from './store';
import ThemeConfig from './theme';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeConfig>
          <NavigationContainer>
            <View>
              <Text>React Native Bolier Plate</Text>
            </View>
          </NavigationContainer>
        </ThemeConfig>
      </PersistGate>
    </Provider>
  );
}
