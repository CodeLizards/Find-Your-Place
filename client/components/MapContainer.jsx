import React, { Component, PropTypes } from 'react';
import Map from './Map.jsx';

class MapContainer extends Component {

  render() {
    const style = {
      width: '100vw',
      height: '75vh',
    };
    return (
      <div style={style}>
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
