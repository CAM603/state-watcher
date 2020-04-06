// import {
//   ADD_ISSUE_START,
//   ADD_ISSUE_SUCCESS,
//   ADD_ISSUE_FAILURE,
//   LIKE_ISSUE_START,
//   LIKE_ISSUE_SUCCESS,
//   LIKE_ISSUE_FAILURE
// } from '../actions/issueAction'

// const initialState = {
//   // issues: [],
//   error: '',
//   loading: false
// }

// export const issue = (state = initialState, action) => {
//   switch(action.type) {
//     case ADD_ISSUE_START:
//       return {
//         ...state,
//         loading: true,
//         error: ''
//       }
//     case ADD_ISSUE_SUCCESS:
//       return {
//         ...state,
//         // issues: [...issues, action.payload],
//         loading: false
//       }
//     case ADD_ISSUE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload
//       }
//     case LIKE_ISSUE_START:
//       return {
//         ...state,
//         loading: true,
//         error: ''
//       }
//     case LIKE_ISSUE_SUCCESS:
//       return {
//         ...state,
//         // issues: [...issues, action.payload],
//         loading: false
//       }
//     case LIKE_ISSUE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload
//       }
//     default:
//       return state
//   }
// } 