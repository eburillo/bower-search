import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';

class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <p>Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.

Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue! </p>
      </Aside>
    );
  }
}

const MEDIAQUERIES = variables.mq;

const Aside = styled.aside`
  display: inline-block;
  vertical-align: top;
  width: 25%;
  padding: 50px 15px 0;
  line-height: 21px;
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    display: none;
  }
`;

export default Sidebar;
