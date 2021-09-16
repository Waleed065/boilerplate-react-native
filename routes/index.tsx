import React from 'react';
import {Text, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primaryContrast} from '../constants/theme';

export default function Routes() {
  return (
    <>
      <StatusBar backgroundColor={primaryContrast} barStyle="dark-content" />
      <SafeAreaView>
        <Text>React Native Boiler Plate</Text>
      </SafeAreaView>
    </>
  );
}
