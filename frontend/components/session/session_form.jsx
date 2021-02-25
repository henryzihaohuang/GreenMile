import React from 'react';
import { Link } from 'react-router-dom';

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
            this.props.clearErrors([])
        }
    };

    componentWillUnmount() {
        this.props.clearErrors([])
    }

    handleErrors() {

        const errorClass = this.props.errors.length > 0 ? "error-revealed" : "error-hidden";
        // debugger
        return (
            <ul className={errorClass}>
                {this.props.errors.map((error, i) => {
                    return (
                        <div>
                            <li key={`${i}`}>{error}</li>
                        </div>
                    )
                })}
            </ul>
        )
    };

    
    handleDemo(e) {
        this.props.action({ email: "dollyparton@gmail.com", password: "password123" })
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
                <section className="signup-wrapper">
                    <section className="signup-form-wrapper">
                        <form className="signup-form-block">
                            
                            <div className="signup-logo-block">
                                <div className="signup-logo-element">
                                    <a className="signup-logo-text" href="/"> GreenMile </a>
                                    <a href="/"><img className="signup-logo-img" src={window.logoURL} />
                                    </a>
                                </div>
                            </div>

                            <div className="signup-greeting-block">
                                <h1 className="signup-greeting-element"><div>Make Your Money Move</div></h1>
                                    <br />
                                <h3 className="signup-greeting-element-2"><div>GreenMile lets you invest in companies you love, commission-free.</div></h3>
                            </div>

                            <div className="first-last-inputs-block">
                                <div className="firstname-input">
                                    <input 
                                    type="text" 
                                    value={this.state.firstName} 
                                    onChange={this.handleInput('firstName')} 
                                    className="name-input-element"
                                    placeholder="First Name"/>
                                </div>

                                <div className="lastname-input">
                                    <input 
                                    type="text" 
                                    value={this.state.lastName} 
                                    onChange={this.handleInput('lastName')}
                                    className="name-input-element" 
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
                                    placeholder="Password (min. 10 characters)"/>
                                </div>
                            </div>


                            <div className="signup-button-block">
                                <button className="signup-button-submit" onClick={this.handleSubmit}>Continue</button>

                                <div className="already-have-acct">
                                    <div>
                                        Already have an account? 
                                    </div>
                                        <p><Link className="login-link" to="/login">Feel free to sign in.</Link></p>
                                </div>
                            </div>

                            <div className="signup-error-messages">
                                {this.handleErrors()}
                            </div>

                            <div className="signup-footer-wrapper">
                                <div className="signup-footer-block">
                                    <div>
                                        <p>All investments involve risk, including the possible loss of principal. Investors should consider their investment objectives and risks carefully before investing.</p>
                                        <br />
                                    </div>
                                    <div>
                                        <p>Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see GreenMile Financial’s <a className="signup-link" href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Fee%20Schedule.pdf">fee schedule</a> to learn more.
                                        </p>
                                        <br />
                                    </div>
                                    <div>
                                        <p>Securities trading offered through GreenMile Financial LLC. Brokerage clearing services offered through GreenMile Securities, LLC. Both are subsidiaries of GreenMile Markets, Inc.
                                        </p>
                                        <br />
                                    </div>
                                    <div>
                                        <p><a className="signup-link" href="https://brokercheck.finra.org/">Check the background of GreenMile Financial LLC and GreenMile Securities, LLC on FINRA’s BrokerCheck.</a>
                                        </p>
                                        <br />
                                        <p>© 2020 GreenMile. All rights definitely not reserved.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </form>

                        
                    </section>

                    <section className="signup-sidebar-wrapper">
                        <div className="signup-sidebar-block">
                            <div className="signup-sidebar-text">
                                <div>
                                    <h6 className="signup-sidebar-text-title">Commission-free trading</h6>
                                    <br />
                                    <p>Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. Other fees may apply. View our <a className="signup-link" href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Fee%20Schedule.pdf">fee schedule</a> to learn more.</p>
                                    <br />
                                </div>
                                <br />
                                <div>
                                    <h6 className="signup-sidebar-text-title">Account Protection</h6>
                                    <br />
                                    <p>Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000. For details, please see <a className="signup-link" href="https://www.sipc.org/">www.sipc.org.</a></p>
                                    <br />
                                </div>
                                <br />
                                <div>
                                    <h6 className="signup-sidebar-text-title">Stay on top of your portfolio</h6>
                                    <br />
                                    <p>Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )
        };


        const loginPage = () => {
            return (
                <section className="login-wrapper">
                    <div className="login-img-wrapper"> 
                        <img className="login-img-element" alt="login-to-greenmile" src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" />
                    </div>

                    <section className="login-form-wrapper">
                        <div className="login-form-block"> 
                            <div className="login-form-greeting-element">
                                <h3>Welcome to GreenMile</h3>
                            </div>
                            <form className="login-inputs-wrapper">
                                <div className="login-input-label">
                                    <label className="login-form-email-entry">Email:</label>
                                </div>
                                <div className="login-input-wrapper">
                                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} className="login-input-element" />
                                </div>
                                <div className="login-input-label">
                                    <label className="label-text">Password:</label>
                                </div>
                                    <div className="login-input-wrapper">
                                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} className="login-input-element"/>
                                    </div>
                                <div className="forgot-password">
                                    <p>Don't have an account? <Link className="forgot-password-green" to="/signup">Make a new one.</Link></p>
                                </div>
                            
                                <div className="login-error-messages">
                                    {this.handleErrors()}
                                </div>

                                <div className="login-button-block">
                                    <button className="login-button-submit" onClick={this.handleSubmit}>Sign In </button>

                                    <div className="demo-submit" onClick={this.handleDemo}>Try Demo</div>
                                </div>
                            </form>
                        </div>
                    </section>
            </section>
            
            )
        }; 

        return (
            <span>
                {this.props.formType === 'signup' ? signupPage() : loginPage()}
            </span>
        )
    }
}

export default SessionForm;