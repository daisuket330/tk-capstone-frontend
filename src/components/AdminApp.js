
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
            <Route exact path="/adminapp">
              {user && user._id ? (
                <AdminHome setLoginUser={setLoginUser} />
              ) : (
                <AdminLogin setLoginUser={setLoginUser} />
              )}
            </Route>
            
            <Route exact path="/login">
              <AdminLogin setLoginUser={setLoginUser} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default AdminApp;