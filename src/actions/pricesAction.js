import { API } from '../config/api';

export const GET_ALL_PRICES = 'GET_ALL_PRICES';

export const getAllPrices = () => {
  return (dispatch) => {
    console.log('2.masuk action');
    // loading
    dispatch({
      type: GET_ALL_PRICES,
      payload: {
        loading: true,
        data: false,
        errorMsg: false,
      },
    });

    // get api
    API.get('/price')
      .then((res) => {
        console.log('3. success get data', res.data);
        // success
        dispatch({
          type: GET_ALL_PRICES,
          payload: {
            loading: false,
            data: res.data,
            errorMsg: false,
          },
        });
      })
      .catch((err) => {
        console.log('3. failed get data', err.message);
        //failed
        dispatch({
          type: GET_ALL_PRICES,
          payload: {
            loading: false,
            data: false,
            errorMsg: err.message,
          },
        });
      });
  };
};
