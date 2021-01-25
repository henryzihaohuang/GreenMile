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
                        <a href="/"><img className="logo-img" src={window.logoURL} /></a>
                    </div>

                    <div className="searchbar-block">
                        <input
                            type="text"
                            className="searchbar-element"
                            placeholder= "Search"
                        />
                    </div>

                    <div className="portfolio-nav-bar-block">
                        <ul>
                            <div className="portfolio-nav-bar-element">
                                <a className="portfolio-nav-bar-element"href="https://www.linkedin.com/in/zihaohuang/"><li>LinkedIn</li></a>
                            </div>
                            <div className="portfolio-nav-bar-element">
                                <a className="portfolio-nav-bar-element"href="https://github.com/henryzihaohuang"><li>GitHub</li></a>
                            </div>
                            <div className="portfolio-nav-bar-element-wip">
                                <li>Account</li>
                            </div>
                            <div className="portfolio-nav-bar-element">
                                <li><span onClick={this.handleSubmit}>Logout</span></li>
                            </div>
                        </ul>
                    </div>
                
                </div>
                
                <div className="portfolio-main-wrapper">
                    <div className="portfolio-main-block">
                    <div className="portfolio-graph-block">
                        <div className="portfolio-balance-block">
                            <div className="balance-element">$10,000</div>
                            <div>+$30.60 (+2.24%) <span className="today-afterhours-text-element">Today</span> 
                            </div>
                            <div>-$0.29 (-0.02%) <span className="today-afterhours-text-element">After Hours</span></div>
                            

                            <div className="graph-img">
                                <img src={window.graphURL}></img>
                            </div>
                            <br/>
                        </div>
                        <div className="time-bar-block">
                            <ul>
                                <div className="time-bar-elements">
                                    <li>1D</li>
                                </div>
                                <div className="time-bar-elements">
                                    <li>1W</li>
                                </div>
                                <div className="time-bar-elements">
                                    <li>1M</li>
                                </div>
                                <div className="time-bar-elements">
                                    <li>3M</li>
                                </div>
                                <div className="time-bar-elements">
                                    <li>1Y</li>
                                </div>
                                <div className="time-bar-elements">
                                    <li>ALL</li>
                                </div>
                            </ul>
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
                
                    <div className="portfolio-sidebar-wrapper">
                        <div className="portfolio-sidebar-wrapper">
                            <div className="portfolio-sidebar-elements">
                                <div className="portfolio-sidebar-row">
                                    Stocks
                                </div>
                                <div className="portfolio-sidebar-row">
                                    Lists
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Portfolio;
