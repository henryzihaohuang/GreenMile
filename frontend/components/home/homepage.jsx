import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
            return (
            <div className="homepage-wrapper">
                <div className="homepage-nav-bar">

                    <div className="green-mile-logo-block">
                        <a className="homepage-links" href="/"> GreenMile </a>  

                            <a href="/"><img className="logo-img" src={window.logoURL} />
                            </a>
                    </div> 
        
                    <div className="signup-login-block">
                        <span className="login-button">
                                <Link className="login-button-text-element"to='/login'>Log In</Link>
                        </span>

                        <button className="signup-button-block">
                                <Link to='/signup' className="signup-button-text-element">Sign up</Link>
                        </button>

                    </div>
                </div>
                <div className="first-section-wrapper">
                        <div className="first-section-block">
                            <div className="first-section-header-block">
                                <h1 className="first-section-header">Investing for Everyone</h1>
                                <p className="first-section-body">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                                <button className="body-signup-button">
                                    <Link to='/signup' className="body-signup-button-text"> Sign up</Link>
                                </button>



                                <div className="modal-page-wrapper" >
                                        <div className="info-img">
                                            <img  src={window.infoURL} /> 
                                        </div>

                                    <div onClick={() => this.props.openModal('disclosure')} >
                                        <h4 className="disclosure-text-element">Free Stock Disclosure</h4>
                                    </div>
                            
                                </div>
                            </div>
                            

                        </div>
                        <div className="image-box">
                            <img className="cellphone-img" src={window.splashURL} />
                        </div>
                    
                </div>
                <div className="footer-wrapper">
                    <div className="footer-block">
                            <div>
                                <p>© 2021 Robinhood. All rights reserved.
                            Robinhood means Robinhood Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhood Financial, Robinhood Securities, and Robinhood Crypto.</p>
                            </div>
                            <div>
                                <p>All investments involve risks, including the possible loss of capital.</p>
                            </div>
                            <div>
                                <p>Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the <a href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a>.</p>
                            </div>
                    </div>

                </div>
            
            </div>
        )
    }
}

export default Homepage;