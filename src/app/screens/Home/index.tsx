import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text, VStack} from 'native-base';
import axios from '../../utils/axios';
import PageWrapper from '../../components/PageWrapper';
import TrackCard from '../../components/Cards/TrackCard';
import SoundPlayer from 'react-native-sound-player';
import BottomAudio from '../../components/BottomAudio';
import ArtistCard from '../../components/Cards/ArtistCard';
import AlbumCard from '../../components/Cards/AlbumCard';
import PodcastCard from '../../components/Cards/PodcastCard';
import PlaylistCard from '../../components/Cards/PlaylistCard';

const Home = () => {
  const [tracks, setTracks] = useState<any>([]);
  const [artists, setArtists] = useState<any>([]);
  const [albums, setAlbums] = useState<any>([]);
  const [podcasts, setPodcasts] = useState<any>([]);
  const [playlists, setPlaylists] = useState<any>([]);
  const [selectedTrack, setSelectedTrack] = useState<any>({});

  const getChart = async () => {
    const {data} = await axios.get('/chart/0');
    setTracks(data?.tracks?.data);
    setArtists(data?.artists?.data);
    setAlbums(data?.albums?.data);
    setPodcasts(data?.podcasts?.data);
    setPlaylists(data?.playlists?.data);
  };

  const handlePlayTrack = (item: any) => {
    setSelectedTrack(item);
    try {
      SoundPlayer.playUrl(item?.preview);
      SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
        if (success) {
          setSelectedTrack({});
        }
      });
    } catch (error) {
      console.log('cannot play the sound file', error);
    }
  };

  const pauseHandler = async () => {
    try {
      SoundPlayer.pause();
    } catch (error) {
      console.log('cannot play the sound file', error);
    }
  };

  const playHandler = async () => {
    try {
      SoundPlayer.resume();
    } catch (error) {
      console.log('cannot play the sound file', error);
    }
  };

  const nextHandler = async () => {
    const index =
      tracks.findIndex((item: any) => item?.id === selectedTrack?.id) + 1;

    if (index !== tracks?.length) {
      const nextTrack = tracks[index];

      setSelectedTrack(nextTrack);

      try {
        SoundPlayer.playUrl(nextTrack?.preview);
        SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
          if (success) {
            setSelectedTrack({});
          }
        });
      } catch (error) {
        console.log('cannot play the sound file', error);
      }
    }
  };

  const prevHandler = async () => {
    const index =
      tracks.findIndex((item: any) => item?.id === selectedTrack?.id) - 1;

    if (selectedTrack?.id !== tracks[0]?.id) {
      const nextTrack = tracks[index];

      setSelectedTrack(nextTrack);

      try {
        SoundPlayer.playUrl(nextTrack?.preview);
        SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
          if (success) {
            setSelectedTrack({});
          }
        });
      } catch (error) {
        console.log('cannot play the sound file', error);
      }
    }
  };

  const renderTrack = ({item}: any) => (
    <TrackCard
      key={item?.id}
      track={item}
      onPress={() => handlePlayTrack(item)}
    />
  );

  const renderArtist = ({item}: any) => (
    <ArtistCard key={item?.id} artist={item} onPress={() => {}} />
  );

  const renderAlbum = ({item}: any) => (
    <AlbumCard key={item?.id} album={item} onPress={() => {}} />
  );

  const renderPodcast = ({item}: any) => (
    <PodcastCard key={item?.id} podcast={item} onPress={() => {}} />
  );

  const renderPlaylist = ({item}: any) => (
    <PlaylistCard key={item?.id} playlist={item} onPress={() => {}} />
  );

  useEffect(() => {
    getChart();
  }, []);

  return (
    <>
      <PageWrapper>
        <VStack space="20px">
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Top Tracks
            </Text>
            <FlatList
              renderItem={renderTrack}
              data={tracks}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            />
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Top Artists
            </Text>
            <FlatList
              renderItem={renderArtist}
              data={artists}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            />
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Top Albums
            </Text>
            <FlatList
              renderItem={renderAlbum}
              data={albums}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            />
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Top Playlists
            </Text>
            <FlatList
              renderItem={renderPlaylist}
              data={playlists}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            />
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Top Podcasts
            </Text>
            <FlatList
              renderItem={renderPodcast}
              data={podcasts}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            />
          </VStack>
        </VStack>
      </PageWrapper>
      {selectedTrack?.preview ? (
        <BottomAudio
          track={selectedTrack}
          pauseHandler={pauseHandler}
          playHandler={playHandler}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      ) : null}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
});
