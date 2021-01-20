import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
        .then(() => this.props.history.push("/"));
    }

    handleInput(field) {
        // debugger
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        // debugger
        const errors = this.props.errors.map((error) => {
            
            return (
                <li>{error}</li>
            )
        });

        const signupPage = () => {
            return (
            <div className="session-form">
                <h1>Make your money move</h1>
                <h3>GreenMile lets you invest in companies you love, commission-free.</h3>

                <form>
                    <label>First name:
                        <input 
                        type="text" 
                        value={this.state.first_name} 
                        onChange={this.handleInput('first_name')} />
                    </label>

                    <label>Last name:
                        <input 
                        type="text" 
                        value={this.state.last_name} 
                        onChange={this.handleInput('last_name')} />
                    </label>

                    <label>Email:
                        <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.handleInput('email')} />
                    </label>

                    <label>Password:
                        <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleInput('password')} />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up </button>

                </form>
                <ul>{errors}</ul>
            </div>
        )};


        const loginPage = () => {
            return (
                <div className="session-form"> 
                    <h3>Welcome to GreenMile</h3>

                    <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')} />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>

                        <button onClick={this.handleSubmit}>Sign In </button>

                    </form>
                    <ul>{errors}</ul>
                </div>
            )
        }; 

        return (this.props.formType === 'signup') ? signupPage() : loginPage();

    }
}

export default SessionForm;