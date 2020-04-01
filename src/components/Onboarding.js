import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = () => {
    return (
        <div>
            <h1>Name and logo</h1>
            <h2>Clever slogan</h2>
            <div>
                <p>Cool picture</p>
            </div>
            <Link to="/register">
                <button className="ui button">Join</button>
            </Link>
            <Link to="/login">
                <button className="ui button">Sign in</button>
            </Link>
        </div>
    )
}

export default Onboarding