import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';
import ListContainer from '../containers/ListContainer';
import MessageContainer from '../containers/MessageContainer';
import PaginationContainer from '../containers/PaginationContainer';
import ListHeader from './ListHeader';

class Content extends Component {
  render() {
    return (
      <MainContainer>
        <ListHeader />
        <ListContainer />
        <PaginationContainer/>
        <MessageContainer />
      </MainContainer>
    );
  }
}

const MEDIAQUERIES = variables.mq;

const MainContainer = styled.section`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    width: 100%;
    padding: 5px 20px;
  }
`;

export default Content;
