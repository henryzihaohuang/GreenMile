import React from 'react';
import WatchlistGraph from './watchlist_graph';

class Sidebar extends React.Component {
    render (){
        return(
            <section className="portfolio-sidebar-wrapper">
                <div className="portfolio-sidebar-block">
                    <div className="portfolio-sidebar-elements">
                        <div className="portfolio-sidebar-frozen-row">
                            <div className="portfolio-sidebar-stocks-header">Stocks</div>
                            <div className="portfolio-sidebar-dropdown">...</div>

                        </div>

                        <div className="portfolio-sidebar-frozen-row">
                            <div className="portfolio-sidebar-watchlist-header">Lists</div>

                            <div className="portfolio-sidebar-dropdown-2">+</div>
                        </div>

                        <div className="watchlist-block">
                            <ul className="watchlist-stock-elements">


                                <li className="watchlist-stock-item">
                                    <div>GME</div>
                                    <div><WatchlistGraph data={this.props.data} /></div>
                                    {/* <div>
                                        <div>numbers</div>
                                        <div>numbers</div>
                                    </div> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <div>NFLX</div>
                                    <div><WatchlistGraph data={this.props.NFLX} /></div>
                                    {/* <div>
                                        <div>numbers</div>
                                        <div>numbers</div>
                                    </div> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <div>FB</div>
                                    <div><WatchlistGraph data={this.props.FB} /></div>
                                    {/* <div>
                                        <div>numbers</div>
                                        <div>numbers</div>
                                    </div> */}
                                </li>

                                <li className="watchlist-stock-item">
                                    <div className="watchlist-abbr">TWTR</div>
                                    <div><WatchlistGraph data={this.props.TWTR} /></div>
                                    {/* <div>
                                        <div>numbers</div>
                                        <div>numbers</div>
                                    </div> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Sidebar;