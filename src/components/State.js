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
  const [likedIssues, setLikedIssues] = useState([])
  
  useEffect(() => {
    props.getStateAndIssues(id)
  }, [id, addingPost, likedIssues])

  const handleNewPost = () => {
    setAddingPost(true)
  }

  const renderScreen = () => {
    return (
      <>
        <div className="ui top attached menu">
          <div className="ui simple dropdown icon item">
            <i className="add icon"></i>
            <div className="menu">
              <div className="item">
                <i className="dropdown icon"></i>
                <span className="text">New</span>
                <div className="menu">
                  <div className="item" onClick={handleNewPost}>Post</div>
                  <div className="item">Image</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{padding: '10px', marginLeft: '15px'}}>Welcome to {props.currentState.name}</h2>
          </div>
        
          <div className="right menu">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input className="prompt" type="text" placeholder="Search posts..."/>
                <i className="search link icon"></i>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <div>
            {addingPost ? <IssueForm setAddingPost={setAddingPost} stateId={id}/> : <StateIssues 
              issues={props.issues} 
              stateId={id}
              likedIssues={likedIssues}
              setLikedIssues={setLikedIssues}
            />}
          </div>
        </div>
      </>
    )
  }
  const renderLoading = () => {
    return <div className="ui active centered loader"></div>
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