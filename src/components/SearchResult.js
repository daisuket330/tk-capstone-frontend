import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import PlayList from './PlayList';
import Tracks from './Tracks';

const SearchResult = (props) => {
  const {
    isValidSession,
    loadMore,
    result,
    setCategory,
    selectedCategory
  } = props;
  const { albums, artists, playlist,track } = result;

  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="search-buttons">
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === 'playlist' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('playlist')}
          >
            PlayLists
          </button>
        )}
        {!_.isEmpty(track.items) && (
          <button
            className={`${
              selectedCategory === 'track' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('track')}
          >
            Song
          </button>
        )}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      <div className={`${selectedCategory === 'track' ? '' : 'hide'}`}>
        {track && <Tracks track={track} />}
      </div>
      {!_.isEmpty(result[selectedCategory]) &&
        !_.isEmpty(result[selectedCategory].next) && (
          <div className="load-more" onClick={() => loadMore(selectedCategory)}>
            <Button variant="info" type="button">
              Load More
            </Button>
          </div>
        )}
    </React.Fragment>
  );
};

export default SearchResult;
