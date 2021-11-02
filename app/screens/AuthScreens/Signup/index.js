import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
// import Geolocation from '@react-native-community/geolocation';
import CountryPicker from 'react-native-country-picker-modal';
import DatePicker from 'react-native-date-picker';
import {
  Input,
  FormControl,
  WarningIcon,
  VStack,
  Icon,
  Button,
  Heading,
  Pressable,
  HStack,
  Divider,
  Select,
  CheckIcon,
  Box,
} from 'native-base';
import {Formik} from 'formik';

import Screen from '../../../layouts/Screen';

import {signup} from '../../../redux/actions/authAction';

import Eye from '../../../../assets/images/svg/eye.svg';
import EyeOff from '../../../../assets/images/svg/eye-off.svg';
import User from '../../../../assets/images/svg/profile.svg';
import Key from '../../../../assets/images/svg/key.svg';
import AtSign from '../../../../assets/images/svg/at-sign.svg';
import Mail from '../../../../assets/images/svg/mail.svg';
import Lock from '../../../../assets/images/svg/lock.svg';
import Location from '../../../../assets/images/svg/map-pin.svg';
import Man from '../../../../assets/images/svg/man.svg';
import Woman from '../../../../assets/images/svg/woman.svg';
// import Flag from '../../../../assets/images/svg/flag.svg';

const testEmailFormat = value => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value);
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }

  if (values.username && values.username.length < 6) {
    errors.username = 'Username must be more than 6 letters';
  }
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (values.fullName && values.fullName.length < 6) {
    errors.fullName = 'Full name must be more than 6 letters';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (values.email && !testEmailFormat(values.email)) {
    errors.email = 'Please input valid address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Password must be more than 6 letters';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password does not match';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  return errors;
};

const Signup = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {fetching, errorMessage} = useSelector(state => state.auth);

  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = data => {
    console.log(data);
    // dispatch(login(data));
  };

  useEffect(() => {
    // Geolocation.getCurrentPosition(info => {
    //   console.log(info);
    // });
  });

  return (
    <Screen
      backgroundImage
      hasHeader
      title="SIGN UP"
      hasScroll
      hasBackButton
      headerBackgroundColor="transparent">
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
          confirmPassword: '',
          fullName: '',
          location: '',
          gender: '',
          country: '',
          birth: new Date(),
        }}
        onSubmit={onSubmit}
        validate={validate}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <VStack flex={1} space={4}>
            <HStack w="100%" justifyContent="center">
              <Heading size="xl" color="amber.500" mb={5} mt={5}>
                WHISKEY RATING
              </Heading>
            </HStack>
            <FormControl isRequired isInvalid={'username' in errors}>
              <Input
                onBlur={handleBlur('username')}
                placeholder="Username"
                onChangeText={handleChange('username')}
                value={values.username}
                type="text"
                bg="rgba(255, 255, 255, 0.2)"
                autoCapitalize="none"
                keyboardType="default"
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
                {errors.username}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'email' in errors}>
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
                    as={<Mail width={20} height={20} color="white" />}
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
            <FormControl isRequired isInvalid={'confirmPassword' in errors}>
              <Input
                onBlur={handleBlur('confirmPassword')}
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                type={showConfirmPwd ? 'text' : 'password'}
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
                  showConfirmPwd ? (
                    <Pressable
                      onPress={() => {
                        setShowConfirmPwd(false);
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
                        setShowConfirmPwd(true);
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
                {errors.confirmPassword}
              </FormControl.ErrorMessage>
            </FormControl>
            <Divider my={5} bg="gray.500" />
            <FormControl isRequired isInvalid={'fullName' in errors}>
              <Input
                onBlur={handleBlur('fullName')}
                placeholder="Full name"
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                type="text"
                bg="rgba(255, 255, 255, 0.2)"
                autoCapitalize="none"
                keyboardType="default"
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
                {errors.fullName}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'location' in errors}>
              <Input
                onBlur={handleBlur('location')}
                placeholder="Location (Optional)"
                onChangeText={handleChange('location')}
                value={values.location}
                type="text"
                bg="rgba(255, 255, 255, 0.2)"
                autoCapitalize="none"
                keyboardType="default"
                color="white"
                borderWidth={0}
                InputLeftElement={
                  <Icon
                    as={<Location width={20} height={20} color="white" />}
                    size={5}
                    ml="3"
                    color=""
                  />
                }
              />
              <FormControl.ErrorMessage>
                {errors.lastName}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'gender' in errors}>
              <Select
                selectedValue={values.gender}
                accessibilityLabel="Select gender"
                placeholder="Select gender"
                bg="rgba(255, 255, 255, 0.2)"
                color="white"
                dropdownOpenIcon
                borderWidth={0}
                InputLeftElement={
                  <Icon
                    as={<User width={20} height={20} color="white" />}
                    size={5}
                    ml="3"
                    color=""
                  />
                }
                onValueChange={handleChange('gender')}
                onBlur={handleBlur('gender')}
                _selectedItem={{
                  bg: 'amber.500',
                  endIcon: <CheckIcon size={4} />,
                }}>
                <Select.Item label="Male" value="male" color="white" />
                <Select.Item label="Female" value="female" />
              </Select>
              <FormControl.ErrorMessage>
                {errors.gender}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'country' in errors}>
              <Box w="100%" bg="rgba(255, 255, 255, 0.2)" rounded="lg" p={3}>
                <CountryPicker
                  withEmoji={true}
                  withAlphaFilter={true}
                  withModal={true}
                  withFlag={true}
                  withFlagButton={true}
                  onSelect={value => {
                    console.log(value);
                  }}
                  countryCode={values.country}
                />
              </Box>
              <FormControl.ErrorMessage>
                {errors.country}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'birth' in errors}>
              <DatePicker
                modal
                open={open}
                date={values.birth}
                onConfirm={date => {
                  setOpen(false);
                  setFieldValue('birth', date);
                  // handleChange('birth');
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </FormControl>
            <HStack w="100%" justifyContent="space-between" alignItems="center">
              <Pressable
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <Heading size="xs" color="white">
                  Go to LOGIN !
                </Heading>
              </Pressable>
            </HStack>
            <Button
              onPress={handleSubmit}
              mb={10}
              colorScheme="amber"
              size="lg"
              isLoading={fetching ? true : false}>
              <Heading size="sm" color="white" bold={false}>
                CREATE ACCOUNT
              </Heading>
            </Button>
          </VStack>
        )}
      </Formik>
    </Screen>
  );
};

export default Signup;
