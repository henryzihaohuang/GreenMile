import React from 'react';
import NavbarContainer from '../portfolio/navbar_container';
import Mainblock from '../portfolio/mainblock';
import Sidebar from '../portfolio/sidebar';


class StocksShow extends React.Component {
    constructor(props){
        super(props)

        this.state={
            companyInfo:""
        }

        this.symbol = this.props.match.params['abbreviation']
    }

    componentDidMount() {
        this.props.fetchHistory(this.symbol, "5y");

        this.props.fetchCompany(this.symbol).then((info) => {
            this.setState({ companyInfo: info })
        })
    }

    render() {
        if (Object.values(this.props.entities.stock).length === 0) {
            return null;
        };
       
        const stock = this.props.entities.stock[this.symbol];
        debugger
        return (
            <section className="portfolio-wrapper">
                <NavbarContainer />
                <section className="portfolio-main-wrapper">
                    <Mainblock data={stock['chart']} companyName={this.props.companyName}/>
                    <Sidebar data={stock['chart']}/>
                </section>
            </section>
        )
    }
}

export default StocksShow;
