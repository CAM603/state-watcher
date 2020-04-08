import React from 'react';
import logo from '../images/logo192.png'
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
    <div>
      <div>
        <Link to="/states">States</Link>
        <Link to="/dashboard">My Profile</Link>
        <p onClick={logout}>Logout</p>
      </div>
      
        {props.children}
      
    </div>
  )
}
const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}
export default connect(mapStateToProps, {})(Wrapper);