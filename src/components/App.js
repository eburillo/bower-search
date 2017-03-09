import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Main>
          <Sidebar/>
          <Content/>
        </Main>
        <Footer/>
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
  min-height: calc(100vh - 100px);
  padding-bottom: 30px;
`;

export default App;
