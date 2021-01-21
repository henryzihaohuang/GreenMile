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
        const signupPage = () => {
            return (
            <div className="session-form">
                <h1>Make your money move</h1>
                <h3>GreenMile lets you invest in companies you love, commission-free.</h3>

                <form>
                    <label>First name:
                        <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange={this.handleInput('firstName')} />
                    </label>

                    <label>Last name:
                        <input 
                        type="text" 
                        value={this.state.lastName} 
                        onChange={this.handleInput('lastName')} />
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
                </div>
            )
        }; 

        return (
            <div>
            <img className="session-img" alt="session-img" src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" /> 
            
            {this.props.formType === 'signup' ? signupPage() : loginPage()}

            </div>
        )
    }
}

export default SessionForm;