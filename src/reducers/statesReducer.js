import {
    GET_STATES_START,
    GET_STATES_SUCCESS,
    GET_STATES_FAILURE,
    GET_STATE_START,
    GET_STATE_SUCCESS,
    GET_STATE_FAILURE,
    GET_STATE_ISSUES_START,
    GET_STATE_ISSUES_SUCCESS,
    GET_STATE_ISSUES_FAILURE,
    
} from '../actions/statesAction';

const initialState = {
    states: [],
    currentState: {},
    currentStateIssues: [],
    loadingStates: false,
    loadingState: false,
    loadingIssues: false
}

export const states = (state = initialState, action) => {
    switch(action.type) {
        case GET_STATES_START:
            return {
                ...state,
                loadingStates: true
            }
        case GET_STATES_SUCCESS:
            return {
                ...state,
                states: action.payload,
                loadingStates: false
            }
        case GET_STATES_FAILURE:
            return {
                ...state,
                loadingStates: false
            }
        case GET_STATE_START:
            return {
                ...state,
                loadingState: true
            }
        case GET_STATE_SUCCESS:
            return {
                ...state,
                currentState: action.payload,
                loadingState: false
            }
        case GET_STATE_FAILURE:
            return {
                ...state,
                loadingState: false
            }
        case GET_STATE_ISSUES_START:
            return {
                ...state,
                loadingIssues: true
            }
        case GET_STATE_ISSUES_SUCCESS:
            return {
                ...state,
                currentStateIssues: action.payload,
                loadingIssues: false
            }
        case GET_STATE_ISSUES_FAILURE:
            return {
                ...state,
                loadingIssues: false
            }
        default:
            return state
    }
}