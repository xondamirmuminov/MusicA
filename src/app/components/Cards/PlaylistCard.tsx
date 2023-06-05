import {Image, Pressable, Text} from 'native-base';
import React from 'react';

interface IPlaylistCardProps {
  playlist: {
    id: string;
    title: string;
    picture_medium: string;
    user: {
      name: string;
      id: string;
    };
  };
  marginRight?: string | number;
  onPress: () => void;
}

const PlaylistCard = ({
  playlist: {title, picture_medium, user},
  marginRight,
  onPress,
}: IPlaylistCardProps) => {
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
      <Text
        color="gray.500"
        fontWeight="500"
        fontSize="sm"
        isTruncated
        noOfLines={1}>
        {user?.name}
      </Text>
    </Pressable>
  );
};

export default PlaylistCard;
