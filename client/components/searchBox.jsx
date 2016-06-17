import React, { PropTypes, Component } from 'react';
import { searchBox } from 'react-google-maps/lib/utils';


class SearchBox extends Component {

  render() {
    return (
      <div>
      <form onClick={(e) => this.props.searchPlaces(e, this.refs.newPlace)}>
        <input ref="newPlace" />
        <button >Search</button>
      </form>
      </div>
    );
  }

}

SearchBox.propTypes = {
  searchPlaces: PropTypes.function,
};

export default SearchBox;
