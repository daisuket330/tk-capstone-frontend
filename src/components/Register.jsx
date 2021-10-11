import axios from 'axios';
import React,{ Component} from 'react';
import './Register.css'

class Register extends Component {
    state = { 
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      userEmail:''
     }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  //create user in DB
  handleSubmit=(event) =>{
    let aUser ={
      'first_name' : this.state.firstName,
      'last_name': this.state.lastName,
      'username': this.state.userName,
      'password': this.state.password,
      'email': this.state.userEmail
    }  
    // Post user to DB via function, axios call
      this.addNewUser(aUser)
  };

  async addNewUser(newUser){
    await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser).then(response => {alert("Registration complete! You may now login.")})
  }


  render() { 
    return ( 
      <div class = "wrapper">
          <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 320}}>
          <div class="card-header"><h4 class = "card-title">Register for an Account</h4></div>
            <div class="card-body">
            <ul>
                  <form className="form" onSubmit={this.handleSubmit}>
                  <li><label>First Name</label></li>
                  <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                  <li><label>Last Name</label></li>
                  <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                  <li><label>Username</label></li>
                  <input name="userName" onChange={this.handleChange} value={this.state.userName}/>
                  <li><label>Password</label></li>
                  <input name="password" onChange={this.handleChange} value={this.state.password}/>
                  <li><label>Email</label></li>
                  <input name="userEmail" onChange={this.handleChange} value={this.state.userEmail}/>
                  <br /><br />
                  <button type = "submit">Create account</button>
                  </form>
                </ul>
            </div>  
          </div>
      </div>


     );
  }
}
 
 export default Register