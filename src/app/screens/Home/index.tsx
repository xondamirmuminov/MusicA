import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'native-base';
import axios from '../../utils/axios';
import PageWrapper from '../../components/PageWrapper';
import TrackCard from '../../components/Cards/TrackCard';
import SoundPlayer from 'react-native-sound-player';
import BottomAudio from '../../components/BottomAudio';

const Home = () => {
  const [chart, setChart] = useState({});
  const [selectedTrack, setSelectedTrack] = useState({});

  const getChart = async () => {
    const {data} = await axios.get('/chart/0');
    setChart(data);
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

  const renderTrack = ({item}: any) => (
    <TrackCard
      key={item?.id}
      track={item}
      onPress={() => handlePlayTrack(item)}
    />
  );

  useEffect(() => {
    getChart();
  }, []);

  return (
    <>
      <PageWrapper>
        <Text fontSize="2xl" fontWeight="500">
          Top Tracks
        </Text>
        {/* {chart?.tracks?.data?.map(track => (
        <Text>{track?.title}</Text>
      ))} */}
        <FlatList
          renderItem={renderTrack}
          data={chart?.tracks?.data}
          horizontal
        />
      </PageWrapper>
      {selectedTrack?.preview ? (
        <BottomAudio
          track={selectedTrack}
          pauseHandler={pauseHandler}
          playHandler={playHandler}
        />
      ) : null}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
