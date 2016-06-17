import React, { Component } from 'react';
import SearchBox from './components/searchBox.jsx';
import MapContainer from './components/MapContainer.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: 'restaurants',
      places: [],
    };
  }

  searchPlaces(event, input) {
    event.preventDefault();
    this.setState({ query: input.value });
  }

  displayPlaces(places) {
    this.setState({ places });
  }

  render() {
    return (
      <div>
        <h1>Search a place!</h1>
        <SearchBox searchPlaces={this.searchPlaces.bind(this)} />
        <MapContainer google={ this.props.google } query={ this.state.query} displayPlaces={ this.displayPlaces.bind(this) } />
      </div>
    );
  }

}

export default App;
