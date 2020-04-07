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
    props.setAddingPost(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default connect(null, {addIssue, getStateAndIssues})(IssueForm);