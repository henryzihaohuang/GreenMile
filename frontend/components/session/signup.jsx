import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(() => this.props.history.push("/"));
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        return (
            <div className="session-form">
                <h1>Make your money move</h1>
                <h3>GreenMile lets you invest in companies you love, commission-free.</h3>

                <form>
                    <label>First name:
                        <input type="text" value={this.state.firstName} onChange={this.handleInput('firstName')} />
                    </label>

                    <label>Last name:
                        <input type="text" value={this.state.lastName} onChange={this.handleInput('lastName')} />
                    </label>

                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up </button>

                </form>
            </div>
        );
    }
}

export default Signup;