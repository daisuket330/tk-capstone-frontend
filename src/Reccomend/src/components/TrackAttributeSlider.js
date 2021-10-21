import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class TrackAttributeSlider extends React.Component {
  render() {
    const { name, start, stop, callback } = this.props;
    return (
      <div className="track-attribute-slider-group">
        <p>{name}:</p>
        <Range defaultValue={[start, stop]} onAfterChange={callback} />
      </div>
    );
  }
}