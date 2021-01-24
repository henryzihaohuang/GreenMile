import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action()
            .then(() => this.props.history.push('/'));
    }

    render(){
        
        return(
            <div className="portfolio-wrapper">
                <div className="portfolio-nav-bar">

                    <div>
                        <a><img className="logo-img" src={window.logoURL} /></a>
                    </div>

                    <div className="searchbar-block">
                        <input
                            type="text"
                            className="searchbar-element"
                            placeholder= "Search"
                        />
                    </div>

                    <div className="nav-bar-elements">
                        <ul>
                            <div className="nav-bar-links">
                                <li>Free Stocks</li>
                            </div>
                            <div className="nav-bar-links">
                                <li>Portfolio</li>
                            </div>
                            <div className="nav-bar-links">
                                <li>Cash</li>
                            </div>
                            <div className="nav-bar-links">
                                <li>Messages</li>
                            </div>
                            <div className="nav-bar-links">
                                <li>Account</li>
                            </div>
                            <div className="nav-bar-links">
                                <li><span onClick={this.handleSubmit}>Logout</span></li>
                            </div>
                        </ul>
                    </div>
                
                </div>
                
                <div className="portfolio-main-block">
                    <div className="portfolio-balance-block">
                        <div>$10,000</div>
                        <div>+$30.60 (+2.24%) <span>Today</span> 
                        </div>
                        <div>-$0.29 (-0.02%) <span>After Hours</span></div>
                        
                        <div className="graph-img">

                        </div>

                       

                        

                    </div>

                </div>
                <div className="portfolio-buying-power-block">
                    <div className="buying-power">
                        <h2>Buying Power</h2>
                    </div>
                    <div className="balance"><p>$10,000</p></div>
                </div>
                
                <div className="portfolio-sidebar-block"></div>
            
            </div>

        )
    }

}

export default Portfolio;
