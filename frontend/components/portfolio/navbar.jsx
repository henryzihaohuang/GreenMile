import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/'));
    }


    render() {
        return(
            <section className="portfolio-nav-bar">
                <span>
                    <a><img className="logo-img" src={window.logoURL} /></a>
                </span>

                <span className="searchbar-block">
                    <input
                        type="text"
                        className="searchbar-element"
                        placeholder="Search"
                        results="0"
                    />
                </span>

                <span className="portfolio-nav-bar-block">
                    <ul>
                        <span className="portfolio-nav-bar-element">
                            <a className="portfolio-nav-bar-element" href="https://www.linkedin.com/in/zihaohuang/"><li>LinkedIn</li></a>
                        </span>
                        <span className="portfolio-nav-bar-element">
                            <a className="portfolio-nav-bar-element" href="https://github.com/henryzihaohuang"><li>GitHub</li></a>
                        </span>
                        <span className="portfolio-nav-bar-element-wip">
                            <li>Account</li>
                        </span>
                        <span className="portfolio-nav-bar-element">
                            <li><span onClick={this.handleSubmit}>Logout</span></li>
                        </span>
                    </ul>
                </span>
            </section>
        )
    }
}

export default Navbar;