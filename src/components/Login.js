import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/logo192.png';

import { login } from '../actions/loginAction';

const Login = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChanges = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
}

  const handleSubmit = event => {
      event.preventDefault()
      props.login(user, props)
      setUser({username: '', password: ''})
  }
  const renderLoading = () => {
      return (
          <div>
              <div></div>
          </div>
      )
  }
  const renderLogin = () => {
    return (
      <>
        <div className="onboarding-container"></div>
          <div className="login-container">
            <div className="login">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={handleChanges}
                  value={user.username}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChanges}
                  value={user.password}
                />
                <button>Log In</button>
              </form>
              <div className="login-footer">
                <span>New to us? <Link to="/register">Sign Up</Link></span>
              </div>
            </div>
          </div>
      </>
    )
  }
  return (
    <>
      {props.loading ? renderLoading() : renderLogin()}
    </>
  )
}
const mapStateToProps = state => {
    return {
        loading: state.login.loading
    }
}
export default connect(mapStateToProps, {login})(Login);