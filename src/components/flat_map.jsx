import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoic2FuZHJpbmVheSIsImEiOiJjamg5YTJtbjcwY2dnM2RvMmE2a3J1cDRuIn0.14RFJyegdpbECsgB-clqdA';

class FlatMap extends Component {

  state = {
    viewport: {
      width: 550,
      height: 750,
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 11
    }
  };

  render() {
    return (
      <div className="map-container">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          <Marker latitude={48.8566} longitude={2.3522} offsetLeft={-20} offsetTop={-10}>
            <div>You are here</div>
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

export default FlatMap;
