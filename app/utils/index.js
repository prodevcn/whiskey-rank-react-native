import client from 'axios';
import {API_URL} from '../constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthorizationHeader = () =>
  new Promise(async resolve => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      resolve('Bearer ' + token);
    } else {
      resolve(null);
    }
  });

const checkFirstVisit = async () => {
  const visited = await AsyncStorage.getItem('visited');
  if (visited) {
    return true;
  } else {
    return false;
  }
};

export const CreateAxios = () =>
  new Promise(resolve => {
    getAuthorizationHeader().then(async authHeader => {
      const axios = client.create({
        baseURL: API_URL,
        validateStatus: status => status >= 200 && status < 300,
        headers: {'Content-Type': 'application/json'},
        timeout: 1000 * 5,
      });

      axios.interceptors.request.use(
        config => {
          if (authHeader) {
            config.headers.Authorization = authHeader;
          }
          return config;
        },
        error => {
          throw {boundaryId: 'FETCH_REQUEST', details: error};
        },
      );

      axios.interceptors.response.use(
        response => {
          if (!response.data) {
            throw {boundaryId: 'reachResponse', details: response};
          } else {
            return response;
          }
        },
        error => {
          if (error.response ? error.response.status === 401 : false) {
            return {message: 'Unauthorized credential'};
          }
        },
      );
      resolve(axios);
    });
  });
