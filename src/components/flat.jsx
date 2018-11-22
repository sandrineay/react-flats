import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    if (!event.currentTarget.classList.contains('active')) {
      if (document.querySelector('.active')) {
        document.querySelectorAll('.active').forEach((element) => { element.classList.remove('active'); });
      }
      event.currentTarget.classList.add('active');
    } else {
      event.currentTarget.classList.remove('active');
    }
  }

  render() {
    const url = `${this.props.imageUrl}`
    return (
      <div className="card" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(" + url + ")"}} onClick={this.handleClick} >
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
