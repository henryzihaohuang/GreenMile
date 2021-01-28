import React from 'react';
import Graph from './graph';
import WatchlistGraph from './watchlist_graph';


class Portfolio extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        // debugger
        this.props.fetchHistory("TSLA", "1y");
        // this.props.fetchHistory("NFLX", "5d");

        this.props.fetchNews("TSLA");
        debugger
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action()
            .then(() => this.props.history.push('/'));
    }

    
    render(){
        // debugger

        if (Object.values(this.props.entities.stock).length===0){
            return null;
        };
            
            const TSLA = this.props.entities.stock.TSLA['chart'];
            // const NFLX = this.props.entities.stock.NFLX['chart'];
            const news = this.props.entities.news
            debugger

            const img = `${ news[0].image }`

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


                        <section className="portfolio-popular-list-wrapper">
                            <span className="portfolio-popular-list-header">
                                <span>Popular Lists</span>
                                <span>None of this is real</span>
                            </span>

                            <span className="portfolio-popular-list-element">


                                <span className="portfolio-popular-list-tag">
                                    Billboard top 100
                                </span>

                                <span className="portfolio-popular-list-tag">
                                    I have $3
                                </span>

                                <span className="portfolio-popular-list-tag">
                                    CHINA
                                </span>
                                <span className="bubble">
                                    <span className="portfolio-popular-list-tag">
                                        Tech, Media, & Everything Matrix
                                    </span>
                                </span>
                                <span className="portfolio-popular-list-tag">
                                   For Drag queens 
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    This one is literally just for Oprah
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Help me I'm poor
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Red pill
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Blue pill
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Stonks
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    11010101010110101011
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Wake up Neo
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Venti Salt Caramel Macchiato, please
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    Bloop bleep bloop...rendering
                                </span>
                                <span className="portfolio-popular-list-tag">
                                    I needa do some yoga
                                </span>


                            </span>
                        </section>

                        <section className="portfolio-news-wrapper">
                            <span className="portfolio-news-element-header">
                                <span>News</span>
                            </span>

                            <span className="portfolio-news-block">
                                <span className="portfolio-news-element">
                                    <span className="portfolio-news-element-body">
                                        <span className="news-source-text">
                                            {news[0].source}
                                        </span>
                                        <span className="news-headline-text">
                                            {news[0].headline}
                                        </span>
                                        <span className="news-summary-text">
                                            {news[0].summary}
                                        </span>
                                    </span>
                                    <span className="portfolio-news-element-img">
                                        <span>
                                                <img className="news-img" src={img} />
                                        </span>
                                    </span>
                                </span>


                                <span className="portfolio-news-element">
                                    <span className="portfolio-news-element-body">
                                        <span className="news-source-text">
                                            {news[1].source}
                                        </span>
                                        <span className="news-headline-text">
                                            {news[1].headline}
                                        </span>
                                        <span className="news-summary-text">
                                            {news[1].summary}
                                        </span>
                                    </span>
                                    <span className="portfolio-news-element-img">
                                        <span>
                                            <img className="news-img" src={img} />
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
                                            <span><WatchlistGraph data={TSLA} /></span>
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
