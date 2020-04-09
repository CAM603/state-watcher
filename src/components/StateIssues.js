import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { likeIssue } from '../actions/issueAction';
import Issue from './Issue';
import Loading from './Loading';

const StateIssues = (props) => {
  
  const renderScreen = () => {
    if(props.issues.length < 1) {
      return (
        
          <h1>No issues here</h1>
        
      )
    } else {
      return (
        <div className="issues-container">
          {props.issues.map(issue => (
            <Issue issue={issue} stateId={props.stateId}/>
          ))}
        </div>
      )
    }
  }

  const renderLoading = () => {
    return <Loading/>
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
export default connect(mapStateToProps, {likeIssue})(StateIssues);