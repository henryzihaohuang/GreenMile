import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Mainblock from '../portfolio/mainblock';
import Sidebar from '../portfolio/sidebar';


class StocksShow extends React.Component {
    constructor(props){
        super(props)

        this.state={
            companyInfo:"",
            priceInfo:"",
            loading:true
        }

        this.symbol = this.props.match.params['abbreviation']
    }

    componentDidMount() {
        this.props.fetchCompany(this.symbol)
            .then( (info) => {
                this.setState({companyInfo: info})});
                
        this.props.fetchHistory(this.symbol, '5y')
            .then((prices) => {
                this.setState({
                    loading: false,
                    priceInfo:prices})})

        // this.props.fetchHistory(this.symbol, '5y')
        // this.props.fetchCompany(this.symbol)
    }


    render() {
        //TO DO: setTimeout for loading animation
        if (this.state.loading) {
            return (<p>Loading</p>);
        };
       
        const stock = this.props.entities.stock[this.symbol];
        return (
            <section className="portfolio-wrapper">
                <NavbarContainer />
                <section className="portfolio-main-wrapper">
                    <Mainblock data={stock['chart']} companyName={this.state.companyInfo}/>
                    <Sidebar data={stock['chart']}/>
                </section>
            </section>
        )
    }
}

export default StocksShow;
