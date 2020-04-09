import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Wrapper = (props) => {
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('message')
    props.history.push('/')
  }

  return (
    <div className="wrapper-container">
      <div className="navigation">
        <div className="content-left">
          <div className="item">
            <Link to="/states">States</Link>
          </div>
          <div className="item">
            <Link to="/dashboard">My Profile</Link>
          </div>
        </div>
        <div className="content-right">
          <div className="item">
            <p onClick={logout}>Logout</p>
          </div>
          <div className="item">
            <p><span>👨🏻‍🦰</span></p>
          </div>
        </div>
      </div>
      <div style={{marginTop: '5vh'}}>
        {props.children}
      </div>
      <div className="footer">
        <p>State Watcher By: <a>Cameron Hawley</a></p>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}
export default connect(mapStateToProps, {})(Wrapper);