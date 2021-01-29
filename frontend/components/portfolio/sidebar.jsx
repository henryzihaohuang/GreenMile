import React from 'react';
import WatchlistGraph from './watchlist_graph';

class Sidebar extends React.Component {
    render (){
        return(
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
                                    <span>GME</span>
                                    <span><WatchlistGraph data={this.props.GME} /></span>
                                    {/* <span>
                                        <span>numbers</span>
                                        <span>numbers</span>
                                    </span> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <span>NFLX</span>
                                    <span><WatchlistGraph data={this.props.NFLX} /></span>
                                    {/* <span>
                                        <span>numbers</span>
                                        <span>numbers</span>
                                    </span> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <span>FB</span>
                                    <span><WatchlistGraph data={this.props.FB} /></span>
                                    {/* <span>
                                        <span>numbers</span>
                                        <span>numbers</span>
                                    </span> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <span className="watchlist-abbr">TWTR</span>
                                    <span><WatchlistGraph data={this.props.TWTR} /></span>
                                    {/* <span>
                                        <span>numbers</span>
                                        <span>numbers</span>
                                    </span> */}
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
            </section>
        )
    }
}

export default Sidebar;