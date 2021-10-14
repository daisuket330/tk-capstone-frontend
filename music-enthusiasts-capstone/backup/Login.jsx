import axios from 'axios';
import React, { Component } from 'react';
import './Login.css'
import jwtDecode from 'jwt-decode';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        const jwt= localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user})
        }catch{}
    }

    handleChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let payload ={
            'username': this.state.username,
            'password': this.state.password
        }
        this.loginUser(payload)


    }

    loginUser = async (payload) => {
      let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, payload)
      console.log(response.data)
      localStorage.setItem('token', response.data.access);
      window.location = '/home';
      //resets form
      return localStorage;
      
    }

  render(){

    return (
        <div class="wrapperLogin">
            <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 480, justifyContent:'center',alignContent:'center'}}>
                <div class="card-header"><h4 class = "card-title">Welcome to your song stop!</h4></div>
                <div class="card-body">
                    <h4 class = 'card-title'>Please Log In </h4>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="Username" onChange = {this.handleChange} value= {this.state.username} />
                            <input name="password" type="password" placeholder="Password" onChange = {this.handleChange} value={this.state.password} />
                            
                            <input type="submit" value="Login" class="btn btn-primary" />
                        </form>
                </div>
            </div>
        </div>


    )
}
}
  


export default Login ;