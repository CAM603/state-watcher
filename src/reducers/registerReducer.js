import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/registerAction';

const initialState = {
    loading: false,
    error: '',
    username: ''
}

export const register = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START: 
            return {
                ...state,
                loading: true,
                error: ''
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                username: action.payload.username
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}