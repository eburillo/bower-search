import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
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

const MEDIAQUERIES = variables.mq;

const StyledListHeader = styled.header`
  height: 50px;
  padding: 8px;
  text-align: right;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    height: 30px;
  }
`;

export default ListHeader;
