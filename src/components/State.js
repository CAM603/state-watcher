import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getState, getStateIssues, getStateAndIssues} from '../actions/statesAction';
import { useParams } from 'react-router-dom';
import StateIssues from './StateIssues';
import Wrapper from './Wrapper';
import IssueForm from './IssueForm';
import Loading from './Loading';

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
      <div className="state-container">
        <div className="state-header">
            <h1>Welcome to {props.currentState.name}!</h1>
            <input type="text" placeholder="search"/>
            <p onClick={handleNewPost}>+</p>
        </div>
        {addingPost ? 
          <IssueForm 
            setAddingPost={setAddingPost} 
            stateId={id}
          /> 
          : 
          <StateIssues 
            issues={props.issues} 
            stateId={id}
          />
        }
      </div>
    )
  }
  const renderLoading = () => {
    return <Loading/>
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