import React from 'react';
import {HStack, Spinner, Text} from 'native-base';
import {useAppSelector} from '../../hooks/Redux';

const Loading = () => {
  const {loading} = useAppSelector(state => state.auth);

  return loading ? (
    <HStack
      space={2}
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="black.100"
      opacity="0.8"
      position="absolute"
      width="100%"
      height="100%">
      <Spinner accessibilityLabel="Loading" color="main.100" size="lg" />
      <Text color="main.100" fontSize="lg">
        Loading
      </Text>
    </HStack>
  ) : null;
};

export default Loading;
