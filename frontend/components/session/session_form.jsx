import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
        .then(() => this.props.history.push("/portfolio"));
    };

    handleInput(field) {
        // debugger
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    };

    handleErrors() {

        const errorClass = this.props.errors.length > 0 ? "error-reveal" : "error-hidden";
        // debugger
        return(
            <ul className = {errorClass}>
                {this.props.errors.map((error, i)=>{
                    return(
                        <li key={`${i}`}>{error}</li>
                    )
                })}
            </ul>
        )
    };

    handleDemo(e) {
        this.props.action({ email: "dollyparton@gmail.com", password: "password" })
    }


    // inputFocus(i) {
    //     if (i.value == i.defaultValue) { i.value = ""; i.style.color = "#000"; }
    // }
    // inputBlur(i) {
    //     if (i.value == "") { i.value = i.defaultValue; i.style.color = "#888"; }
    // }

    render() {
        const signupPage = () => {
            return (
                <div className="signup-page">
                    
                    <div className="form-area">
                        <form className="form-box">
                            
                        <div className="form-greeting-box">
                                <div className="logo-textbox">
                                    <a className="green-mile-text" href="/"> GreenMile </a>

                                    <a href="/"><img className="logo-img" src={window.logoURL} />
                                    </a>
                                </div>
                            </div>

                            <div className="form-greeting">
                                    <h1 className="form-greeting"><span>Make Your Money Move</span></h1>
                                    <br />
                                    <h3 className="form-greeting2"><span>GreenMile lets you invest in companies you love, commission-free.</span></h3>
                            </div>
                        

                        <div className="error-messages">
                            {this.handleErrors()}
                        </div>

                            <div className="first-last-inputs">
                                <div className="firstname-input">
                                    <input 
                                    type="text" 
                                    value={this.state.firstName} 
                                    onChange={this.handleInput('firstName')} 
                                    className="firstname-input"
                                    placeholder="First Name"/>
                                </div>

                                <div className="lastname-input">
                                    <input 
                                    type="text" 
                                    value={this.state.lastName} 
                                    onChange={this.handleInput('lastName')}
                                    className="lastname-input" 
                                    placeholder="Last Name"/>
                                </div>
                            </div>

                            <div className="email-password">
                                <div className="form-input">
                                    <input 
                                    type="text" 
                                    value={this.state.email} 
                                    onChange={this.handleInput('email')} 
                                    className="input-textbox"
                                    placeholder="E-mail"/>
                                </div>

                                <div className="form-input">
                                    <input 
                                    type="password" 
                                    value={this.state.password} 
                                    onChange={this.handleInput('password')}
                                    className="input-textbox" 
                                    placeholder="Password"/>
                                </div>
                            </div>

                            <button className="session-submit" onClick={this.handleSubmit}>Continue </button>

                            <div className="footer-box">
                                <div className="signup-footer">

                                <p>All investments involve risk, including the possible loss of principal. Investors should consider their investment objectives and risks carefully before investing.
                                <br />
                                
                                <p>Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see GreenMile Financial’s <a src="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Fee%20Schedule.pdf">fee schedule</a> to learn more.
                                </p>

                                <br />
                                <p>Securities trading offered through GreenMile Financial LLC. Brokerage clearing services offered through GreenMile Securities, LLC. Both are subsidiaries of GreenMile Markets, Inc.
                                </p>
                                <br />
                                <p><a src="https://brokercheck.finra.org/">Check the background of GreenMile Financial LLC and GreenMile Securities, LLC on FINRA’s BrokerCheck.</a>
                                </p>
                                <br />
                                © 2020 GreenMile. All rights definitely not reserved.</p>
                                </div>
                            </div>
                        </form>

                        
                    </div>

                    <div className="sidebar-box">
                        <div className="sidebar-content">
                            <div className="sidebar-text">
                                <div>
                                    <h6 className="sidebar-text-title">Commission-free trading</h6>
                                    <br />
                                    <p>Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. Other fees may apply. View our <a src="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Fee%20Schedule.pdf">fee schedule</a> to learn more.</p>
                                </div>
                                <br />
                                <div>
                                    <h6 className="sidebar-text-title">Account Protection</h6>
                                    <br />
                                    <p>Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000. For details, please see <a src="https://www.sipc.org/">www.sipc.org.</a></p>
                                </div>
                                <br />
                                <div>
                                    <h6 className="sidebar-text-title">Stay on top of your portfolio</h6>
                                    <br />
                                    <p>Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        };


        const loginPage = () => {
            return (
                <div className="login-page">

                    <div className="session-img-frame">
                        <img className="session-img" alt="session-img" src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" />
                    </div>
                    <div className="login-form-box">
                        <div className="login-form"> 
                            <div className="form-greeting-textbox">
                                <h3 className="form-greeting">Welcome to GreenMile</h3>
                            </div>

                            

                            <form className="login-form-area">
                                
                                <div className="label">
                                    <label className="login-form-email-entry">Email:</label>
                                </div>
                                <div className="login-input">
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleInput
                                        ('email')}
                                        className="email" />
                                </div>


                                <div className="label">
                                    <label className="label-text">Password:</label>
                                </div>
                                <div className="login-input">
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInput('password')} 
                                        className="password"/>
                                </div>

                                <div className="forgot-password">
                                    <p>Forgot your username or password? Try our demo account!</p>
                                </div>
                            
                                <div className="error-messages">
                                    {this.handleErrors()}
                                </div>

                                <div className="session-submit-box">
                                    <button className="session-submit" onClick={this.handleSubmit}>Sign In </button>

                                    <button className="demo-submit" onClick={this.handleDemo}>Try Demo</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            )
        }; 

        return (
            <div className="session-form">
                <div>
                {this.props.formType === 'signup' ? signupPage() : loginPage()}
                </div>
            </div>
        )
    }
}

export default SessionForm;