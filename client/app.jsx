import React, { Component } from 'react';
import SearchBox from './components/SearchBox.jsx';
import MapContainer from './components/MapContainer.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: 'restaurants',
      places: [],
      searchingPlace: false,
    };
  }

  placesStatus() {
    console.log('ehere');
    this.setState({ searchingPlace: false });
  }

  searchPlaces(event, input) {
    event.preventDefault();
    this.setState({ query: input.value });
    this.setState({ searchingPlace: true });
  }

  isLoading() {
    if (this.state.searchingPlace === true) {
      return (
        <div className="is-loading">
         <span> Loading All Of the Things...</span>
        </div>
      );
    }
  }

  displayPlaces(places) {
    this.setState({ places });
  }

  render() {
    return (
      <div className="container-fluid col-md-12 app">
        <h1 className="title">Oh, the places you'll go...</h1>
        <SearchBox
          searchPlaces={this.searchPlaces.bind(this)}
        />
        {this.isLoading()}
        <MapContainer
          google={this.props.google}
          query={this.state.query}
          displayPlaces={this.displayPlaces.bind(this)}
          placesStatus={this.placesStatus.bind(this)}
        />
      </div>
    );
  }

}

export default App;
