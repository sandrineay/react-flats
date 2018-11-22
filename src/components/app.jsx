import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import FlatMap from './flat_map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <FlatMap />
        </div>
      </div>
    )
  }
}

export default App;
