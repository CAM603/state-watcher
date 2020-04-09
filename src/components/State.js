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
  const [modalShowing, setModalShowing] = useState(false);
  
  useEffect(() => {
    props.getStateAndIssues(id)
  }, [id, modalShowing])

  const showModal = () => {
    setModalShowing(true)
  }
  const hideModal = () => {
    setModalShowing(false)
  }
  const handleNewPost = () => {
    console.log('clicked')
    showModal()
  }

  const renderScreen = () => {
    return (
      <>
        <div className="state-container">
          <div className="state-header">
              <h1>Welcome to {props.currentState.name}!</h1>
              <input type="text" placeholder="search"/>
              <p onClick={handleNewPost}>+</p>
          </div>
          <StateIssues 
            issues={props.issues} 
            stateId={id}
          />
        </div>
        <IssueForm  
          stateId={id}
          modalShowing={modalShowing}
          hideModal={hideModal}
        />
      </>     
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