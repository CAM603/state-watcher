import React, {useState} from 'react';
import { connect } from 'react-redux';

import { addIssue } from '../actions/issueAction';
import { getStateAndIssues } from '../actions/statesAction';

const IssueForm = (props) => {
  const [issue, setIssue] = useState({
    title: '',
    description: '',
    location: ''
  })

  const handleChange = event => {
    setIssue({
      ...issue,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addIssue(props.stateId, issue)
    setIssue({
      title: '',
      description: '',
      location: ''
    })
    props.hideModal()
  }

  return (
    <div className={props.modalShowing ? "modal display-block" : "modal display-none"}>
      <div className="modal-main">
        <h1>{props.state}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="title"
              name="title"
              value={issue.title}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="description"
              name="description"
              value={issue.value}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="location"
              name="location"
              value={issue.location}
              onChange={handleChange}
            />
          </div>
          <button style={{color: 'orange'}}>Submit</button>
          <button onClick={props.hideModal} style={{color: 'red'}}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default connect(null, {addIssue, getStateAndIssues})(IssueForm);