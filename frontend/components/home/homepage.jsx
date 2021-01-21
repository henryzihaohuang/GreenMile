import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './portfolio';

class Homepage extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.currentUser) {
            return (
                <div>
                    <Portfolio />
                </div>
            )
        } else {
            return (
                <div className="homepage">

                    <div className="home-img-frame">
                        <img className="home-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__5a49de3493cf5f77132e35fab7a8c781.png" />
                    </div>


                    <h1 className="splash-text">Investing for Everyone</h1>
                    <h3 className="splash-subtext">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</h3>
                    
                    <p><Link className="banner-button" to="/signup">Sign Up</Link></p>
                    
                </div>
            )
        }
    }

}

export default Homepage;
