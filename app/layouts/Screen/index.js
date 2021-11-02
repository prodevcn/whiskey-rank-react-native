import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Alert,
  ArrowBackIcon,
  Box,
  Center,
  Fab,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Spinner,
  View,
} from 'native-base';
import {Platform, StatusBar} from 'react-native';

import Header from '../../containers/Header';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const Screen = ({
  title,
  hasLogo,
  hasBackButton,
  hasHeader,
  hasScroll,
  gradient,
  fullScreen,
  innerStyle,
  isLoading,
  errorMessage,
  children,
  onCamera,
  backgroundImage,
  headerBackgroundColor,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NativeBaseProvider config={config}>
      {backgroundImage ? (
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={require('../../../assets/images/bg.jpg')}>
          {hasHeader && (
            <Header
              title={title}
              hasLogo={hasLogo}
              hasBackButton={hasBackButton}
              headerBackgroundColor={headerBackgroundColor}
            />
          )}
          <Box
            flex={1}
            w="100%"
            px={fullScreen || onCamera ? '0%' : '5%'}
            style={innerStyle}
            safeAreaTop={Platform.OS === 'ios' && !fullScreen ? 8 : 0}>
            {onCamera && (
              <Fab
                placement="top-left"
                onPress={() => {
                  navigation.goBack();
                }}
                icon={<ArrowBackIcon size={6} color="white" />}
                size={10}
              />
            )}
            {hasScroll ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                {children}
              </ScrollView>
            ) : (
              <View flex={1}>{children}</View>
            )}
          </Box>
        </ImageBackground>
      ) : (
        <Box
          flex={1}
          w="100%"
          bg={
            gradient && {
              linearGradient: {
                colors: ['orange.400', 'amber.300'],
                start: [0, 0],
                end: [0, 1],
              },
            }
          }
          style={innerStyle}
          safeAreaTop={Platform.OS === 'ios' && !fullScreen ? 8 : 0}>
          {hasHeader && (
            <Header
              title={title}
              hasLogo={hasLogo}
              headerBackgroundColor={headerBackgroundColor}
              hasBackButton={hasBackButton}
            />
          )}
          <Box flex={1} px={fullScreen || onCamera ? '0%' : '5%'}>
            {onCamera && (
              <Fab
                placement="top-left"
                onPress={() => {
                  navigation.goBack();
                }}
                icon={<ArrowBackIcon size={6} color="white" />}
                size={10}
              />
            )}

            {hasScroll ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                {children}
              </ScrollView>
            ) : (
              <View flex={1}>{children}</View>
            )}
          </Box>
        </Box>
      )}
      {errorMessage !== null && errorMessage !== undefined && (
        <HStack position="absolute" w="100%">
          <Alert status="error" w="100%">
            <Alert.Icon />
            <Alert.Title flexShrink={1}>{errorMessage}</Alert.Title>
          </Alert>
        </HStack>
      )}
      {isLoading && (
        <Box position="absolute" w="100%" h="100%" bg="black" opacity={0.8}>
          <Center flex={1}>
            <Spinner accessibilityLabel="Loading posts" />
          </Center>
        </Box>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Screen;
