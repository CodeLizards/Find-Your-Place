import React, { Component, PropTypes } from 'react';
import Map from './Map.jsx';

class MapContainer extends Component {

  render() {
    const style = {
      height: '720px',
    };
    return (
      <div className="container col-md-12" style={style}>
        <Map google={this.props.google} query={this.props.query} displayPlaces={ this.props.displayPlaces } />
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  query: PropTypes.isRequired,
};

export default MapContainer;
