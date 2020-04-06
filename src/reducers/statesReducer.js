import {
    GET_STATES_START,
    GET_STATES_SUCCESS,
    GET_STATES_FAILURE,
    GET_STATE_START,
    GET_STATE_SUCCESS,
    GET_STATE_FAILURE,
    GET_STATE_ISSUES_START,
    GET_STATE_ISSUES_SUCCESS,
    GET_STATE_ISSUES_FAILURE
} from '../actions/statesAction';

import {
    ADD_ISSUE_START,
    ADD_ISSUE_SUCCESS,
    ADD_ISSUE_FAILURE,
    LIKE_ISSUE_START,
    LIKE_ISSUE_SUCCESS,
    LIKE_ISSUE_FAILURE
} from '../actions/issueAction';

const initialState = {
    states: [],
    currentState: {},
    currentStateIssues: [],
    loadingStates: false,
    loadingState: false,
    loadingIssues: false,
    error: '',
    loading: false
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
        case ADD_ISSUE_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case ADD_ISSUE_SUCCESS:
            return {
                ...state,
                currentStateIssues: [...state.currentStateIssues, action.payload],
                loading: false
            }
        case ADD_ISSUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LIKE_ISSUE_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LIKE_ISSUE_SUCCESS:
            const updatedIssues = state.currentStateIssues.map(issue => {
                if (issue.id === action.payload.id) {
                    return action.payload
                } else {
                    return issue
                }
            })
            return {
                ...state,
                currentStateIssues: updatedIssues,
                loading: false
            }
        case LIKE_ISSUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
    }