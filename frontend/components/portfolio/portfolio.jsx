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
            <div>
            <h1>Portfolio</h1>
            
            <h2>Balance: $10000000000 babyyyyy kaching kaching you r rich</h2>

                <button onClick={this.handleSubmit}>Logout</button>
    
            </div>

        )
    }

}

export default Portfolio;
