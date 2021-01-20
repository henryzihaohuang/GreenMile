import React from 'react';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// To Do: ProtectedRoute still needs to be written

export default () => {
    return (
        <div>
            <Route path="/" component={NavBarContainer} />
            <Route exact path="/" component={Home} />
            
            <AuthRoute path="/signup" component={SignUpContainer} />
        </div>
    )
};