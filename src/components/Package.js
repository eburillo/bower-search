import React, { Component } from 'react';
import url from 'url';
import styled from 'styled-components';
import variables from '../styles/variables';
import starLogo from '../assets/star.svg';

class Package extends Component {
  render() {
    const name = this.props.name;
    const packageUrl = this.props.url;
    const ownerUrl = this._parseOwnerUrl(packageUrl);
    const owner = this._parseOwnerName(packageUrl);
    const stars = this.props.stars;
    return (
      <StyledPackage>
        <Title><a target="_blank" href={packageUrl}>{name}</a></Title>
        <Owner target="_blank" href={ownerUrl}>{owner}</Owner>
        <Url target="_blank" href={packageUrl} >{packageUrl}</Url>
        <Stars>{stars}</Stars>
      </StyledPackage>
    );
  }

  _parseOwnerName(packageUrl) {
    const path = url.parse(packageUrl).path;
    return path.slice(path.indexOf('/') + 1, path.lastIndexOf('/'));
  }

  _parseOwnerUrl(packageUrl) {
    return packageUrl.slice(0, packageUrl.lastIndexOf('/'));
  }

}

const COLOURS = variables.colours;

const StyledPackage = styled.li`
  margin-bottom: 25px;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  float: left;
  > a {
      font-weight: lighter;
      text-decoration: none;
      color: ${COLOURS.packageTitle};
      &:hover {
        text-decoration: underline;
      }
  }
`;

const Url = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: ${COLOURS.packageText};
  float: left;
  clear: left;
  text-decoration: none;
  &:hover {
    color: ${COLOURS.packageHover}
  }
`;

const Owner = styled.a`
  font-size: 13px;
  color: ${COLOURS.packageOwner};
  display: inline-block;
  text-decoration: none;
  float: left;
  margin-left: 15px;
  margin-top: 5px;
  &:hover {
    color: ${COLOURS.packageHover}
  }
`;

const Stars = styled.span`
  position: relative;
  float: left;
  color: ${COLOURS.packageText};
  font-size: 12px;
  padding-left: 20px;
  margin-left: 15px;
  padding-top: 2px;
  margin-top: 0px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    display: block;
    mask: url(${starLogo}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: gold;
  }
`;

export default Package;
