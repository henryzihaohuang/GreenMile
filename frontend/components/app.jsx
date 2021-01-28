import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import HomepageContainer from './home/homepage_container';
import PortfolioContainer from './portfolio/portfolio_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import ModalContainer from '../components/modal/modal_container';
import Graph from './portfolio/graph';

const App = ({state}) => {
    console.log(HomepageContainer);
    return (
        <div>
                <ModalContainer />
                
                <Route exact path="/" render={(props)=> <HomepageContainer {...props}/>} />
                <AuthRoute exact path="/login" component={LogInContainer} />
                <AuthRoute exact path="/signup" component={SignUpContainer} />
                <ProtectedRoute exact path="/portfolio" component={PortfolioContainer} />
        </div>
    )
};

export default App;