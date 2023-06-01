/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import ApplicationNavigator from './navigators/Applications';
import {theme} from './theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ApplicationNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
