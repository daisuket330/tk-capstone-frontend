import React from "react";
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { Redirect } from 'react-router-dom';
// import Info from './info';
// import Player from "./Player";
// import Song from "./Song";
// import Library from "./Library";
// import Nav from "./Nav";
// // import "./Home.css"
// import styled from "styled-components";
import HomePlayer from "./homeplayer";

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

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

//   const audioRef = useRef(null);

// 	// State
// 	const [songs, setSongs] = useState(data());
// 	const [currentSong, setCurrentSong] = useState(songs[0]);
// 	const [isPlaying, setIsPlaying] = useState(false);
// 	const [libraryStatus, setLibraryStatus] = useState(false);
// 	const [songInfo, setSongInfo] = useState({
// 		currentTime: 0,
// 		duration: 0,
// 	});

// 	// Functions
// 	const updateTimeHandler = (e) => {
// 		const currentTime = e.target.currentTime;
// 		const duration = e.target.duration;
// 		setSongInfo({ ...songInfo, currentTime, duration });
// 	};

// 	const songEndHandler = async () => {
// 		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
// 		let nextSong = songs[(currentIndex + 1) % songs.length];
// 		await setCurrentSong(nextSong);

// 		const newSongs = songs.map((song) => {
// 			if (song.id === nextSong.id) {
// 				return {
// 					...song,
// 					active: true,
// 				};
// 			} else {
// 				return {
// 					...song,
// 					active: false,
// 				};
// 			}
// 		});
// 		setSongs(newSongs);

// 		if (isPlaying) {
// 			audioRef.current.play();
// 		}
// 	};

	
	// const AppContainer = styled.div`
	// transition: all 0.5s ease;
	// margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	// @media screen and (max-width: 768px) {
	// 	margin-left: 0;
	// 	background-color: rgb(46, 103, 161);
	// }`;




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
        <HomePlayer/>
          {/* <AppContainer libraryStatus={libraryStatus}>
		  <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</AppContainer> */}
	
        </div>
        
      )}
    </>
  );
};

export default connect()(Home);
