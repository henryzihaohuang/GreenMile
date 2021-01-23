import React from 'react';

class Disclosure extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        debugger
        return(
            <div className="modal-content">
                <div>
                    <span className="close-x-element" onClick={this.props.closeModal}>X</span>
                </div>
                <div>
                    <h1>Free Stock Disclosure</h1>
                </div>
                <div>
                    <p>The free stock offer is available to new users only, subject to the terms and conditions at rbnhd.co / freestock.Free stock chosen randomly from the program’s inventory.</p>
                </div>
                
            </div>
        )
    }
    
}

export default Disclosure;