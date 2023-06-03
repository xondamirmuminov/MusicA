import {Image, Pressable, Text} from 'native-base';
import React from 'react';

interface IAlbumCardProps {
  album: {
    id: string;
    title: string;
    cover_medium: string;
    artist: {
      id: string;
      name: string;
    };
  };
  marginRight?: string | number;
  onPress: () => void;
}

const AlbumCard = ({
  album: {title, cover_medium, artist},
  marginRight,
  onPress,
}: IAlbumCardProps) => {
  return (
    <Pressable
      height="240px"
      width="160px"
      onPress={onPress}
      marginRight={marginRight ?? '20px'}>
      <Image
        rounded="2xl"
        height="180px"
        source={{uri: cover_medium}}
        alt={title}
      />
      <Text marginTop="8px" fontWeight="500" isTruncated noOfLines={1}>
        {title}
      </Text>
      <Text
        color="gray.500"
        fontWeight="500"
        fontSize="sm"
        isTruncated
        noOfLines={1}>
        {artist?.name}
      </Text>
    </Pressable>
  );
};

export default AlbumCard;
