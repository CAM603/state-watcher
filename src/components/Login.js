import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    <button>←</button>
                </Link>
            </div>
            <form>
                <input
                type="text"
                name="username"
                placeholder="username"
                />
                <input
                type="text"
                name="password"
                placeholder="password"
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login;