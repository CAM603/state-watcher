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
        // <div>
        //   <div>
        //     <Link to ="/states">
        //       <p>States</p>
        //     </Link>
        //     <p onClick={() => {
        //       localStorage.removeItem('token')
        //       props.history.push('/')
        //       }}>Logout</p>
        //   </div>
        //   <div>
        //     <h1>Welcome {props.username}</h1>
        //     <h3>Total points: {props.points}</h3>
        //     <h3>About Me</h3>
        //     {updating ? 
        //       <form onSubmit={handleSubmit}>
        //         <input
        //           type="text"
        //           name="about"
        //           placeholder="about me"
        //           onChange={handleChanges}
        //           value={about}
        //         />
        //         <button>Submit</button>
        //       </form>
        //     :
        //     <>
        //     <button onClick={updateUser}>Update</button>
        //     <p>{props.about}</p>
        //     </>
        //     }
        //   </div>
        // </div>
    <Wrapper>
      
        <h1 className="ui header">Semantic UI Fixed Template</h1>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
      
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