import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getState, getStateIssues} from '../actions/statesAction';
import { useParams } from 'react-router-dom';
import StateIssues from './StateIssues';

const State = (props) => {
  const {id} = useParams();

  useEffect(() => {
    props.getState(id)
    props.getStateIssues(id)
  }, [id])
  return (
    <div>
      <h1>Welcome to {props.currentState.name}</h1>
      <h2>Issues</h2>
      <div>
        <StateIssues issues={props.issues}/>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
      currentState: state.states.currentState,
      issues: state.states.currentStateIssues
  }
}
export default connect(mapStateToProps, {getState, getStateIssues})(State);