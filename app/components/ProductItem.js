/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Box,
  Image,
  Heading,
  HStack,
  Pressable,
  VStack,
  Text,
} from 'native-base';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/core';
// import {Rating, AirbnbRating} from 'react-native-ratings';
import Star from 'react-native-star-view';

import {formatRate, formatNumberForEvery3Digit} from '../utils';

import More from '../../assets/images/svg/more-vertical.svg';
import {IMAGE_URL} from '../constants/config';

const {width} = Dimensions.get('window');

const ProductItem = props => {
  const {data} = props;
  const navigation = useNavigation();
  return (
    <Pressable
      w="100%"
      my={0}
      onPress={() => {
        navigation.navigate('rate-detail', data);
      }}>
      <HStack w="100%" p={3} alignItems="flex-start" space={3}>
        <Box flex={2}>
          <Image
            source={{uri: IMAGE_URL + data.image_url}}
            size="sm"
            alt="logo"
          />
        </Box>
        <VStack
          flex={8}
          w="100%"
          borderBottomWidth={1}
          borderBottomColor="gray.300">
          <HStack justifyContent="space-between" w="100%">
            <Heading size="sm" color="black">
              {data.brand}
            </Heading>
            <Pressable
              onPress={() => {
                console.log('onPress');
              }}>
              <More with={20} height={20} color="#777" />
            </Pressable>
          </HStack>
          <Text fontSize={16} color="gray.400">
            {data.name}
          </Text>
          <Text fontSize={16} color="gray.400">
            {data.type}
          </Text>
          <HStack space={2} w="100%" alignItems="center">
            <Star
              score={data.average_rating}
              style={{
                width: width * 0.2,
                height: width * 0.04,
                marginVertical: 3,
              }}
            />
            <Text color="gray.600" fontSize={12}>
              {formatRate(data.average_rating)}
            </Text>
          </HStack>
          <Text color="gray.500" fontSize={12}>
            {formatNumberForEvery3Digit(data.rating_count)} ratings
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ProductItem;
