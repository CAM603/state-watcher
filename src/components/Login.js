import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        props.login(user)
        setTimeout(() => {
            setUser({username: '', password: ''})
            props.history.push('/dashboard')
        }, 1000)
    }

    return (
        <div>
            <div>
                <Link to="/">
                    <button>←</button>
                </Link>
            </div>
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
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default connect(null, {login})(Login);