import React from 'react';
import { ReactReduxContext } from 'react-redux';

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

    handleChange(e){
        return (e) => {
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
        if (this.state.searchResult.length === 0) { 
            return <div> Sorry, can't find any results for that! Try another search </div> 
        } else { 
                this.state.searchResult.map((searchResult) => {
                return (
                    <div>
                        <p>{searchResult.symbol}</p>
                        <p>{searchResult.securityName}</p>
                    </div>)
                }
            )
        }
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