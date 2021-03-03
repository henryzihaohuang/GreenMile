import React from 'react';
import NewsContainer from './news_container';
import PopularLists from './popular_lists';
import Graph from './graph';

class Mainblock extends React.Component {
    render () {
        if (this.props.companyName === undefined){
            this.props.companyName = "Balance"
        } 

        return(
            <div className="portfolio-main-block">
                <div className="portfolio-graph-block">
                    <div className="portfolio-balance-block">
                        <div className="balance-element">{this.props.companyName}</div>
                        <div className="balance-element">$10,000</div>
                        <div>+$30.60 (+2.24%) <div className="today-afterhours-text-element">Today</div>
                        </div>
                        <div>-$0.29 (-0.02%) <div className="today-afterhours-text-element">After Hours</div></div>
                        <div className="graph-img">
                            <div className='portfolio-chart-block'>
                                <Graph data={this.props.data} className="main-graph" />
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="time-bar-block">
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
                    </div>
                </div>

                <section onClick={() => this.props.openModal('deposit')} className="portfolio-buying-power-block">
                    <div className="buying-power">
                        <h2>Buying Power</h2>
                    </div>
                    <div className="balance"><p>$10,000</p></div>
                </section>

                <PopularLists />
                
                <NewsContainer />
            </div>
            )
    }
}

export default Mainblock;