import React from 'react';

class FirstDisclosure extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        // debugger
        return(
            <span className="modal-content">
                <span>
                    <span className="close-x-element" onClick={this.props.closeModal}>✕</span>
                </span>
                <span>
                    <h1>Free Stock Disclosure</h1>
                    <br />
                </span>
                <span className="first-disclosure-text">
                    <p>The free stock offer is available to new users only, subject to the terms and conditions at <a href="rbnhd.co/freestock" className="disclosure-link"> rbnhd.co/freestock</a>. Free stock chosen randomly from the program’s inventory.</p>
                </span>
                
            </span>
        )
    }
    
}

export default FirstDisclosure;