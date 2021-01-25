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
            <section className="portfolio-wrapper">
                <section className="portfolio-nav-bar">

                    <span>
                        <a><img className="logo-img" src={window.logoURL} /></a>
                    </span>

                    <span className="searchbar-block">
                        <input
                            type="text"
                            className="searchbar-element"
                            placeholder= "Search"
                        />
                    </span>

                    <span className="portfolio-nav-bar-block">
                        <ul>
                            <span className="portfolio-nav-bar-element">
                                <a className="portfolio-nav-bar-element"href="https://www.linkedin.com/in/zihaohuang/"><li>LinkedIn</li></a>
                            </span>
                            <span className="portfolio-nav-bar-element">
                                <a className="portfolio-nav-bar-element"href="https://github.com/henryzihaohuang"><li>GitHub</li></a>
                            </span>
                            <span className="portfolio-nav-bar-element-wip">
                                <li>Account</li>
                            </span>
                            <span className="portfolio-nav-bar-element">
                                <li><span onClick={this.handleSubmit}>Logout</span></li>
                            </span>
                        </ul>
                    </span>
                
                </section>
                
                <section className="portfolio-main-wrapper">
                    <span className="portfolio-main-block">
                    <span className="portfolio-graph-block">
                        <span className="portfolio-balance-block">
                            <span className="balance-element">$10,000</span>
                            <span>+$30.60 (+2.24%) <span className="today-afterhours-text-element">Today</span> 
                            </span>
                            <span>-$0.29 (-0.02%) <span className="today-afterhours-text-element">After Hours</span></span>
                            

                            <span className="graph-img">
                                <img src={window.graphURL}></img>
                            </span>
                            <br/>
                        </span>
                        <span className="time-bar-block">
                            <ul>
                                <span className="time-bar-elements">
                                    <li>1D</li>
                                </span>
                                <span className="time-bar-elements">
                                    <li>1W</li>
                                </span>
                                <span className="time-bar-elements">
                                    <li>1M</li>
                                </span>
                                <span className="time-bar-elements">
                                    <li>3M</li>
                                </span>
                                <span className="time-bar-elements">
                                    <li>1Y</li>
                                </span>
                                <span className="time-bar-elements">
                                    <li>ALL</li>
                                </span>
                            </ul>
                        </span>


                    </span>
                    <section className="portfolio-buying-power-block">
                        <span className="buying-power">
                            <h2>Buying Power</h2>
                        </span>
                        <span className="balance"><p>$10,000</p></span>
                    </section>
                    
                    </span>
                
                    <section className="portfolio-sidebar-wrapper">
                        <span className="x-needs-to-be-fixed">
                            <span className="portfolio-sidebar-elements">
                                <span className="portfolio-sidebar-row">
                                    Stocks
                                </span>
                                <span className="portfolio-sidebar-row">
                                    Lists
                                </span>

                            </span>

                        </span>
                    </section>
                </section>
            </section>

        )
    }

}

export default Portfolio;
