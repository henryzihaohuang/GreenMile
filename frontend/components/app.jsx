import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomepageContainer from './home/homepage_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// To Do: ProtectedRoute still needs to be written for portfolio/stocks

const App = ({state}) => {
    return (
        <div>
            <Route children={({ match }) => {
                if (match.path !== "/signup") return <NavBarContainer />;
            }} />
            <Route exact path="/" component={HomepageContainer} />
            <Route exact path="/login" component={LogInContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
        </div>
    )
};

export default App;