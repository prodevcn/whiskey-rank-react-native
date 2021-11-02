import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH, LOGOUT, SET_USER, REMOVE_USER} from '../../constants/actions';
import {CreateAxios} from '../../utils';

/** check auth */
export const checkAuth = () => async dispatch => {
  dispatch({type: AUTH.REQUEST});

  const token = await AsyncStorage.getItem('token');
  const user = await AsyncStorage.getItem('user');

  if (token) {
    dispatch({
      type: SET_USER,
      payload: {user: JSON.parse(user), token: token},
    });
    dispatch({type: AUTH.SUCCESS});
  } else {
    dispatch({type: AUTH.FAILURE});
  }
};
/** signup */
export const signup = userData => async dispatch => {
  dispatch({type: AUTH.REQUEST});
};

/** login */
export const login = userData => async dispatch => {
  dispatch({type: AUTH.REQUEST, payload: ''});
  return CreateAxios().then(axios =>
    axios
      .post('/auth/login', userData)
      .then(async res => {
        if (res?.message) {
          dispatch({type: AUTH.FAILURE, payload: res.message});
          setTimeout(() => {
            dispatch({
              type: AUTH.FAILURE,
              payload: null,
            });
          }, 2000);
        } else if (res?.data?.data) {
          console.log(res.data);
          await AsyncStorage.setItem('token', res.data.data.token);
          await AsyncStorage.setItem(
            'user',
            JSON.stringify(res.data.data.user),
          );
          dispatch({
            type: SET_USER,
            payload: {
              user: res.data.data.user,
              token: res.data.data.token,
            },
          });
          dispatch({type: AUTH.SUCCESS});
        }
      })
      .catch(err => {
        if (err.response) {
          dispatch({
            type: AUTH.FAILURE,
            payload: err.response.data?.message,
          });
          setTimeout(() => {
            dispatch({
              type: AUTH.FAILURE,
              payload: null,
            });
          }, 2000);
        } else {
          dispatch({
            type: AUTH.FAILURE,
            payload:
              'This device can not connect to server, Please try again after a few minutes.',
          });
          setTimeout(() => {
            dispatch({
              type: AUTH.FAILURE,
              payload: null,
            });
          }, 2000);
        }
      }),
  );
};

/** logout */
export const logout = () => dispatch => {
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('token');
  dispatch({type: REMOVE_USER});
  dispatch({type: LOGOUT});
};
