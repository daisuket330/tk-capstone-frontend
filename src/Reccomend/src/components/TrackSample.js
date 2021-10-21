import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TrackSample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: new Audio(props.url),
      playing: false,
    };

    this.toggleMusic = this.toggleMusic.bind(this);
  }

  toggleMusic() {
    const playing = !this.state.playing;
    if (playing) {
      this.state.audio.play();
    } else {
      this.state.audio.pause();
    }
    this.setState({ playing });
  }

  render() {
    return (
      <FontAwesomeIcon icon = {faPlay} onClick={this.toggleMusic} />
    );
  }
}

