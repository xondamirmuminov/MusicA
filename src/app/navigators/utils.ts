import {useEffect, useRef} from 'react';
import {Platform} from 'react-native';
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from '@react-navigation/native';

/* eslint-disable */
export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any;
  },
  dispatch(_action: NavigationAction) {},
};
/* eslint-enable */

export const navigationRef = createNavigationContainerRef();

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  // ignore if iOS ... no back button!
  if (Platform.OS === 'ios') return;

  // The reason we're using a ref here is because we need to be able
  // to update the canExit function without re-setting up all the listeners
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);
}

/**
 * use this to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = {index: 0, routes: []}) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}
