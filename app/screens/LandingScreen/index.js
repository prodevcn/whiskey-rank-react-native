import React, {useEffect} from 'react';
import {
  NativeBaseProvider,
  HStack,
  Pressable,
  Text,
  VStack,
  Heading,
  Box,
  Image,
} from 'native-base';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';

import ChevronsRight from '../../../assets/images/svg/chevrons-right.svg';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

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
  const {authenticated} = useSelector(state => state.auth);
  const navigation = useNavigation();
  const doContinue = () => {
    if (authenticated) {
      navigation.navigate('main');
    } else {
      navigation.navigate('auth');
    }
  };

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
        <VStack
          justifyContent="space-around"
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
          <Pressable
            variant="ghost"
            p={0}
            onPress={() => {
              doContinue();
            }}>
            <HStack space={1} justifyContent="center" alignItems="center">
              <Text fontSize={14} color="primary.400">
                Please tab to continue
              </Text>
              <ChevronsRight with={14} height={14} color="#22d3ee" />
            </HStack>
          </Pressable>
          <Image
            style={styles.bottle_bg}
            source={require('../../../assets/images/bottles.png')}
            alt="logo"
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default LandingScreen;
