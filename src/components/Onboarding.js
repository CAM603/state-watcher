import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = (props) => {
  const loggedIn = localStorage.getItem('token')
  const message = localStorage.getItem('message')

  return (
    <div>
      <div>
        {loggedIn 
        ?
        <div>
          <h1>{message}</h1>
          <Link to="/dashboard">My profile</Link>
        </div>
        :
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
        }
      </div>
      <Link to="/register">
        <h1>Get Started</h1>
      </Link>          
    </div>
  )
}

export default Onboarding