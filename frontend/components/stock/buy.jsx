import React from 'react';

class Buy extends React.Component {

    render() {
        return(
            <div className="buy-form-block">
                <div className="shares-row">
                    <span>Shares</span>

                    <input
                        type="number"
                        step="1"
                        min="0"
                    ></input>
                </div>

                <div className="market-price-row">
                    <span>Market Price</span>
                    <span>$26.105 </span>
                </div>

                <div className="estimated-cost-row">
                    <span>Estimated Cost</span>
                    <span>Number</span>

                </div>

                <div className="submit-buy-button" >

                    <button>Buy</button>
                </div>

                <div>$0.00 Buying Power Available</div>


            </div>
        )
    }
}

export default Buy;
