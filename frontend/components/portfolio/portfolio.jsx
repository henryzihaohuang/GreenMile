import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Mainblock from './mainblock';
import Sidebar from './sidebar';

class Portfolio extends React.Component{

    componentDidMount() {
        this.props.fetchHistory("GME", "1y");
    }

    render() {
           
        if (Object.values(this.props.entities.stock).length===0) {
                return null;
            };
            
            const GME = this.props.entities.stock.GME['chart'];
            
        return(
            <section className="portfolio-wrapper">
                <NavbarContainer />
                <section className="portfolio-main-wrapper">
                    <Mainblock 
                        openModal={this.props.openModal} 
                        data={GME} 
                        companyName="Balance" 
                        addFunds={this.props.addFunds}/>
                    <Sidebar props = {this.props} data={GME} />
                </section>
            </section>
        )
    }
}

export default Portfolio;
