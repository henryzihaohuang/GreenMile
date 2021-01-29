import React from 'react';
import NewsContainer from './news_container';
import PopularLists from './popular_lists';
import Graph from './graph';

class Mainblock extends React.Component {
    render () {
        return(
            <span className="portfolio-main-block">
                <span className="portfolio-graph-block">
                    <span className="portfolio-balance-block">
                        <span className="balance-element">GameStop</span>
                        <span className="balance-element">$10,000</span>
                        <span>+$30.60 (+2.24%) <span className="today-afterhours-text-element">Today</span>
                        </span>
                        <span>-$0.29 (-0.02%) <span className="today-afterhours-text-element">After Hours</span></span>
                        <span className="graph-img">
                            <div className='portfolio-chart-block'>
                                <Graph data={this.props.data} className="main-graph" />
                            </div>
                        </span>
                        <br />
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

                <PopularLists />
                
                <NewsContainer />
            </span>
            )
    }
}

export default Mainblock;