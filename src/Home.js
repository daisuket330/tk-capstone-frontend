import React from "react";
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import { Redirect } from 'react-router-dom';
// import Info from './info';
// import Player from "./Player";
// import Song from "./Song";
// import Library from "./Library";
// import Nav from "./Nav";
// // import "./Home.css"
// import styled from "styled-components";
import HomePlayer from "./components/homeplayer";
import AdminApp from "./components/AdminApp";

// Import data
// import data from "./data";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  const handleadminLogin = () => {
    window.location = `http://localhost:3000/adminapp`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;



  return (
    <>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && (
            <Alert variant="info">Session expired. Please login again.</Alert>
          )}
          <Button variant="info" type="submit" onClick={handleLogin}>
            Login to spotify
          </Button>
          {/* <Button variant="info" type="submit" onClick={handleadminLogin}>
           admin login
          </Button> */}
        <HomePlayer/>
          
	
        </div>
        
      )}
    </>
  );
};

export default connect()(Home);
