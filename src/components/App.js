import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ContentContainer from '../containers/ContentContainer';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Main>
          <Sidebar></Sidebar>
          <ContentContainer></ContentContainer>
        </Main>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

const MAX_WIDTH = variables.maxWidth;

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Main = styled.div`
  width: 100%;
  //max-width: ${MAX_WIDTH};
  margin: 0 auto;
  height: calc(100% - 40px);
`;

export default App;
