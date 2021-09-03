import React, {useState, useEffect} from 'react';
import {
  NativeBaseProvider,
  Center,
  View,
  Text,
  VStack,
  Heading,
  Box,
  Image,
} from 'native-base';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  logo: {
    width: width * 0.45,
    height: width * 0.45,
  },
  bottle_bg: {
    width: width * 0.6,
    height: width * 0.6,
  },
});

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const LandingScreen = props => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NativeBaseProvider config={config}>
      <Box
        flex={1}
        alignItems="center"
        bg={{
          linearGradient: {
            colors: ['orange.400', 'amber.300'],
            start: [0, 0],
            end: [0, 1],
          },
        }}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
          mt={20}
          alt="logo"
        />
        <Box
          flex={1}
          mt={5}
          mb={10}
          mx="10%"
          w="80%"
          pt={10}
          alignItems="center"
          borderTopRightRadius={20}
          borderTopLeftRadius={100}
          borderBottomRightRadius={100}
          borderBottomLeftRadius={20}
          backgroundColor="rgba(0, 0, 0, 0.4)">
          <Heading size="lg" color="white">
            WHISKEY RATING
          </Heading>
          <Image
            style={styles.bottle_bg}
            source={require('../../../assets/images/bottles.png')}
            alt="logo"
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default LandingScreen;
