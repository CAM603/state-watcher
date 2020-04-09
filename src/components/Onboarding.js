import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = (props) => {
  const loggedIn = localStorage.getItem('token')
  const message = localStorage.getItem('message')

  return (
    <>
    <div className="onboarding-container">
    </div>
      <header>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </header>
      <main>
        <section className="card">
          <ul>
            <li>
              <span></span>
              <strong>Do you travel bro?</strong>
            </li>
            <li>
              <span></span>
              <strong>Do you visit multiple states?</strong>
            </li>
            <li>
              <span></span>
              <strong>State Watcher can help</strong>
            </li>
          </ul>
        </section>
        <section className="primary">
          <h1>State Watcher</h1>
          <p>See something, say something</p>
          <Link to="/register">Get started</Link>
        </section>
      </main>
      </>
  )
}

export default Onboarding