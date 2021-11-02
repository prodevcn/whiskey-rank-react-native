const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createRequestTypes = base => {
  const requestType = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => {
    requestType[type] = `${base}_${type}`;
  });
  return requestType;
};

/** auth actions */
export const AUTH = createRequestTypes('AUTH');
export const LOGOUT = 'LOGOUT';

/** user actions */
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

/** product actions */
export const FETCH_PRODUCTS = createRequestTypes('FETCH_PRODUCTS');
