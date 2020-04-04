import React from 'react';
import logo from '../images/logo192.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Wrapper = (props) => {
  const logout = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }
  return (
    <>
      <div className="ui fixed inverted menu">
        <div className="ui container" style={{display: 'flex', justifyContent: 'flex-start'}}>
          <a href="#" className="header item">
            <img className="logo" src={logo}/>
            State Watcher
          </a>
          <Link to="/states" className="item">States</Link>
          <Link to="/dashboard" className="item">Home</Link>
          <div className="ui simple dropdown item">
            Dropdown <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="#">Link Item</a>
              <a className="item" href="#">Link Item</a>
              <div className="divider"></div>
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon"></i>
                Sub Menu
                <div className="menu">
                  <a className="item" href="#">Link Item</a>
                  <a className="item" href="#">Link Item</a>
                </div>
              </div>
              <a className="item" href="#">Link Item</a>
            </div>
          </div>
        </div>
        <div className="ui container" style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className="header item" onClick={logout}>Logout</p>
          <div className="item">
            <i className="user circle icon large inverted"></i>
              {props.username}
          </div>
        </div>
      </div>
      <div className="ui main text container">
        {props.children}
      </div>
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Group 1</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 2</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 3</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Footer Header</h4>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>
          <div className="ui inverted section divider"></div>
          <img src={logo} className="ui centered mini image"/>
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="#">Site Map</a>
            <a className="item" href="#">Contact Us</a>
            <a className="item" href="#">Terms and Conditions</a>
            <a className="item" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}
export default connect(mapStateToProps, {})(Wrapper);