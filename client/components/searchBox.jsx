import React, { PropTypes, Component } from 'react';


class SearchBox extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.searchPlaces(e, this.refs.newPlace);
    this.refs.newPlace.value = '';
    console.log('start loading...');
  }

  render() {
    return (
      <div className="search-box">
      <form >
        <input ref="newPlace" className="input-field" />
        <button
          className="search-button"
          onClick={(e) => this.handleClick(e) }
        >
        Search
        </button>
      </form>
      </div>
    );
  }

}

SearchBox.propTypes = {
  searchPlaces: PropTypes.function,
};

export default SearchBox;
