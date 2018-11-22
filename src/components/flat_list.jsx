import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat, index) => {
            return (
              <Flat
                flat={flat}
                key={flat.lng}
                index={index}
                selectFlat={this.props.selectFlat}
                selected={flat.name === this.props.selectedFlat.name}
              />
            );
          })
        }
      </div>
    );
  }
}

export default FlatList;

