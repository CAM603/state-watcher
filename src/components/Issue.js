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
    <div className="issue">
      <div className="header">
        <div className="picture">
          <span>🧔🏼</span>
        </div>
        <div className="text">
          <p className="user">{issue.posted_by}</p>
          <p className="date">{issue.created_at}</p>
        </div>
        <div className="more">
          <p>...</p>
        </div>
      </div>
      <div className="body">
        <h2>{issue.title}</h2>
        <h3>Location: {issue.location}</h3>
        <p>{issue.description}</p>
      </div>
      <div className="issue-footer">
        <p onClick={handleLike}>{issue.upvotes} Likes</p> 
      </div>
    </div>
  )
}

export default connect(null, {likeIssue})(Issue);