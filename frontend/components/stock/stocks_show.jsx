import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Mainblock from '../portfolio/mainblock';
import Sidebar from '../portfolio/sidebar';
import Buy from './buy';
import Sell from './sell';

//TO DO: figure out webpack plugin error
// import { Spinner } from 'react-loading-io';

class StocksShow extends React.Component {
    constructor(props){
        super(props)

        this.state={
            companyInfo: "",
            priceInfo: "",
            loading:true
        };

        this.symbol = this.props.match.params['abbreviation']
    };

    componentDidMount() {
        this.props.fetchCompany(this.symbol)
            .then( (info) => {
                this.setState({companyInfo: info})});
                
        this.props.fetchHistory(this.symbol, '5y')
            .then((prices) => {
                this.setState({
                    loading: false,
                    priceInfo: prices})})
    };

    

    render() {
        const tabArr = [
            { title: "Buy", content: <Buy /> },
            { title: "Sell", content:<Sell /> },
        ]


        //TO DO: setTimeout for loading animation
        if (this.state.loading) {
            // return (<div><Spinner size={30} color='#47c807' speed={1.03}/></div>);
            return (<div>Loading</div>);
        };

        return (
            <section className="portfolio-wrapper">
                <NavbarContainer />
                <section className="portfolio-main-wrapper">
                    <Mainblock 
                        openModal={this.props.openModal} 
                        data = {this.state.priceInfo.prices[this.symbol]['chart']} 
                        companyName = {this.state.companyInfo.company.companyName}
                    />
                    <Sidebar 
                        tabs = {tabArr} 
                        data={this.state.priceInfo.prices[this.symbol]['chart']} 
                        symbol = {this.symbol}
                    />
                </section>
            </section>
        )
    }
}

export default StocksShow;
