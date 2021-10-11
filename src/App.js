import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
// import { render } from 'react-dom';
import { Switch, BrowserRouter as Router, Route,Redirect, } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './components/Home';



class App extends Component {
    state = { 
      user: ''
     }
     
     componentDidMount() {
       const jwt= localStorage.getItem('token');
        try{
          const user = jwtDecode(jwt)
          this.setState({user});
        }catch{

        }
  }

  render() { 
    const user = this.state.user;
    return ( 
      <Router>
      <div className = "App">
            <NavBar user = {user}/>   
            <Switch>
                <Route
                path ='/home'
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home />
                    }
                }}
                />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                
                
            </Switch>
        </div>
            </Router> 
        )
    }
}
export default App;