import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    <button>←</button>
                </Link>
            </div>
            <h1>Register</h1>
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
                <button>Join</button>
            </form>
        </div>
    )
}

export default Register;