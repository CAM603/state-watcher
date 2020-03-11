import React from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
  render() {

    return (
        <div>BashBoard</div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user_id: state.user_id
  }
}
export default connect(mapStateToProps, {})(Dashboard);