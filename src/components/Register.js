import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/logo192.png'

import { register } from '../actions/registerAction'

const Register = ({register}) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        register(user)
        setUser({username: '', password: ''})
    }
    
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column" style={{ height: '100%', maxWidth: '450px', marginTop: '100px'}}>
                <h2 className="ui teal image header">
                    <img src={logo} className="image"/>
                    <div className="content">
                        Sign up for your account
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
                        <button className="ui fluid large teal submit button">Sign up</button>
                    </div>
                </form>
                <div className="ui message">
                    Already a member? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {register})(Register);