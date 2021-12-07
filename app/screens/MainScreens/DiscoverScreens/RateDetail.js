/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  Image,
} from 'native-base';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Screen from '../../../layouts/Screen';

import {IMAGE_URL} from '../../../constants/config';
import Upload from '../../../../assets/images/svg/upload.svg';
import ImageIcon from '../../../../assets/images/svg/image.svg';
import ChevronRight from '../../../../assets/images/svg/chevron-right.svg';

const RateDetail = props => {
  const {data} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ref = useRef('rate-slider');
  const [rate, setRate] = useState(0);
  const [onScroll, setScroll] = useState(false);

  const sliderSteps = [
    {index: 0, stepLabel: '0', prefix: 'prefix', suffix: 'suffix'},
    {index: 1, stepLabel: '1', prefix: 'prefix', suffix: 'suffix'},
    {index: 2, stepLabel: '2', prefix: 'prefix', suffix: 'suffix'},
    {index: 3, stepLabel: '3', prefix: 'prefix', suffix: 'suffix'},
    {index: 4, stepLabel: '4', prefix: 'prefix', suffix: 'suffix'},
    {index: 5, stepLabel: '5', prefix: 'prefix', suffix: 'suffix'},
  ];

  const enableScroll = () => {
    setScroll(true);
  };

  const disableScroll = () => {
    setScroll(false);
  };

  useEffect(() => {
    console.log(props.route.params.image_url);
  }, []);

  return (
    <Screen
      hasHeader
      headerBackgroundColor="amber.500"
      title="Rate"
      hasBackButton>
      <VStack justifyContent="space-between" flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack w="100%" space={3}>
            <HStack w="100%" space={3} mt={5}>
              <Image
                flex={1}
                size="sm"
                alt="whisky image"
                source={{
                  uri: IMAGE_URL + props.route.params.image_url,
                }}
              />
              <VStack space={2} flex={4}>
                <Heading size="xs" color="black">
                  {props.route.params.brand}
                </Heading>
                <Text color="gray.400" fontSize={12} w="100%">
                  {props.route.params.name}
                </Text>
              </VStack>
            </HStack>
            <HStack w="100%" space={3} justifyContent="space-between">
              <Text color="gray.400" fontSize={14}>
                How was it? Leave a note
              </Text>
              <Button px={2} borderColor="gray.300" variant="outline">
                <VStack alignItems="center">
                  <ImageIcon width={24} height={24} color="#333" />
                  <Text fontSize={10}>Add Photo</Text>
                </VStack>
              </Button>
            </HStack>
            <Divider bg="gray.300" my={2} />
            <HStack w="100%" justifyContent="space-between">
              <Heading color="black" size="sm">
                RATING
              </Heading>
              <Text color="amber.600">{(rate / 2).toFixed(1)}</Text>
            </HStack>
            <Box w="100%" justifyContent="center" alignItems="center">
              <MultiSlider
                onValuesChangeStart={disableScroll}
                onValuesChangeFinish={enableScroll}
                onValuesChange={value => {
                  setRate(value);
                  console.log(value);
                }}
                selectedStyle={{backgroundColor: '#f59e0b'}}
                step={1}
                showSteps={true}
                showStepLabels={true}
                snapped={true}
                smoothSnapped={true}
                stepsAs={sliderSteps}
              />
            </Box>
            <Divider bg="gray.300" my={2} />
            <HStack w="100%" alignItems="center">
              <Heading color="black" size="sm">
                SERVING STYLES
              </Heading>
              <ChevronRight width={20} height={20} color="black" />
            </HStack>
            <Divider bg="gray.300" my={2} />
            <HStack w="100%" alignItems="center">
              <Heading color="black" size="sm">
                TAG FRIENDS
              </Heading>
              <ChevronRight width={20} height={20} color="black" />
            </HStack>
            <Divider bg="gray.300" my={2} />
            <HStack w="100%" alignItems="center">
              <Heading color="black" size="sm">
                LOCATION
              </Heading>
              <ChevronRight width={20} height={20} color="black" />
            </HStack>
            <Divider bg="gray.300" my={2} />
          </VStack>
        </ScrollView>
        <HStack w="100%" space={2} py={3}>
          <Button flex={1} bg="gray.300">
            <Upload width={24} height={24} color="#000" />
          </Button>
          <Button flex={10} bg="success.500">
            <Heading size="sm" color="white">
              CHECK-IN
            </Heading>
          </Button>
        </HStack>
      </VStack>
    </Screen>
  );
};

export default RateDetail;
