import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';



const initialState = {
    rates: {},
    isFetching: false, //takes care of our loading
    error: '' //our failed state -- or -- error message
}

export const reducer = (state = initialState, action) => {
    
    console.log('these are the reducers state and action', state, action)

    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                rates: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
