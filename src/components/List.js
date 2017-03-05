import React, { Component } from 'react';
import styled from 'styled-components';
import Package from './Package';

class List extends Component {
  render() {
    return (
      <StyledList>
        {
            this.props.packages.map((item, i) =>
              <Package
                key={this._getKey(item, i)}
                name={item.name}
                url={item.repository_url}
                stars={item.stars}
              >
              </Package>
            )
        }
      </StyledList>
    );
  }

  _getKey(item, i) {
    return (item.latest_stable_release)
      ? item.latest_stable_release.id + i
      : Math.round(Math.random()*100000);
  }

}

const StyledList = styled.ul`
  list-style: none;
  padding: 0 10px;
  margin: 0;
  height: calc(100% - 50px);
  overflow-y: scroll;
`;

export default List;
