import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export const fetchRates = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
  .get('https://api.exchangeratesapi.io/latest?base=USD')
  .then(res => {
      console.log('this is the data from api request', res)
      dispatch({ type: FETCH_SUCCESS, payload: res.data.rates })
  })
  .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
}

export const updateAmount = amount => dispatch => {
    dispatch({ type: UPDATE_AMOUNT, payload: amount })
}