import React, {useState, useEffect} from 'react';
import { connect}  from 'react-redux';
import { getUser, updateUser } from '../actions/userAction';
import { Link } from 'react-router-dom';

import logo from '../images/logo192.png'
import Wrapper from './Wrapper';

const Dashboard = (props) => {
  const [about, setAbout] = useState('');
  const [updating, setUpdating] = useState(false)
  
  useEffect(() => {
    props.getUser(props.user_id)
  }, [])
  
  const handleChanges = (event) => {
    setAbout(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateUser(props.user_id, {about: about})
    props.getUser(props.user_id)
    setUpdating(false)
  }

  const updateUser = () => {
    setUpdating(true)
    setAbout(props.about)
  }

  return (
    <Wrapper {...props}>
      {/* <h1 className="ui header">Welcome {props.username}</h1>
      <div>
        <h3>Total points: {props.points}</h3>
        <h3>About Me</h3>
        {updating ? 
              <form onSubmit={handleSubmit}>
                <textarea
                  type="text"
                  name="about"
                  placeholder="about me"
                  onChange={handleChanges}
                  value={about}
                />
                <button>Submit</button>
              </form>
            :
            <>
            <p>{props.about}</p>
            <button onClick={updateUser}>Update</button>
            </>
        }
      </div> */}
      <div className="ui card">
        <div className="image">
          <i className="user circle icon huge inverted"></i>
        </div>
        <div className="content">
          <a className="header">{props.username}</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            {props.about}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {props.points} points
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    user_id: state.login.user_id,
    username: state.user.username,
    points: state.user.points,
    about: state.user.about
  }
}
export default connect(mapStateToProps, {getUser, updateUser})(Dashboard);