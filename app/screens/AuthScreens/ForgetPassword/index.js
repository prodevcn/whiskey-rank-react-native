import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'native-base';

import Screen from '../../../layouts/Screen';

import styles from './styles.js';

const ForgetPassword = props => {
  useEffect(() => {
    console.log('[SCREEN]:[UPDATED]');
  });

  return (
    <Screen>
      <Text>Activity Screen</Text>
    </Screen>
  );
};

export default ForgetPassword;
