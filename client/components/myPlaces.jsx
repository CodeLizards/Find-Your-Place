import React, { Component } from 'react';


class MyPlaces extends React.Component {

  render() {
    return (
      // Try binding onUpdate to this scope to see if it breaks
      <div className="places-list">
          {this.props.places.map((place, i) => (
            <div className="place">
              <span>{this.props.places.name}</span>
            </div> 
          ))}
      </div>
    );
  }
}
export default MyPlaces;
