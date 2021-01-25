import React from 'react';

class FooterDisclosure extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className="footer-modal-content">
                <span>
                    <span className="close-x-element" onClick={this.props.closeModal}>✕</span>
                </span>
               
                <span>
                    <h1>Disclosures</h1>
                    <br />
                </span>

                <span className="footer-disclosure-text">
                    <p>
                        Robinhood means Robinhood Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhood Financial, Robinhood Securities, and Robinhood Crypto.
                        <br/>
                    </p>
                    <p>
                        All investments involve risks, including the possible loss of capital.
                        <br />
                    </p>
                    <p>
                        Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the <a className="footer-disclosure-link" href="https://www.finra.org/">Financial Industry Regulatory Authority (FINRA)</a>.
                        <br />
                        <br />
                    </p>
                    <p>
                        Robinhood Financial LLC is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at <a className="footer-disclosure-link" href="www.sipc.org">www.sipc.org</a>.
                        <br/>
                        <br />
                    <p>
                            Robinhood Financial is currently registered in the following <a className="footer-disclosure-link" href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Jurisdictions.pdf">jurisdictions</a>. This is not an offer, solicitation of an offer, or advice to buy or sell securities, or open a brokerage account in any jurisdiction where Robinhood Financial is not registered.
                        <br />
                        <br />
                    </p>
                        Cryptocurrency trading is offered through an account with Robinhood Crypto. Robinhood Crypto is not a member of FINRA or SIPC. Cryptocurrencies are not stocks and your cryptocurrency investments are not protected by either FDIC or SIPC.
                        <br />
                        <br />
                    </p>
                    <p>
                        Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors.
                        <br />
                    </p>
                </span>
            </span>
        )
    }

}

export default FooterDisclosure;