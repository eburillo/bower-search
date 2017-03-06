import React, { Component } from 'react';
import styled from 'styled-components';
import SortButtonContainer from '../containers/SortButtonContainer';

class ListHeader extends Component {
  render() {
    return (
      <StyledListHeader>
        <SortButtonContainer type="name" />
        <SortButtonContainer type="owner" />
        <SortButtonContainer type="stars" />
      </StyledListHeader>
    );
  }
}


const StyledListHeader = styled.header`
  height: 50px;
  padding: 10px;
  text-align: right
`;

export default ListHeader;
