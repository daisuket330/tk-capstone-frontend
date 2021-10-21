import React from 'react';
import TrackSample from './TrackSample';

export default class Track extends React.Component {
  render() {
    const { track } = this.props;

    return (
      <div className="track">
        <span className="track-name">{track.name}</span>
        <span className="track-artist">{track.artists.map(a => a.name).join(', ')}</span>
        <span className="track-album">{track.album.name}</span>
        <span className="track-preview">{track.preview_url ? <TrackSample key={`track-${track.id}`} url={track.preview_url} /> : '-'}</span>
      </div>
    );
  }
}