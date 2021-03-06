import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>User: {currentUser.firstName} {currentUser.lastName}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="login-button" to="/login">Log In</Link>
                <Link className="signup-button" to="/signup">Sign Up</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <h1 className="logo">GreenMile</h1>
            <div>
                {display}
            </div>
        </header>
    );
};
