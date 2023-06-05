import {Image, Pressable, Text} from 'native-base';
import React from 'react';

interface IPodcastCardProps {
  podcast: {
    id: string;
    title: string;
    picture_medium: string;
  };
  marginRight?: string | number;
  onPress: () => void;
}

const PodcastCard = ({
  podcast: {title, picture_medium},
  marginRight,
  onPress,
}: IPodcastCardProps) => {
  return (
    <Pressable
      height="240px"
      width="160px"
      onPress={onPress}
      marginRight={marginRight ?? '20px'}>
      <Image
        rounded="2xl"
        height="180px"
        source={{uri: picture_medium}}
        alt={title}
      />
      <Text marginTop="8px" fontWeight="500" isTruncated noOfLines={1}>
        {title}
      </Text>
    </Pressable>
  );
};

export default PodcastCard;
