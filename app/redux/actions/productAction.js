import {CreateAxios} from '../../utils';
import {FETCH_PRODUCTS} from '../../constants/actions';

export const getAllProducts = data => dispatch => {
  dispatch({type: FETCH_PRODUCTS.REQUEST});
  return CreateAxios().then(axios =>
    axios
      .get('/product/all')
      .then(async res => {
        if (res.data) {
          console.log('[SUCCESS]:[GET_ALL_PRODUCTS]');
          dispatch({type: FETCH_PRODUCTS.SUCCESS, payload: res.data});
        }
      })
      .catch(err => {
        console.log(err);
      }),
  );
};
