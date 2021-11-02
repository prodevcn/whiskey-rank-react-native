import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Input,
  FormControl,
  WarningIcon,
  VStack,
  Icon,
  Button,
  Heading,
  Pressable,
  Box,
  HStack,
  Text,
} from 'native-base';
import {Formik} from 'formik';

import Screen from '../../../layouts/Screen';

import {login} from '../../../redux/actions/authAction';

import Eye from '../../../../assets/images/svg/eye.svg';
import EyeOff from '../../../../assets/images/svg/eye-off.svg';
import User from '../../../../assets/images/svg/profile.svg';
import Lock from '../../../../assets/images/svg/lock.svg';

const testEmailFormat = value => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value);
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }

  if (values.email && !testEmailFormat(values.email)) {
    errors.email = 'Please input valid address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  // if (values.password && values.password.length < 6) {
  //   errors.password = 'Password must be more than 6 letters';
  // }
  return errors;
};

const Login = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {fetching, errorMessage} = useSelector(state => state.auth);

  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = data => {
    dispatch(login(data));
  };

  useEffect(() => {
    console.log('[SCREEN]:[UPDATED]');
  });

  return (
    <Screen
      backgroundImage
      hasHeader
      title="LOGIN"
      errorMessage={errorMessage}
      headerBackgroundColor="transparent">
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmit}
        validate={validate}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <VStack flex={1} space={4} justifyContent="space-around">
            <VStack space={4}>
              <HStack w="100%" justifyContent="center">
                <Heading size="xl" color="amber.500" mb={5}>
                  WHISKEY RATING
                </Heading>
              </HStack>
              <FormControl isRequired isInvalid={'email' in errors}>
                <FormControl.Label>
                  <Text color="amber.500"> Email </Text>
                </FormControl.Label>
                <Input
                  onBlur={handleBlur('email')}
                  placeholder="email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  type="email"
                  bg="rgba(255, 255, 255, 0.2)"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  color="white"
                  borderWidth={0}
                  InputLeftElement={
                    <Icon
                      as={<User width={20} height={20} color="white" />}
                      size={5}
                      ml="3"
                      color=""
                    />
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'password' in errors}>
                <FormControl.Label>
                  <Text color="amber.500"> Password </Text>
                </FormControl.Label>
                <Input
                  onBlur={handleBlur('password')}
                  placeholder="password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  type={showPwd ? 'text' : 'password'}
                  bg="rgba(255, 255, 255, 0.2)"
                  autoCapitalize="none"
                  color="white"
                  borderWidth={0}
                  InputLeftElement={
                    <Icon
                      as={<Lock width={20} height={20} color="white" />}
                      size={5}
                      ml="3"
                    />
                  }
                  InputRightElement={
                    showPwd ? (
                      <Pressable
                        onPress={() => {
                          setShowPwd(false);
                        }}>
                        <Icon
                          as={<EyeOff width={20} height={20} color="white" />}
                          size={5}
                          mr="3"
                        />
                      </Pressable>
                    ) : (
                      <Pressable
                        onPress={() => {
                          setShowPwd(true);
                        }}>
                        <Icon
                          as={<Eye width={20} height={20} color="white" />}
                          size={5}
                          mr="3"
                        />
                      </Pressable>
                    )
                  }
                />
                <FormControl.ErrorMessage leftIcon={<WarningIcon size="xs" />}>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center">
                <Pressable>
                  <Heading
                    size="xs"
                    color="white"
                    my={5}
                    alignSelf="flex-start">
                    Forget Password ?
                  </Heading>
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate('signup');
                  }}>
                  <Heading size="xs" color="amber.500">
                    SIGN UP !
                  </Heading>
                </Pressable>
              </HStack>
            </VStack>
            <Box>
              <Button
                onPress={handleSubmit}
                colorScheme="amber"
                size="lg"
                isLoading={fetching ? true : false}>
                <Heading size="sm" color="white" bold={false}>
                  LOGIN
                </Heading>
              </Button>
            </Box>
          </VStack>
        )}
      </Formik>
    </Screen>
  );
};

export default Login;
