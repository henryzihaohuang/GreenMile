import React from 'react';

class Disclosure extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        return(
            <div className="modal-content">
                <div onClick={this.props.closeModal} className="close-x">X</div>

                <h1>Free Stock Disclosure</h1>

                <p>The free stock offer is available to new users only, subject to the terms and conditions at rbnhd.co / freestock.Free stock chosen randomly from the program’s inventory.</p>
            </div>

        )
    }
    
}


export default Disclosure;