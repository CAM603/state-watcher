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
                    <button className="ui button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {login})(Login);