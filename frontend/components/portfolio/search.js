import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state={
            searchInput:"",
            searchResult: [],
            searching: true,
            renderResults: "hidden"
        }

        this.handleChange = this.handleChange.bind(this)
        this.searchDropdown = this.searchDropdown.bind(this)
    }

    handleChange(){
        return (e) => {
            this.state.searching = true;
            if (this.state.searching){
                this.setState({ renderResults: "search-results-dropdown"})
            }

            this.setState({searchInput:e.target.value})

            this.props.fetchSearch(e.target.value)
                .then((res)=>{
                    this.setState({
                            searchResult: res.abbr
                    })
            })
        }
    }

    searchDropdown(){
        if (Object.keys(this.state.searchResult).length === 0) { 
            return <div className="search-not-found"> We were unable to find any results for your search.</div> 
        } else { 
            return (

                <div className="search-results-dropdown">
                    <span className="search-stocks-header">Stocks</span>
                
                {this.state.searchResult.map((searchResults, idx) => {
                    return (
                        <div className="search-return">
                            <Link to={{
                                pathname: `/stock/${searchResults.symbol}`,
                                state: {abbreviation: searchResults.symbol, 
                                name: searchResults.securityName}} }
                                className='search-return-element' 
                                key={idx}>

                                <span className="search-return-element-symbol" > {searchResults.symbol}</span>
                                <span className="search-return-element-company"> {searchResults.securityName}</span>
                            </Link>
                        </div>)
                })}

                </div>
                
            )
        }
    }

    render(){
        return(
            <div className="">
                <div className="searchbar-block">
                    <input
                        type="text"
                        className="searchbar-element"
                        placeholder="Search"
                        onChange={this.handleChange()}
                    />
                </div>

                <div className={`search-results-dropdown {${this.state.renderResults}`}>
                         {this.searchDropdown()}
                </div>
            </div>
        )
    }
}

export default Search;