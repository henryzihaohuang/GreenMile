import React from 'react';
import SearchContainer from './search_container';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/'));
    }

    //mouse leave event listener and focus event listener 

    render() {
        return(
            <section className="portfolio-nav-bar">
                <div>
                    <Link to="/portfolio"><img className="logo-img" src={window.logoURL} /></Link>
                </div>

                <SearchContainer />

                <div className="portfolio-nav-bar-block">
                    <ul>
                        <div className="portfolio-nav-bar-element">
                            <a className="portfolio-nav-bar-element" href="https://www.linkedin.com/in/zihaohuang/"><li>LinkedIn</li></a>
                        </div>
                        <div className="portfolio-nav-bar-element">
                            <a className="portfolio-nav-bar-element" href="https://github.com/henryzihaohuang"><li>GitHub</li></a>
                        </div>
                        <div className="portfolio-nav-bar-element-wip">
                            <li>Account</li>
                        </div>
                        <div className="portfolio-nav-bar-element">
                            <li><div onClick={this.handleSubmit}>Logout</div></li>
                        </div>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Navbar;