import {HStack, Icon, Image, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../theme/variables';

interface IBottomAudioProps {
  track: any;
  pauseHandler: () => {};
  playHandler: () => {};
}

const BottomAudio = ({pauseHandler, playHandler, track}: IBottomAudioProps) => {
  const [isPause, setIsPause] = useState(false);

  const handlePause = () => {
    setIsPause(!isPause);
  };

  useEffect(() => {
    if (isPause) {
      pauseHandler();
    } else {
      playHandler();
    }
  }, [isPause]);

  useEffect(() => {
    setIsPause(false);
  }, [track]);

  return (
    <View style={styles.inner}>
      <HStack alignItems="center" height="100%" justifyContent="space-between">
        <HStack alignItems="center" height="100%" space="10px" width="50%">
          <Image
            source={{uri: track?.album?.cover_medium}}
            width="50px"
            height="50px"
            rounded="xl"
            alt={track?.title}
          />
          {/* <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              backgroundColor: colors.darkGray[100],
            }}></View> */}
          <VStack>
            <Text noOfLines={1}>{track?.title}</Text>
            <Text noOfLines={1} fontSize="sm" color="gray.500">
              {track?.artist?.name}
            </Text>
          </VStack>
        </HStack>
        <HStack space="15px">
          <Icon
            as={Feather}
            name="fast-forward"
            size="lg"
            color="black.100"
            style={styles.rotatedIcon}
          />
          <Pressable onPress={handlePause}>
            <Icon
              as={Feather}
              name={isPause ? 'play' : 'pause'}
              size="lg"
              color="black.100"
            />
          </Pressable>
          <Icon as={Feather} name="fast-forward" size="lg" color="black.100" />
        </HStack>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    width: '100%',
    height: 80,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.main[50],
  },
  rotatedIcon: {
    transform: [{rotateY: '180deg'}],
  },
});

export default BottomAudio;
