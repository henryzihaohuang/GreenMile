import React from 'react';
import NavbarContainer from './navbar_container';
import Mainblock from './mainblock';
import Sidebar from './sidebar';


class Portfolio extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nextImg: false
        }
    }

    handleClick() {
        this.setState({ nextImg: !this.state.nextImg })
    }


    
    componentDidMount() {
        this.props.fetchHistory("GME", "1y");
    }


    render() {
           
        if (Object.values(this.props.entities.stock).length===0) {
                return null;
            };
            
            const GME = this.props.entities.stock.GME['chart'];
            debugger

        const imgUrl = this.state.nextImg ?  {window.}: null;
        const divStyle = { backgroundImage: 'url(' + imgUrl + ')' };
            
        return(
            <section className="portfolio-wrapper">

                <NavbarContainer />

                <section className="portfolio-main-wrapper">
                    <Mainblock data={GME}/>
                    <Sidebar 
                        GME={GME} />
                </section>

            </section>
        )
    }
}

export default Portfolio;
