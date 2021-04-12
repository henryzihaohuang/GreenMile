import React from 'react';

class DepositDisclosure extends React.Component {
    constructor(props){
        super(props)

        this.state={
            amount: 0.00,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
 
        this.props.addDeposit(this.state.amount, this.props.currentUser)
            
        this.setState({ amount: 0.00 })
    }

    handleChange(field) {
        return (e) => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        return (
            <span className="deposit-modal-content">
                <span>
                    <span className="close-x-element" onClick={this.props.closeModal}>✕</span>
                </span>
                <span>
                    <h1>Deposit Funds</h1>
                    <br />
                </span>
                <span className="deposit-modal-text">
                    <p>Amount</p>
                </span>

                <span>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder='$0.00'
                        onChange={this.handleChange('amount')}
                        value={this.state.amount}
                    ></input>
                </span>

                <button onClick={this.handleSubmit}>Cha-ching!</button>

            </span>
        )
    }

}

export default DepositDisclosure;