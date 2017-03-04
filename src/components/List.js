import React, { Component } from 'react';
import Package from './Package';

class List extends Component {
  render() {
    return (
      <ul className="App-intro">
        {
            this.props.packages.map((item, i) =>
              <Package
                key={item.latest_stable_release.id + i}
                name={item.name}
                url={item.repository_url}
                stars={item.stars}
              >
              </Package>
            )
        }
      </ul>
    );
  }
}

export default List;
