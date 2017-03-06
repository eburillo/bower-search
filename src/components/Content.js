import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';
import ListContainer from '../containers/ListContainer';
import MessageContainer from '../containers/MessageContainer';
import ListHeader from './ListHeader';

class Content extends Component {
  render() {
    return (
      <MainContainer>
        <ListHeader />
        <ListContainer />
        <MessageContainer />
      </MainContainer>
    );
  }
}

const MEDIAQUERIES = variables.mq;

const MainContainer = styled.section`
  display: inline-block;
  vertical-align: top;
  width: 75%;
  height: 100%;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    width: 100%;
  }
`;

export default Content;
