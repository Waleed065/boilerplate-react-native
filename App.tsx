import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {persistor, store} from './store';
import ThemeConfig from './theme';
import Routes from './routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeConfig>
          <SafeAreaProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeConfig>
      </PersistGate>
    </Provider>
  );
}
