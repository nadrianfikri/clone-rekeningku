import { GET_ALL_PRICES } from '../../actions/pricesAction';

const initialState = {
  getAllPricesResult: false,
  getAllPricesLoading: false,
  getAllPricesErr: false,
};

const prices = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRICES:
      return {
        ...state,
        getAllPricesResult: action.payload.data,
        getAllPricesLoading: action.payload.loading,
        getAllPricesErr: action.payload.errMsg,
      };

    default:
      return state;
  }
};

export default prices;
