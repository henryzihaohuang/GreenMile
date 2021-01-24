import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
            return (
            <div className="homepage-wrapper">
                <div className="nav-bar">

                    <div className="green-mile-textbox">
                        <a className="green-mile-text" href="/"> GreenMile </a>  

                            <a href="/"><img className="logo-img" src={window.logoURL} />
                            </a>
                    </div> 
        
                    <div className="signup-login-box">
                        <span className="login-button">
                            <Link to='/login'>Log In</Link>
                        </span>

                        <button className="signup-button">
                                <Link to='/signup' className="body-signup-text">Sign up</Link>
                        </button>

                    </div>
                </div>
                <div className="homepage">
                        <div className="content-box">
                            <div className="header-textbox">
                                <h1 className="header">Investing for Everyone</h1>
                                <p className="body">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                                <button className="body-signup-button">
                                    <Link to='/signup'><span>Sign up</span></Link>
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
                            <div className="image-box">
                                <img className="cellphone-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__5a49de3493cf5f77132e35fab7a8c781.png" />
                            </div>

                        </div>
                    
                </div>
                <div className="footer-wrapper">
                


                </div>
            
            </div>
        )
    }
}

export default Homepage;