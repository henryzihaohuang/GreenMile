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
        
                    <div className="homepage-signup-login-block">
                        <span className="homepage-login-button">
                                <Link className="homepage-login-button-text-element" to="/login">Log In</Link>
                        </span>

                        <button className="homepage-signup-button-block">
                                <Link className="homepage-signup-button-text-element" to="/signup" >Sign up</Link>
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

                            {/* <video src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" autoplay="" controlslist="nodownload nofullscreen noremoteplayback" loop="" muted="" playsinline="" preload="auto" >
            
                            </video> */}
                        </div>

                    
                </div>
                <div className="portfolio-footer-wrapper">
                    <div className="portfolio-footer-block">
                            <div className="portfolio-footer-border" ><br /></div>
                            <div>
                                <p>
                                    © 2021 GreenMile. No rights reserved.
                                    <br />
                                </p>
                            </div>
                            <div>
                                <p>
                                    GreenMile means GreenMile Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes GreenMile Financial, GreenMile Securities, and GreenMile Crypto.
                                </p>
                                <br />
                            </div>
                            <div>
                                <p>
                                    All investments involve risks, including the possible loss of capital. But think of the money you could make!
                                </p>
                                <br />
                            </div>
                            <div>
                                <p>
                                    Securities trading is not really offered to self-directed customers by GreenMile Financial. GreenMile Financial is also not a member of the <a className="finra-link" href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a>.
                                </p>
                                <br />
                            </div>

                            <div className="footer-modal-page-wrapper" >
                                <div className="info-img">
                                    <img src={window.blackinfoURL} />
                                </div>

                                <div onClick={() => this.props.openModal('disclosure')} >
                                    <h4 className="view-important-text-element">View Important Disclosure</h4>
                                </div>

                            </div>
                    </div>

                </div>
            
            </div>
        )
    }
}

export default Homepage;