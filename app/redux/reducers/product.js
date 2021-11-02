import {FETCH_PRODUCTS} from '../../constants/actions';

const INITIAL_STATE = {
  fetching: false,
  products: [],
  errorMessage: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS.REQUEST:
      return {
        ...state,
        fetching: true,
        errorMessage: null,
      };
    case FETCH_PRODUCTS.FAILURE:
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload.message,
      };
    case FETCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        fetching: false,
        errorMessage: null,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
