import axios from 'axios';

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('https://comake4.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            console.log('Login success', res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
        })
}