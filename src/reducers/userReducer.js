import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from '../actions/userAction';

const initialState = {

}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_START:
            return {
                ...state,
            }
        case GET_USER_SUCCESS:
            return {
                ...state
            }
        case GET_USER_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}