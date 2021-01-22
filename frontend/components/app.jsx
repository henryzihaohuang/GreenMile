import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomepageContainer from './home/homepage_container';
import PortfolioContainer from './portfolio/portfolio_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// To Do: ProtectedRoute still needs to be written for portfolio/stocks

const App = ({state}) => {
    return (
        <div>
                <Route exact path="/" component={HomepageContainer} />
                <AuthRoute exact path="/login" component={LogInContainer} />
                <AuthRoute exact path="/signup" component={SignUpContainer} />
                <ProtectedRoute exact path="/portfolio" component={PortfolioContainer} />
        </div>
    )
};

export default App;