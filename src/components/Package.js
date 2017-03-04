import React, { Component } from 'react';

class Package extends Component {
  render() {
    const name = this.props.name ;
    const url = this.props.url;
    const owner = "fake";
    const stars = this.props.stars;
    return (
      <li className="list-item">
        <div>{name}</div>
        <div>{url}</div>
        <div>{owner}</div>
        <div>{stars}</div>
      </li>
    );
  }
}

export default Package;
