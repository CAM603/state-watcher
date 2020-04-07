import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/loginAction';

const initialState = {
    loading: false,
    error: '',
    user_id: 0
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
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                user_id: action.payload.user_id
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