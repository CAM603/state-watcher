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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChanges}
                value={user.username}
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChanges}
                value={user.password}
                />
                <button>Join</button>
            </form>
        </div>
    )
}

export default connect(null, {register})(Register);