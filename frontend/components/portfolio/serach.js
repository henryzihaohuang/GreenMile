import React from 'react';
import { withRouter } from 
'react-router-dom';


class Search extends React.component{

    construtor(props){
        super(props)

        this.state={
            searchInput:""
        }
    }


    componentDidMount(){
        if(!this.props.stocks){
            
        }
    }

}