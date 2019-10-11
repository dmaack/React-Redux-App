import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';



const initialState = {
    base: 'USD',
    amount: 0,
    rates: {}, 
    isLoading: false, //takes care of our loading
    error: '' //our failed state -- or -- error message
}

export const reducer = (state = initialState, action) => {

    console.log('these are the reducers state and action', state, action)

    switch (action.type) {
        case START_FETCHING:
            return {
                ...state, //what do we want to happen when we start fetching 
                isLoading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state, //return state
                amount: action.payload,
                rates: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Server Error'
            }
        default:
            return state;
    }
}
