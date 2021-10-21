import React from 'react';
import Autosuggest from 'react-autosuggest';
import Spotify from '../api/spotify';

export default class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
    };

    this.onChange = this.onChange.bind(this);
    this._getSuggestions = this._getSuggestions.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({ value: newValue });
  }

  async _getSuggestions(value) {
    return Spotify.searchArtists(value);
  }

  renderSuggestion(suggestion) {
    return (
      <div>{suggestion.name}</div>
    );
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  async onSuggestionsFetchRequested({ value }) {
    const suggestions = await this._getSuggestions(value);
    this.setState({ suggestions });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [] });
  }

  onSuggestionSelected(e, { suggestion }) {
    this.props.selectArtistCallback(suggestion);
    this.setState({
      value: '',
      suggestions: [],
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type an artist / band',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="artist-search">
        <Autosuggest
          suggestions={suggestions}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
        />
      </div>
    );
  }
}