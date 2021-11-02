import {combineReducers} from 'redux';

import authReducer from './auth';
import notificationReducer from './notification';
import productReducer from './product';

export default combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  product: productReducer,
});
