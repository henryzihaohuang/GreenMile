import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.state={
            searchInput:"",
            searchResult: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.searchDropdown = this.searchDropdown.bind(this)
    }

    handleChange(){
        return (e) => {
            this.setState({ 
                searchInput: e.target.value, 
                searchResult: () => this.props.fetchSearch(this.state.searchInput)
            })
        }
        debugger
    }

    searchDropdown(){
        if (this.state.searchResult.length === 0) { 
            return <div className='search-result-error'> Sorry, can't find any results for that! Try another search </div> 
        }

        return this.state.searchResult['responseJSON'].map((searchResult) => {

            return (
                <div>
                    <div>{searchResult.symbol}</div>

                    <div>{searchResult.securityName}</div>
                </div>
            )
        })
    }

    render(){
        debugger
        return(
            <div>
                <div className="searchbar-block">
                    <input
                        type="text"
                        className="searchbar-element"
                        placeholder="Search"
                        onChange={this.handleChange()}
                    />
                </div>

                <div>
                    <div>Stocks</div>
                     <div>
                         {this.searchDropdown()}
                     </div>
                 </div>
            </div>
        )
    }
}

export default Search