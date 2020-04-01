import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getStateIssues} from '../actions/statesAction';

const StateIssues = (props) => {
  
  let display;
  if(props.issues.length < 1) {
    display = <h1>No issues here</h1>
  } else {
    display = (
      <div>
        {props.issues.map(issue => (
          <div>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>Location: {issue.location}</p>
            <p>Upvotes: {issue.upvotes}</p>
            <p>Created: {issue.created_at}</p>
            <p>Posted by: {issue.posted_by}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      <h1>Issues for state</h1>
      {display}
    </div>
  )
}
// const mapStateToProps = state => {
//   return {
//       currentState: state.states.currentState,
//       issues: state.states.currentStateIssues
//   }
// }
export default connect(null, {getStateIssues})(StateIssues);