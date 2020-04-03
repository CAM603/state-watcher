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
            <div class="ui feed">
              <div class="event">
                <div class="label">
                  <i class="user circle icon"></i>
                </div>
              <div class="content">
                <div class="summary">
                  <a>{issue.posted_by}</a> posted
                  <div class="date">
                    {issue.created_at}
                  </div>
                </div>
                <div class="extra text">
                  <h5>{issue.title}</h5>
                  <h5>Where: {issue.location}</h5>
                  <p>{issue.description}</p>
                </div>
                <div class="meta">
                  <a class="like">
                    <i class="like icon"></i> {issue.upvotes} Likes
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