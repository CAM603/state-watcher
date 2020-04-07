import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../actions/userAction';

const initialState = {
    username: '',
    points: 0,
    about: ''
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_START:
            return {
                ...state,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                points: action.payload.points,
                about: action.payload.about
            }
        case GET_USER_FAILURE:
            return {
                ...state
            }
        case UPDATE_USER_START:
            return {
                ...state
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}