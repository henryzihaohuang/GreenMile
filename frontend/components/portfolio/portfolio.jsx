import React from 'react';
import Graph from './graph';
import WatchlistGraph from './watchlist_graph';


class Portfolio extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        
        this.props.fetchHistory("TSLA", "5d");
        // this.props.fetchHistory("NFLX", "5d");
        // this.props.fetchHistory("GME", "5d");
        this.props.fetchNews("TSLA");
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action()
            .then(() => this.props.history.push('/'));
    }

    
    render(){
        // debugger

        if (Object.keys(this.props.entities.stock).length === 0){
            return null;
        };

        const TSLA = this.props.entities.stock.prices.TSLA['chart'];
        // const NFLX = this.props.entities.stock.prices.NFLX['chart'];
        // const GME = this.props.entities.stock.prices.GME['chart'];

        const news = this.props.entities.news
        debugger
        

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
                                        <div className='portfolio-chart-block'>
                                            <Graph data={TSLA} className="main-graph"/> 
                                        </div>
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


                        <section className="portfolio-news-wrapper">
                            <span className="portfolio-news-element-header">
                                <span>News</span>
                            </span>

                            <span className="portfolio-news-block">
                                

                                <span className="portfolio-news-element-1">
                                    <span className="portfolio-news-element-1-body">
                                        <span>
                                            {news[0].source}
                                        </span>
                                        <span>
                                            {news[0].headline}
                                        </span>
                                        <span>
                                            {news[0].summary}
                                        </span>
                                    </span>
                                    <span className="portfolio-news-element-1-img">
                                        <span>
                                            <img src={news[0].image} />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </section>
                    
                    </span>
                
                    <section className="portfolio-sidebar-wrapper">
                        <span className="portfolio-sidebar-block">
                            <span className="portfolio-sidebar-elements">
                                <span className="portfolio-sidebar-frozen-row">
                                    <span className="portfolio-sidebar-stocks-header">Stocks</span>
                                    <span className="portfolio-sidebar-dropdown">...</span>
                                    
                                </span>

                                <span className="portfolio-sidebar-frozen-row">
                                    <span className="portfolio-sidebar-watchlist-header">Lists</span>

                                    <span className="portfolio-sidebar-dropdown-2">+</span>
                                </span>

                                <span className="watchlist-block">
                                    <ul className="watchlist-stock-elements"> 

                                        <li className="watchlist-stock-item">
                                            <span className="watchlist-abbr">TWTR</span>
                                            <span></span>
                                            <span>
                                                <span>numbers</span>
                                                <span>numbers</span>
                                            </span>
                                        </li>

                                        <li className="watchlist-stock-item">
                                            <span>TSLA</span>
                                            <span><WatchlistGraph data={TSLA}/></span>
                                            <span>
                                                <span>numbers</span>
                                                <span>numbers</span>
                                            </span>
                                        </li>

                                        <li className="watchlist-stock-item">
                                            <span>NFLX</span>
                                            <span></span>
                                            <span>
                                                <span>numbers</span>
                                                <span>numbers</span>
                                            </span>
                                        </li>

                                        <li className="watchlist-stock-item">
                                            <span>GME</span>
                                            <span></span>
                                            <span>
                                                <span>numbers</span>
                                                <span>numbers</span>
                                            </span>
                                        </li>

                                    </ul>
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
