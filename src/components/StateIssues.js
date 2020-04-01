import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const StateIssues = (props) => {
  
  const renderScreen = () => {
    if(props.issues.length < 1) {
      return <h1>No issues here</h1>
    } else {
      return (
        <div>
          <h1>Issues for state</h1>
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
  }

  const renderLoading = () => {
    return (
      <div class="ui segment">
        <div class="ui active loader"></div>
        <p></p>
      </div>
    )
  }

  return (
    <div>
      {props.loadingIssues ? renderLoading() : renderScreen()}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    loadingIssues: state.states.loadingIssues
  }
}
export default connect(mapStateToProps, {})(StateIssues);