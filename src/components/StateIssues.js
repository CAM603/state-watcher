import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const StateIssues = (props) => {
  
  const renderScreen = () => {
    if(props.issues.length < 1) {
      return (
        
          <h1>No issues here</h1>
        
      )
    } else {
      return (
        <div>
          {props.issues.map(issue => (
            <div className="ui feed">
              <div className="event">
                <div className="label">
                  <i className="user circle icon"></i>
                </div>
              <div className="content">
                <div className="summary">
                  <a>{issue.posted_by}</a> posted
                  <div className="date">
                    {issue.created_at}
                  </div>
                </div>
                <div className="extra text">
                  <h5>{issue.title}</h5>
                  <h5>Where: {issue.location}</h5>
                  <p>{issue.description}</p>
                </div>
                <div className="meta">
                  <a className="like">
                    <i onClick={() => console.log('StateID', props.stateId, 'IssueID', issue.id, 'Issue', issue)} className="like icon"></i> {issue.upvotes} Likes
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      )
    }
  }

  const renderLoading = () => {
    return (
      <div className="ui segment">
        <div className="ui active loader"></div>
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