import React, { Component } from 'react';
import styled from 'styled-components';
import SortButtonContainer from '../containers/SortButtonContainer';
import InputSearchContainer from '../containers/InputSearchContainer';

class ListHeader extends Component {
  render() {
    return (
      <StyledListHeader>
        <InputSearchContainer></InputSearchContainer>
        <SortControls>
          <SortButtonContainer type="name" />
          <SortButtonContainer type="owner" />
          <SortButtonContainer type="stars" />
        </SortControls>
      </StyledListHeader>
    );
  }
}

const StyledListHeader = styled.header`
  margin-bottom: 1vh;
  height: 50px;
  padding: 8px;
  text-align: right;
`;

const SortControls = styled.div`
  width: 40%;
  float: right;
`;

export default ListHeader;
