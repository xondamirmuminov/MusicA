import {Image, Pressable, Text} from 'native-base';
import React from 'react';

interface IArtistCardProps {
  artist: {
    id: string;
    name: string;
    picture_medium: string;
  };
  marginRight?: string | number;
  onPress: () => void;
}

const ArtistCard = ({
  artist: {name, picture_medium},
  marginRight,
  onPress,
}: IArtistCardProps) => {
  return (
    <Pressable
      height="150px"
      width="120px"
      onPress={onPress}
      marginRight={marginRight ?? '20px'}>
      <Image
        rounded="full"
        height="120px"
        source={{uri: picture_medium}}
        alt={name}
      />
      <Text
        textAlign="center"
        marginTop="8px"
        fontWeight="500"
        isTruncated
        noOfLines={1}>
        {name}
      </Text>
    </Pressable>
  );
};

export default ArtistCard;
