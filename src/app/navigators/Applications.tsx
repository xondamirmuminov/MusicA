import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core';
import {navigationRef} from './utils';
import BottomTabNavigation from './BottomTabNavigation';
import {MAIN_ROUTES} from './Routes';

export type RootStackParamList = {};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export type ScreenProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        {MAIN_ROUTES.map(route => {
          const {path, element: Component} = route;

          return <Stack.Screen key={path} name={path} component={Component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
