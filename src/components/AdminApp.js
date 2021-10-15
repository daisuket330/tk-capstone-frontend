
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminLogout from './AdminLogout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";



function AdminApp() {
    
    const [user, setLoginUser] = useState({});
    return (
      <div className="App">
        <Router>
          <Switch>
          
            <Route exact path="/adminhome" component={AdminHome}/>
            <Route exact path="/adminlogin" component={AdminLogin}/>
            <Route exact path="/adminlogout" component={AdminLogout}/>
          </Switch>
        </Router>
      </div>
    );
  }
export default AdminApp;