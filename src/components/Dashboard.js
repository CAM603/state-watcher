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
    const userId = localStorage.getItem('user');
    props.getUser(userId)
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
      <h1>Welcome {props.username}</h1>
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
      </div>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    user_id: state.login.user_id,
    username: state.user.username,
    points: state.user.points,
    about: state.user.about,
  }
}
export default connect(mapStateToProps, {getUser, updateUser})(Dashboard);