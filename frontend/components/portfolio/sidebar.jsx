import React from 'react';
import WatchlistGraph from './watchlist_graph';

class Sidebar extends React.Component {

    constructor(props){
        super(props)

        this.state = { 
            currentTab: 0 
        }

        //to-do: style buy/sell tabs
        this.selectedTab = this.selectedTab.bind(this);
    }

    selectedTab(e) {
        e.preventDefault();
        this.setState({ currentTab: parseInt(e.currentTarget.className) })
    }
   
    render(){
        if (this.props.symbol) {
            const buyOrSell = this.props.tabs.map((el, idx) => {
                if (idx === this.state.currentTab) {
                    return (
                        <span onClick={this.selectedTab} className={idx} key={idx}>
                            <span className="portfolio-sidebar-stocks-header">
                                <h6 className="tabs-container-text">{el.title} {this.props.symbol}</h6>
                            </span>
                        </span>
                    )
                } else {
                    return (
                        <span onClick={this.selectedTab} className={idx} key={idx}>
                            <span className="portfolio-sidebar-stocks-header">
                                <h6 className="tabs-container-text">{el.title} {this.props.symbol}</h6>
                            </span>
                        </span>
                    )
                }
            });

             return (
                 <section className = "portfolio-sidebar-wrapper" >
                 <div className="portfolio-sidebar-block">
                     <div className="portfolio-sidebar-elements">
                         <div className="portfolio-sidebar-frozen-row">
                             {buyOrSell}
                         </div>
                        <div>{(this.props.tabs[this.state.currentTab].content)}</div>
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
                 </section >
             )
         } else {
             return (
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
}

export default Sidebar;