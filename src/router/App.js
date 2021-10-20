import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Info from '../components/info';
import AdminApp from '../components/AdminApp';
import AdminHome from '../components/AdminHome';
import UserHome from '../components/userHome';
// import { CreateDynamicPlaylist } from "../containers/CreateDynamicPlaylist";
// import Listboard from '../src2/Listboard';
import ListCreator from '../jammming/src/Components/App/ListCreator';

class App extends React.Component {
  state = {
    expiryTime: '0'
  };

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  render() {
    return (
      <BrowserRouter>
      <div className="dashboard"></div>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props) => (
                <Home isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/redirect"
              render={(props) => (
                <RedirectPage
                  isValidSession={this.isValidSession}
                  setExpiryTime={this.setExpiryTime}
                  {...props}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard  isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/adminhome"
              render={(props) => (
                <AdminHome  isValidSession={this.isValidSession} {...props} />
              )}
            />
             <Route
              path="/adminapp"
              render={(props) => (
                <AdminApp  isValidSession={this.isValidSession} {...props} />
              )}
            />
              <Route
              path="/createplaylist"
              render={(props) => (
                <ListCreator  isValidSession={this.isValidSession} {...props} />
              )}
            
            />  
            
            {/* <Route
              path="/about"
              render={(props) => (
                <Info isValidSession={this.isValidSession} {...props} />
              )}
            /> */}
            
            <Route component={NotFoundPage} />
          </Switch>
          <section className="main__bottom">
					<Switch> 
						
						 <Route path exact="/about">
							
						</Route>
					</Switch>
				</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
