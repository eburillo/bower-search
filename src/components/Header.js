import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/bower-logo.svg';
import variables from '../styles/variables';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderContentWrapper>
          <Logo src={logo} alt="logo"></Logo>
          <Title>Bower Search</Title>
        </HeaderContentWrapper>
      </StyledHeader>
    );
  }
}

const COLOURS = variables.colours;
const MAX_WIDTH = variables.maxWidth;

const StyledHeader = styled.header`
  height: 70px;
  background-color: ${COLOURS.headerBackground};
  padding: 10px;
  color: ${COLOURS.headerTitle};
`;

const HeaderContentWrapper = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 40px;
  display: inline-block;
  vertical-align: middle;
`;

const Title = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin: 13px;
  font-weight: lighter;
`;

export default Header;
