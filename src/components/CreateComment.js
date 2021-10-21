import React, { Component } from 'react';
import axios from 'axios';


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments,
            comment: '',
            // song_id: ''
            
         }
    }

    

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
        event.preventDefault();
        this.addComment();
        console.log("Props for create: ", this.props)
        
        this.setState({
            comment:""
        })
        console.log("State of comment:",this.state.comment)
     }  

    addComment = async() => {
        const comment = {
            
            body: this.state.comment,
            // song_id : this.state.song_id 
           
            
        };
        try{
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/comments/`, comment);
            console.log(response);
            
        }
        catch{
            console.log("Unsuccessful Comment Add");
        }
      }   

    render() { 
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <label>Leave A Comment:</label>
                <input className="maskedBox" size="100" name="comment" onChange={this.handleChange} value={this.state.comment}></input>
                <button className="btn" type="submit">Add Comment</button>
            </form>
         );
    }
}
 
export default CreateComment;