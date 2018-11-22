import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import FlatMap from './flat_map.jsx';
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <FlatMap />
        </div>
      </div>
    );
  }
}

export default App;
