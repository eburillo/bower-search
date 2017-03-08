import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';

class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <AsideLink href="https://www.linkedin.com/in/enrique-burillo-jiménez-87374256">LinkedIn</AsideLink>
        <AsideLink href="https://github.com/eburillo">Github</AsideLink>
      </Aside>
    );
  }
}

const MEDIAQUERIES = variables.mq;
const COLOURS = variables.colours;

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

const AsideLink = styled.a`
  font-size: 13px;
  margin: 0 0 6px;
  display: block;
  font-weight: lighter;
  text-decoration: none;
  color: ${COLOURS.packageTitle};
  &:hover {
    text-decoration: underline;
  }

`;

export default Sidebar;
