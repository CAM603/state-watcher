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
    <div>
      
          <a>{issue.posted_by}</a> posted
          
            {issue.created_at}
          
          <h5>{issue.title}</h5>
          <h5>Where: {issue.location}</h5>
          <p>{issue.description}</p>
          <div onClick={handleLike}>
            <h5 className={liked ? "liked" : ""}>{issue.upvotes} Likes</h5> 
          </div>
    </div>
  )
}

export default connect(null, {likeIssue})(Issue);