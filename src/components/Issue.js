import React, { useState } from 'react';
import { connect } from 'react-redux';
import {likeIssue} from '../actions/issueAction';

const Issue = ({issue, stateId, likeIssue}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    let likedIssue;

    if(liked) {
      likedIssue = {
        title: issue.title, 
        description: issue.description, 
        location: issue.location, 
        upvotes: issue.upvotes - 1
      }
    } else {
      likedIssue = {
        title: issue.title, 
        description: issue.description, 
        location: issue.location, 
        upvotes: issue.upvotes + 1
      }
    }
    likeIssue(stateId, issue.id, likedIssue)
    setLiked(!liked)
  }
  return (
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
          <a onClick={handleLike} className="like">
            <i className={liked ? "like icon liked" : "like icon"}></i> {issue.upvotes} Likes
          </a>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {likeIssue})(Issue);