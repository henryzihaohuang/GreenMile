import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
            return (
            <section className="homepage-wrapper">
                <span className="homepage-nav-bar">
                    <span className="green-mile-logo-block">
                        <a className="homepage-links" href="/"> GreenMile </a>  
                        <a href="/"><img className="logo-img" src={window.logoURL} /></a>
                    </span> 
                    <span className="homepage-signup-login-block">
                        <span className="homepage-login-button">
                            <Link className="homepage-login-button-text-element" to="/login">Log In</Link>
                        </span>
                        <button className="homepage-signup-button-block">
                            <Link className="homepage-signup-button-text-element" to="/signup" >Sign up</Link>
                        </button>
                    </span>
                </span>
                <section className="first-section-wrapper">
                    <span className="first-section-block">
                        <span className="first-section-header-block">
                            <h1 className="first-section-header">Investing for Everyone
                            </h1>
                            <p className="first-section-body">
                                Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.
                            </p>
                            <button className="body-signup-button">
                                <Link to='/signup' className="body-signup-button-text"> Sign up</Link>
                            </button>
                            <span className="modal-page-wrapper" >
                                <span className="info-img">
                                    <img  src={window.infoURL} /> 
                                </span>

                                <span onClick={() => this.props.openModal('disclosure')} >
                                    <h4 className="disclosure-text-element">
                                        Free Stock Disclosure
                                    </h4>
                                </span>
                            </span>
                            
                        </span>
                        <div className="image-box">
                                <img className="cellphone-img" src={window.splashURL}/>
                                <video src={window.videoURL} draggable="false" className="homepage-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" />
                        </div>
                    </span>
                </section>
                <section className="portfolio-footer-wrapper">
                    <span className="portfolio-footer-block">
                        <span className="portfolio-footer-border" >
                            <br />
                        </span>
                        <span>
                            <p>
                                © 2021 GreenMile. No rights reserved.
                                <br />
                            </p>
                        </span>
                        <span>
                            <p>
                                GreenMile means GreenMile Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes GreenMile Financial, GreenMile Securities, and GreenMile Crypto.
                            </p>
                                <br />
                        </span>
                        <span>
                            <p>
                                All investments involve risks, including the possible loss of capital. But think of the money you could make!
                            </p>
                                <br />
                        </span>
                        <span>
                            <p>
                                Securities trading is not really offered to self-directed customers by GreenMile Financial. GreenMile Financial is also not a member of the <a className="finra-link" href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a>.
                            </p>
                                <br />
                        </span>
                        <span className="footer-modal-page-wrapper" >
                            <span className="info-img">
                                <img src={window.blackinfoURL} />
                            </span>
                            <span onClick={() => this.props.openModal('footer')} >
                                <h4 className="view-important-text-element">View Important Disclosure</h4>
                            </span>
                        </span>
                    </span>
                </section>
            </section>
        )
    }
}

export default Homepage;