import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from 'native-base';
import axios from '../../utils/axios';
import PageWrapper from '../../components/PageWrapper';

const Home = () => {
  const [chart, setChart] = useState({});

  const getChart = async () => {
    const {data} = await axios.get('/chart');
    setChart(data?.data);
  };

  useEffect(() => {
    getChart();
  }, []);

  return (
    <PageWrapper>
      <Text fontSize="3xl" fontWeight="500">
        Welcome to the MusicA
      </Text>
    </PageWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
