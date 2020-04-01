import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <div>
            <div>
                <Link to="/">
                    <button>←</button>
                </Link>
            </div>
            <div class="ui inverted segment">
                <form onSubmit={handleSubmit} className="ui inverted form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={handleChanges}
                            value={user.username}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChanges}
                            value={user.password}
                        />
                    </div>
                    <button className="ui button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {register})(Register);