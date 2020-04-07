import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getState, getStateIssues, getStateAndIssues} from '../actions/statesAction';
import { useParams } from 'react-router-dom';
import StateIssues from './StateIssues';
import Wrapper from './Wrapper';
import IssueForm from './IssueForm';

const State = (props) => {
  const {id} = useParams();
  const [addingPost, setAddingPost] = useState(false)
  
  useEffect(() => {
    props.getStateAndIssues(id)
  }, [id, addingPost])

  const handleNewPost = () => {
    setAddingPost(true)
  }

  const renderScreen = () => {
    return (
      <>
            <h1 onClick={handleNewPost}>New Post</h1>
                  
            <h2>Welcome to {props.currentState.name}</h2>
          
            {
            addingPost ? 
              <IssueForm setAddingPost={setAddingPost} stateId={id}/> 
            : 
              <StateIssues 
                issues={props.issues} 
                stateId={id}
              />
            }
          
        
      </>
    )
  }
  const renderLoading = () => {
    return <div>
              <di>LOADING</di>
          </div>
  }
  return (
    <Wrapper {...props}>
        {props.loadingState ? renderLoading() : renderScreen()}
    </Wrapper>
  )
}
const mapStateToProps = state => {
  return {
      currentState: state.states.currentState,
      issues: state.states.currentStateIssues,
      loadingState: state.states.loadingState
  }
}
export default connect(mapStateToProps, {getState, getStateIssues, getStateAndIssues})(State);