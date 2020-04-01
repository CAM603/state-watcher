import React, {useState, useEffect} from 'react';
import { connect}  from 'react-redux';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const [about, setAbout] = useState('');
  const [updating, setUpdating] = useState(false)
  
  useEffect(() => {
    props.getUser(props.user_id)
  }, [])
  
  const handleChanges = (event) => {
    setAbout(
      event.target.value
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Updated About', about)
  }
  console.log(about)
  return (
        <div>
          <div>
            <Link to ="/states">
              <p>States</p>
            </Link>
            <p onClick={() => {
              localStorage.removeItem('token')
              props.history.push('/')
              }}>Logout</p>
          </div>
          <div>
            <h1>Welcome {props.username}</h1>
            <h3>Total points: {props.points}</h3>
            <h3>About Me</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="about"
                placeholder="about me"
                onChange={handleChanges}
                value={about}
              />
              <button>Submit</button>
            </form>
            <button>Update</button>
            <p>{props.about}</p>
          </div>
        </div>
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
export default connect(mapStateToProps, {getUser})(Dashboard);