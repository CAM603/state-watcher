import { axiosWithAuth } from '../utils/axiosWithAuth';

export const ADD_ISSUE_START = "ADD_ISSUE_START";
export const ADD_ISSUE_SUCCESS = "ADD_ISSUE_SUCCESS";
export const ADD_ISSUE_FAILURE = "ADD_ISSUE_FAILURE";

export const LIKE_ISSUE_START = "LIKE_ISSUE_START";
export const LIKE_ISSUE_SUCCESS = "LIKE_ISSUE_SUCCESS";
export const LIKE_ISSUE_FAILURE = "LIKE_ISSUE_FAILURE";

export const addIssue = (stateId, issue) => dispatch => {
  dispatch({ type: ADD_ISSUE_START })
  axiosWithAuth()
    .post(`https://comake4.herokuapp.com/api/states/${stateId}/issues`, issue)
    .then(res => {
      console.log('New issue', res)
      dispatch({ type: ADD_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('New issue error', err)
      dispatch({ type: ADD_ISSUE_FAILURE, payload: err.response })
    })
}

export const likeIssue = (stateId, issueId, updatedIssue) => dispatch => {
  dispatch({ type: LIKE_ISSUE_START })
  axiosWithAuth()
    .put(`https://comake4.herokuapp.com/api/states/${stateId}/issues/${issueId}`, updatedIssue)
    .then(res => {
      console.log('New like', res.data)
      dispatch({ type: LIKE_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('New like error', err)
      dispatch({ type: LIKE_ISSUE_FAILURE, payload: err.response })
    })
}