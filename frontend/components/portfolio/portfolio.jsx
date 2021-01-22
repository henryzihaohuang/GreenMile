import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action()
            .then(() => this.props.history.push('/'));
    }

    render(){
        return(
            <div className="portfolio">
                <div className="portfolio-content">
                    <div className="portfolio-header">
                        <header>
                            <h1>Portfolio</h1>
                        </header>
                    </div>
                    
                    <div className="balance-statement">
                        <h2>Balance: $10000000000 
                            <br />
                            babyyyyy kaching kaching you r rich
                            <br /> congrajulashuns</h2>
                    </div>

                    <img className="placeholder-img "src="https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg" />

                    <div className="portfolio-logout-box">
                        <button className="portfolio-logout"onClick={this.handleSubmit}>Logout</button>
                    </div>
                
                </div>
            </div>

        )
    }

}

export default Portfolio;
