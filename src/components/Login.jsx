import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
//import jwt_decode from "jwt-decode";

class Login extends Component {
    state = {
        
        userName: '',
        password: '',       
            
    }

    loginUser =async () =>{


       
       const jwt = localStorage.getItem('token');
       //const resp = await axios.get('https://localhost:44394/api/authentication', {headers: {Authorization: 'Bearer '  +  jwt}})
       let response = await axios.post('https://localhost:44394/api/authentication/login', {userName:this.state.userName,password:this.state.password })
          
            localStorage.setItem('token' , response.data.token);
            this.setState({loggedIn : true});
            
            
          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.loginUser();
        
    };
   
        

    render(){
        if (this.state.loggedIn){
            return <Redirect to={'/home'}  {...window.location = "/"} />
           

        }
        return(
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)} className="container">
               
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.userName}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.password}/>
                
                <button type="submit">Login</button>
            </form>
            </React.Fragment>
        );
    }
}
export default Login;