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
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Loading from './components/Loading';

import ApplicationNavigator from './navigators/Applications';
import {persistor, store} from './store';
import {theme} from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ApplicationNavigator />
          </SafeAreaProvider>
          <Loading />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
