import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ArtistSearch from '../components/ArtistSearch';
import TrackAttributeSlider from '../components/TrackAttributeSlider';
import Track from '../components/Track';
import Spotify from '../api/spotify';

export default class Recommendations extends React.Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      searchArtists: {},
      trackAttributes: {
        acousticness: {
          name: 'Acousticness',
          min: 0,
          max: 100,
        },
        danceability: {
          name: 'Danceability',
          min: 0,
          max: 100,
        },
        energy: {
          name: 'Energy',
          min: 0,
          max: 100,
        },
        instrumentalness: {
          name: 'Instrumentalness',
          min: 0,
          max: 100,
        },
        liveness: {
          name: 'Liveness',
          min: 0,
          max: 100,
        },
        valence: {
          name: 'Valence',
          min: 0,
          max: 100,
        },
      },
    };

    this.addSearchArtist = this.addSearchArtist.bind(this);
    this.removeSearchArtist = this.removeSearchArtist.bind(this);
    this.setTrackAttributeValue = this.setTrackAttributeValue.bind(this);
    this.findRecommendations = this.findRecommendations.bind(this);
  }

  addSearchArtist(artist) {
    this.setState(state => {
      const searchArtists = state.searchArtists;
      searchArtists[artist.id] = artist;

      return { searchArtists };
    });
  }

  removeSearchArtist(idToRemove) {
    this.setState(state => {
      const searchArtists = state.searchArtists;
      delete searchArtists[idToRemove];
      return { searchArtists };
    });
  }

  setTrackAttributeValue(attribute, value) {
    this.setState(state => {
      const trackAttributes = state.trackAttributes;
      trackAttributes[attribute].min = value[0];
      trackAttributes[attribute].max = value[1];
      return { trackAttributes };
    });
  }
  
  async findRecommendations() {
    const { searchArtists, trackAttributes } = this.state;
    
    const seedArtists = Object.keys(searchArtists);
    const attributes = {};
    Object.entries(trackAttributes).forEach(([k, v]) => {
      attributes[`min_${k}`] = v.min / 100;
      attributes[`max_${k}`] = v.max / 100;
    });

    const tracks = await Spotify.getRecommendations(seedArtists, attributes);
    this.setState({ tracks });
  }

  render() {
    const { searchArtists, trackAttributes, tracks } = this.state;

    return (
      <div className="recommendations-container">
        <div className="search-container">
          <div className="artist-search-container">
            <p>Specify up to 5 seed artists</p>
            <ArtistSearch selectArtistCallback={this.addSearchArtist} />
            <div className="artist-search-results">{
              Object.entries(searchArtists).map(([id, artist]) => (
                <div key={`search-artist-${id}`} className="artist-search-result">
                  <span>{artist.name}</span> <FontAwesomeIcon icon={faTrash} onClick={() => { this.removeSearchArtist(id) }} />
                </div>
              ))
            }</div>
          </div>

          {Object.entries(trackAttributes).map(([k, v]) => <TrackAttributeSlider name={v.name} key={k} start={v.min} stop={v.max} callback={value => this.setTrackAttributeValue(k, value)} />)}

          <br /><br />
          <button onClick={this.findRecommendations}>Find recommendations</button>
        </div>

        <div className="suggestions-container">
          <div className="track track-header">
            <span className="track-name">Song</span>
            <span className="track-artist">Artist</span>
            <span className="track-album">Album</span>
            <span className="track-preview">Preview</span>
          </div>
          {tracks.length === 0 && <h5>No Recommendations</h5>}
          {tracks.map(t => <Track key={t.id} track={t} />)}
        </div>
      </div>
    );
  }
}