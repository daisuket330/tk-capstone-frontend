import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:''
         }
    }

    callBackFunction = () =>{
        let searchData = this.state.search
        this.props.search(searchData);
    }

    
    handleChange = (event) =>{
        this.setState({          
            [event.target.name]: event.target.value         
        });
       
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.callBackFunction();
     }

    render() { 
        return ( 
            <div>
                <form  onSubmit={this.handleSubmit}>
                
                <input placeholder="Search" name="search" onChange={this.handleChange} value = {this.state.search}></input>
                <button  type="submit">{<SearchIcon />}</button>
                </form>
            </div>
         );
    }
}
export default Search;