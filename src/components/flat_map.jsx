import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoic2FuZHJpbmVheSIsImEiOiJjamg5YTJtbjcwY2dnM2RvMmE2a3J1cDRuIn0.14RFJyegdpbECsgB-clqdA';

class FlatMap extends Component {



  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <div className="map-container">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    );
  }
}

export default FlatMap;
