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
          <SortHeader>Sort:</SortHeader>
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
`;

const SortHeader = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #777;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const SortControls = styled.div`
  width: 40%;
  float: right;
  height: 34px;
  padding-top: 4px;
  padding-left: 10px;
`;

export default ListHeader;
