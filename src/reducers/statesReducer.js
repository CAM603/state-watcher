import {
    GET_STATES_START,
    GET_STATES_SUCCESS,
    GET_STATES_FAILURE
} from '../actions/statesAction';

const initialState = {
    states: []
}

export const states = (state = initialState, action) => {
    switch(action.type) {
        case GET_STATES_START:
            return {
                ...state,
            }
        case GET_STATES_SUCCESS:
            return {
                ...state,
                states: action.payload
            }
        case GET_STATES_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}