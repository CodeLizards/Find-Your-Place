import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox.jsx';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMap: {},
      lat: -33.8688,
      lng: 151.2195,
      markers: [],
      openInfoWindow: '',
    };
  }

  componentDidMount() {
    this.getUserLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevProps.query !== this.props.query) {
      this.findPlaces();
    }
  }
  // get the user location to load map on the correct lng/lat
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // callbacks for async nature of setState
        this.setState({ lat: position.coords.latitude }, () => {
          this.setState({ lng: position.coords.longitude }, () => {
            this.loadMap();
          });
        });
      }, () => (
        // error handling
        alert("Hi! We've got some issues locating you! I'm so sorry for the inconvenience! While we try and fix the craziness, you might try another browser or enable locaiton services")
      ));
    }
  }

  showInfoWindow(place, marker) {
    if (!!this.state.openInfoWindow) {
      this.state.openInfoWindow.close();
    }
    // info for infowindow, takes a string
    const content =
    `<h2 id="firstHeading" class="firstHeading">${place.name}</h2>
      <div id="bodyContent">
        <div>Rating: ${place.rating || 'No Ratings'}</div>
        <div>${place.formatted_address}</div>
      </div>`;

    const infoWindow = new this.props.google.maps.InfoWindow({
      content,
    });

    infoWindow.open(this.state.map, marker);
    // set state so that we can close currently opened window
    // when another is opened
    this.setState({ openInfoWindow: infoWindow });
  }

  createMarker(place) {
    const marker = new this.props.google.maps.Marker({
      map: this.state.currentMap,
      position: place.geometry.location,
    });
    // add onclick listner to marker for infoWindow
    this.props.google.maps.event.addListener(
      marker, 'click', () => this.showInfoWindow(place, marker)
    );
    // add to array of markers displayed on page.
    const markers = this.state.markers.slice();
    markers.push(marker);
    this.setState({ markers });
  }

  // function to remove markers before places new markers
  // to avoid reloading entire map each time
  removeMarkers() {
    const markers = this.state.markers;
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    this.setState({ markers: [] });
  }


  // display map on specifies lng/lat
  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const center = new google.maps.LatLng(this.state.lat, this.state.lng);
      const mapConfig = {
        center,
        zoom: 14,
        scrollwheel: true,
      };
      this.map = new google.maps.Map(node, mapConfig);
      this.setState({ currentMap: this.map });
    }
  }

  // call google places library to search for places in current map area
  findPlaces() {
    const center = new this.props.google.maps.LatLng(this.state.lat, this.state.lng);
    const request = {
      location: center,
      radius: '1000',
      query: this.props.query.toString(),
    };

    const service = new this.props.google.maps.places.PlacesService(this.map);
    service.textSearch(request, (results, status) => {
      if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
        // remove markers from old result before placing new ones 
        this.removeMarkers();
        if(results.lenth === 0) {
          alert("We could not find any places matching your search! My bad. Perhaps try something more general. Like sushi...mmm sushi.");
        }

        for (let i = 0; i < results.length; i++) {
          this.props.displayPlaces(results);
          const place = results[i];
          this.createMarker(place);
        }
      }
    });
  }

  render() {
    return (
      <div ref="map" id="map" className="col-md-12">
        Loading map...
      </div>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  query: PropTypes.string,
  displayPlaces: PropTypes.function,
};

export default Map;
