import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import { persistor, store } from './store';
import ThemeConfig from './theme';
import StyledNavigationContainer from './theme/StyledNavigationContainer';


export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeConfig>
          <SafeAreaProvider>
            <StyledNavigationContainer>
              <Routes />
            </StyledNavigationContainer>
          </SafeAreaProvider>
        </ThemeConfig>
      </PersistGate>
    </Provider>
  );
}
