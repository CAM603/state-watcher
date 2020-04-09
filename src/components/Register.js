import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/logo192.png'

import { register } from '../actions/registerAction'

const Register = ({register}) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChanges = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value 
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    register(user)
    setUser({username: '', password: ''})
  }
    
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
              <button>Sign up</button>
            </form>
            <div className="login-footer">
              <span>Already a member? <Link to="/login">Login</Link></span>
            </div>
          </div>
        </div>
    </>
  )
}

export default connect(null, {register})(Register);