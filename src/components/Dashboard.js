import React from 'react';
import { connect}  from 'react-redux';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.user_id)
  }
  render() {
    console.log(this.props.user_id)
    return (
        <div>
          <div>
            <Link to ="/states">
              <p>States</p>
            </Link>
            <p>Logout</p>
          </div>
          <div>
            <h1>Welcome {this.props.username}</h1>
            <h3>Total points: {this.props.points}</h3>
            <h3>About Me</h3>
              <p>{this.props.about}</p>
          </div>
        </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    user_id: state.login.user_id,
    username: state.user.username,
    points: state.user.points,
    about: state.user.about
  }
}
export default connect(mapStateToProps, {getUser})(Dashboard);