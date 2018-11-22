import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat) => {
            return (
              <Flat
                name={flat.name}
                imageUrl={flat.imageUrl}
                price={flat.price}
                priceCurrency={flat.priceCurrency}
                lat={flat.lat} lng={flat.lng}
                key={flat.lng}
              />
            );
          })
        }
      </div>
    );
  }
}

export default FlatList;

