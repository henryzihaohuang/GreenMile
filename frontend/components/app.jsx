import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// To Do: ProtectedRoute still needs to be written

const App = ({state}) => {
    return (
        <div>
            <Route path="/" component={NavBarContainer} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LogInContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
        </div>
    )
};

export default App;