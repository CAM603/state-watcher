import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/logo192.png';

import { login } from '../actions/loginAction';

const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChanges = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.login(user, props)
        setUser({username: '', password: ''})

    }
    const renderLoading = () => {
        return (
            <div class="ui active dimmer">
                <div class="ui loader"></div>
            </div>
        )
    }
    const renderLogin = () => {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ height: '100%', maxWidth: '450px', marginTop: '100px'}}>
                    <h2 className="ui teal image header">
                        <img src={logo} className="image"/>
                        <div className="content">
                            Log in to your account
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        onChange={handleChanges}
                                        value={user.username}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        onChange={handleChanges}
                                        value={user.password}
                                    />
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button">Log In</button>
                        </div>
                    </form>
                    <div className="ui message">
                        New to us? <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {props.loading ? renderLoading() : renderLogin()}
        </>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.login.loading
    }
}
export default connect(mapStateToProps, {login})(Login);