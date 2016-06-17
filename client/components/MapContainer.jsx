import React, { Component, PropTypes } from 'react';
import Map from './Map.jsx';

class MapContainer extends Component {

  render() {
    const style = {
      height: '720px',
    };
    return (
      <div className="container-fluid col-md-12" style={style}>
        <Map
          google={this.props.google}
          query={this.props.query}
          displayPlaces={this.props.displayPlaces}
          placesStatus={this.props.placesStatus}
        />
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  query: PropTypes.isRequired,
  displayPlaces: PropTypes.function,
  placesStatus: PropTypes.function,
};

export default MapContainer;
