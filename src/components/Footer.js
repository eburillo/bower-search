import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import linkedinLogo from '../assets/linkedin-logo.svg';
import githubLogo from '../assets/github-logo.svg';

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Credits>Enrique Burillo Jimenez @2017</Credits>
        <SocialLinkedIn target="_blank"href="https://www.linkedin.com/in/enrique-burillo-jiménez-87374256" />
        <SocialGithub target="_blank"href="https://github.com/eburillo" />
      </StyledFooter>
    );
  }
}

const COLOURS = variables.colours;

const StyledFooter = styled.footer`
  height: 30px;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${COLOURS.footerBackground};
  color: ${COLOURS.footerText};
`;

const Credits = styled.span`
  color: ${COLOURS.footerText};
  display: inline-block;
  padding-top: 3px;
`;

const SocialButton = styled.a`
  width: 17px;
  height: 17px;
  float: right;
  background-color: ${COLOURS.footerText};
  display: inline-block;
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const SocialLinkedIn = styled(SocialButton)`
  mask-image: url(${linkedinLogo});
  margin-left: 10px;
`;

const SocialGithub = styled(SocialButton)`
  mask-image: url(${githubLogo});
`;

export default Footer;
