import axios from 'axios';

export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
      .post('https://comake4.herokuapp.com/api/auth/register', credentials)
      .then(res => {
        console.log(res)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: REGISTER_FAILURE })
      })
}