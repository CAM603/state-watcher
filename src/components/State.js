import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getState, getStateIssues, getStateAndIssues} from '../actions/statesAction';
import { useParams } from 'react-router-dom';
import StateIssues from './StateIssues';

const State = (props) => {
  const {id} = useParams();

  useEffect(() => {
    props.getStateAndIssues(id)
  }, [id])

  const renderScreen = () => {
    return (
      <>
        <h1>Welcome to {props.currentState.name}</h1>
        <h2>Issues</h2>
        <div>
          <StateIssues issues={props.issues}/>
        </div>
      </>
    )
  }
  const renderLoading = () => {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {props.loadingState ? renderLoading() : renderScreen()}
    </div>
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