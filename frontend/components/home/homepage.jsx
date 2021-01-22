import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
            return (
            <div>
                <div className="nav-bar">

                    <div className="green-mile-textbox">
                        <a className="green-mile-text" href="/"> GreenMile </a>  

                            <a href="/"><img className="logo-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76545489-55d6-4b21-90d2-66145f355fa5/d4i9b1a-854093b9-b960-45a3-bd7a-3800965c58be.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzY1NDU0ODktNTVkNi00YjIxLTkwZDItNjYxNDVmMzU1ZmE1XC9kNGk5YjFhLTg1NDA5M2I5LWI5NjAtNDVhMy1iZDdhLTM4MDA5NjVjNThiZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DtNmoXN2rftuTzPkPhA6mqUv-j4wUrOtfF3hQa6Eu18" />
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

                                

                                <div className="disclosure-textbox">
                                    <h4><img className="info-img" src="https://icon-library.net/images/info-icon-png-transparent/info-icon-png-transparent-2.jpg" />    Free Stock Disclosure</h4>
                                </div>
                                

                                
                            </div>
                            <div className="image-box">
                                <img className="cellphone-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__5a49de3493cf5f77132e35fab7a8c781.png" />
                            </div>

                        </div>
                    
                </div>
            </div>
        )
    }
}

export default Homepage;