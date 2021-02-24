import React from 'react';
import NavbarContainer from '../portfolio/navbar_container';
import Mainblock from '../portfolio/mainblock';
import Sidebar from '../portfolio/sidebar';


class StocksShow extends React.Component {

    componentDidMount() {
        this.props.fetchHistory(this.props.symbol, "5y");
    }

    render() {
        if (Object.values(this.props.entities.stock).length === 0) {
            return null;
        };

        debugger

        const stock = this.props.entities.stock.GME['chart'];

        return (
            <section className="portfolio-wrapper">

                <NavbarContainer />

                <section className="portfolio-main-wrapper">
                    <Mainblock data={stock}/>
                    <Sidebar data={GME}/>
                </section>
            </section>
        )
    }
}

export default StocksShow;
