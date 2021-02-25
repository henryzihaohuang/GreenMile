import React from 'react';

class HomeBlockOne extends React.Component {

    render() {
        return(
            <div className="block-one-wrapper">
                <div className="block-one-header-element"> 
                    See our fee schedule to learn more about cost. 
                </div>

                <div className="block-content-wrapper">
                    <div className="block-content-block">
                        <div className="block-content-video"> 
                            <video src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" />
                        </div>
                        <div className="block-content-text">
                            We are all investors. 
                            <br />
                            See the campaign <img></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBlockOne