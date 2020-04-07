import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GET_STATES_START = "GET_STATES_START";
export const GET_STATES_SUCCESS = "GET_STATES_SUCCESS";
export const GET_STATES_FAILURE = "GET_STATES_FAILURE";

export const GET_STATE_START = "GET_STATE_START";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILURE = "GET_STATE_FAILURE";

export const GET_STATE_ISSUES_START = "GET_STATE_ISSUES_START";
export const GET_STATE_ISSUES_SUCCESS = "GET_STATE_ISSUES_SUCCESS";
export const GET_STATE_ISSUES_FAILURE = "GET_STATE_ISSUES_FAILURE";

export const getStates = () => dispatch => {
    dispatch({ type: GET_STATES_START })
    axiosWithAuth()
    .get('https://comake4.herokuapp.com/api/states')
    .then(res => {
        console.log('states', res)
        dispatch({ type: GET_STATES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('states error', err)
        dispatch({ type: GET_STATES_FAILURE, payload: err.response })
    })
}

export const getState = (id) => dispatch => {
    dispatch({ type: GET_STATE_START })
    axiosWithAuth()
    .get(`https://comake4.herokuapp.com/api/states/${id}`)
    .then(res => {
        console.log('state', res)
        dispatch({ type: GET_STATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('states error', err)
        dispatch({ type: GET_STATE_FAILURE, payload: err.response })
    })
}

export const getStateIssues = (id) => dispatch => {
    dispatch({ type: GET_STATE_ISSUES_START })
    axiosWithAuth()
    .get(`https://comake4.herokuapp.com/api/states/${id}/issues`)
    .then(res => {
        console.log('state issues', res)
        dispatch({ type: GET_STATE_ISSUES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('states error', err)
        dispatch({ type: GET_STATE_ISSUES_FAILURE, payload: err.response })
    })
}

export const getStateAndIssues = (id) => async (dispatch) => {
    await dispatch(getState(id))
    dispatch(getStateIssues(id))
}