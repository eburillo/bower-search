import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';
import InputSearchContainer from '../containers/InputSearchContainer';

class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <InputSearchContainer></InputSearchContainer>
      </Aside>
    );
  }
}

const MEDIAQUERIES = variables.mq;

const Aside = styled.aside`
  display: inline-block;
  vertical-align: top;
  width: 25%;
  padding-top: 50px;
  padding-left: 10px;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
  }
`;

export default Sidebar;
