/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Dimensions} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {
  Pressable,
  Box,
  HStack,
  Input,
  View,
  ScrollView,
  Icon,
  VStack,
} from 'native-base';
import {RNCamera} from 'react-native-camera';

import {getAllProducts} from '../../../../redux/actions/productAction';

import Screen from '../../../../layouts/Screen';
import ProductItem from '../../../../components/ProductItem';
import PageController from '../../../../components/PageController';

// import Scan from '../../../../../assets/images/svg/maximize.svg';
import Search from '../../../../../assets/images/svg/discover.svg';
import Remove from '../../../../../assets/images/svg/x-circle.svg';

const DiscoverHome = props => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product);
  const ref = useRef();
  const [onCamera, setCamera] = useState(false);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getAllProducts({page, perPage, search}));
    console.log('[SCREEN]:[UPDATED]');
  }, []);

  useEffect(() => {
    dispatch(getAllProducts({page: 0, perPage: perPage, search: search}));
    console.log('');
  }, [search, perPage]);

  useEffect(() => {
    dispatch(getAllProducts({page, perPage, search}));
  }, [page]);

  return (
    <Screen
      title="Discover"
      headerBackgroundColor="amber.500"
      hasHeader={onCamera ? false : true}
      onCamera={onCamera ? true : false}
      fullScreen>
      {onCamera ? (
        <View bg="black" style={styles.cameraView}>
          <RNCamera
            ref={ref}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={data => {
              console.log(data);
              setCamera(false);
            }}
            // barCodeTypes={RNCamera.Constants.BarCodeType.qr}
          />
        </View>
      ) : (
        <VStack flex={1}>
          <Box bg="amber.500" px="5%" py={3} w="100%">
            <HStack
              w="100%"
              bg="white"
              rounded="lg"
              justifyContent="space-between">
              <Input
                placeholder="Whiskey, breweries, or venues"
                value={search}
                onChangeText={text => {
                  setSearch(text);
                }}
                InputLeftElement={
                  <Pressable onPress>
                    <Icon
                      as={<Search width={20} height={20} color="black" />}
                      size={5}
                      ml={3}
                    />
                  </Pressable>
                }
                InputRightElement={
                  search !== '' && (
                    <Pressable
                      onPress={() => {
                        setSearch('');
                      }}>
                      <Icon
                        as={<Remove width={20} height={20} color="black" />}
                        size={5}
                        mr={3}
                      />
                    </Pressable>
                  )
                }
                size="sm"
                flex={1}
              />
              {/* <Pressable
                flex={1}
                bg="white"
                alignItems="center"
                justifyContent="center"
                roundedRight="lg"
                align
                borderLeftColor="gray.200"
                borderLeftWidth={1}
                variant="solid"
                onPress={() => {
                  setCamera(true);
                }}>
                <Scan width={24} height="24" color="#000" />
              </Pressable> */}
            </HStack>
          </Box>
          <Box flex={1}>
            <PageController
              page={page}
              perPage={perPage}
              onNext={() => {
                setPage(prev => prev + 1);
              }}
              onPrev={() => {
                setPage(prev => prev - 1);
              }}
              onChangePerPage={count => {
                setPerPage(Number(count));
              }}
              disableNextPageBtn={products.length === perPage ? false : true}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              px="5%"
              flex={1}
              pt={3}
              mb={3}>
              {products.map((product, index) => (
                <ProductItem key={product.id} data={product} />
              ))}
            </ScrollView>
          </Box>
        </VStack>
      )}
    </Screen>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
  cameraView: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 999,
  },
});

export default DiscoverHome;
