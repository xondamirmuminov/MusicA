import {Image, Pressable, Text} from 'native-base';
import React from 'react';

interface ITrackCardProps {
  track: {
    id: string;
    title: string;
    title_short: string;
    preview: string;
    artist: {
      id: string;
      name: string;
    };
    album: {
      cover_medium: string;
    };
  };
  onPress: () => void;
}

const TrackCard = ({
  track: {id, title, title_short, preview, album, artist},
  onPress,
}: ITrackCardProps) => {
  return (
    <Pressable height="240px" width="160px" onPress={onPress}>
      <Image
        rounded="2xl"
        height="180px"
        source={{uri: album?.cover_medium}}
        alt={title}
      />
      <Text marginTop="8px" fontWeight="500" isTruncated noOfLines={1}>
        {title_short ?? title}
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

export default TrackCard;
