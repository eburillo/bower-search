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
const MEDIAQUERIES = variables.mq;

const StyledHeader = styled.header`
  height: 70px;
  background-color: ${COLOURS.headerBackground};
  padding: 10px;
  color: ${COLOURS.headerTitle};
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    padding: 10px 20px;
  }
`;

const HeaderContentWrapper = styled.div`
  width: 50%;
  margin-left: 25%;
  margin: 0 auto;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    width: 100%;
  }
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
