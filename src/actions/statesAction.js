import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GET_STATES_START = "GET_STATES_START";
export const GET_STATES_SUCCESS = "GET_STATES_SUCCESS";
export const GET_STATES_FAILURE = "GET_STATES_FAILURE";

export const getStates = () => dispatch => {
    dispatch({ type: GET_STATES_START })
    axiosWithAuth()
    .get('https://comake4.herokuapp.com/api/states')
    .then(res => {
        console.log('states', res)
        dispatch({ type: GET_STATES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: GET_STATES_FAILURE })
    })
}