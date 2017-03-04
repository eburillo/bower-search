import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/bower-logo.svg';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Logo src={logo} alt="logo"></Logo>
        <h2>Bower Search App</h2>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  background-color: #FFCC2F;
  padding: 20px;
  color: #543729;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
`;

export default Header;
