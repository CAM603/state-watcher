import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/loginReducer';

const initialState = {
    loading: false,
    error: '',
    user_id: ''
}

export const login = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload.user_id
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}