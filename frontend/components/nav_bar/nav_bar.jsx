import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>User: {currentUser.first_name} {currentUser.last_name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="button" to="/login">Log In</Link>
                <Link className="button" to="/signup">Sign Up</Link>
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
