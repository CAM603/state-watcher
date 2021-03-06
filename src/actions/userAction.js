import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";


export const getUser = (id) => dispatch => {
    dispatch({ type: GET_USER_START })
    axiosWithAuth()
    .get(`https://comake4.herokuapp.com/api/users/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: GET_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: GET_USER_FAILURE, payload: err.response })
    })
}

export const updateUser = (id, user) => dispatch => {
    dispatch({ type: UPDATE_USER_START })
    axiosWithAuth()
    .put(`https://comake4.herokuapp.com/api/users/${id}`, user)
    .then(res => {
        console.log(res)
        dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: UPDATE_USER_FAILURE, payload: err.response })
    })
}