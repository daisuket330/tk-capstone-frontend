import React, { useState } from 'react';
import "./info.css";
import { Button } from 'react-bootstrap';
// import { Switch,Route } from "react-router-dom";

import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
  // initiateLoadMoreSongs
} from '../actions/result';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';
import Info from './info';
import './dashboard.css'
import CreateComment from './CreateComment'
import UserLogout from './UserLogout';




const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory('albums');
      });
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const loadMore = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, playlist,track } = props;
      setIsLoading(true);
      switch (type) {
        case 'albums':
          await dispatch(initiateLoadMoreAlbums(albums.next));
          break;
        case 'artists':
          await dispatch(initiateLoadMoreArtists(artists.next));
          break;
        case 'playlist':
          await dispatch(initiateLoadMorePlaylist(playlist.next));
          break;
          // case 'track':
          // await dispatch(initiateLoadMoreSongs(track.next));
          // break;
        default:
      }
      setIsLoading(false);
      
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };
  const gotoplaylist = () => {
    window.location = `http://localhost:3000/createplaylist`;
    
  };
  const getreccomendations = () => {
    window.location = `http://localhost:3000/reccomendations`;
    
  };



  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const {track, albums, artists, playlist } = props;
  const result = {track, albums, artists, playlist };
  const {comment } = props;
  // var pageTitle = Welcome, { auth.firstname }

  
     
  return (
    <div>
      
      <div className="dashboard"></div>
    <React.Fragment>
      {isValidSession() ? (
        <div>
          
          <UserLogout/>
          {/* <Button onClick={console.log(props.data)}>test </Button> */}
          <Header />
          <SearchForm handleSearch={handleSearch} />
          <Button variant="info" type="submit" onClick={gotoplaylist}>
           create playlist here
          </Button>
          <Button variant="info" type="submit" onClick={getreccomendations}>
           discover music
          </Button>
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            isValidSession={isValidSession}
          />
       
        </div>
      ) : (
        <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
        />
        )}
        
      <CreateComment/>
      <br></br>
      <br></br>
      <br></br>
      <Info/>
    </React.Fragment> 
    </div>
    );
  };



const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
    track: state.track

  


    
  };
};


export default connect(mapStateToProps)(Dashboard);

















