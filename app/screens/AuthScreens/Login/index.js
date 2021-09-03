import React from 'react';
import {
  // Button,
  // CheckIcon,
  // FormControl,
  // Image,
  // Input,
  // Select,
  // VStack,
  View,
  Heading,
} from 'native-base';
// import {Formik} from 'formik';
// import {useDispatch, useSelector} from 'react-redux';
// import {StyleSheet, Dimensions} from 'react-native';

// import {login} from '../../../redux/actions/authAction';

// const validate = values => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   }
//   return errors;
// };

import Screen from '../../../layouts/Screen';

const Login = props => {
  // const dispatch = useDispatch();
  // const {fetching, errorMessage} = useSelector(state => state.auth);

  // const onSubmit = data => {
  //   dispatch(login(data));
  // };

  return (
    <Screen hasHeader title="Login">
      <Heading>Login</Heading>
    </Screen>
  );
};

export default Login;
