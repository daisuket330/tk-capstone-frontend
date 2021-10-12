import React from "react";
import axios from "axios";


class MusicSearch extends React.Component {
    state = {
        searchTerm: '',
        search: [],
        song: []
        
    }
    
    async getSongs() {
        let response = await axios.get('https://shazam.p.rapidapi.com/search', {
            params: {term: this.state.search, offset: '0', limit: '5'},
            headers: {
                'x-rapidapi-host': 'shazam.p.rapidapi.com',
                'x-rapidapi-key': '96e48c3874msh33ec542cdf201e4p160dffjsn09c4d872af46'
            }
        });
        console.log(response)
        this.setState({
            songs: response.data,
            search:this.state.search
            
        });
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value}
            )
    };
    handleSubmit = (event) => {
        event.preventDefault()
        this.getSongs()
    
          }
    
    
    
    
    render(){
        return(
        <nav className="navbar navbar-light bg-light">
            <div className="container">
             <form onSubmit={this.handleSubmit}>
                <label>Search:</label>
                <input name="search" onChange={this.handleChange} value = {this.state.search}></input>
                <button className="btn" type="submit">Search</button>
                </form>
                <br /><br />
            </div>
        </nav>          
        );
        }
    }
    export default MusicSearch;