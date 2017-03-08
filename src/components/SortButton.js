import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';
import sortNameIcon from '../assets/a-z.svg';
import sortOwnerIcon from '../assets/github-logo.svg';
import sortStarsIcon from '../assets/star.svg';

class InputSearch extends Component {

	_getIcon() {
		return (this.props.type === "name") ? sortNameIcon
			: (this.props.type === "owner") ? sortOwnerIcon
			: sortStarsIcon;
	}

	render() {
		return (
		  <StyledButton
        onClick={this.props.onClick}
				icon={this._getIcon.bind(this)}
        />
		);
	}

}

const COLOURS = variables.colours;

const StyledButton = styled.button`
	mask-image: url(${props => props.icon});
  mask-size: cover;
	background-color: ${COLOURS.sortButtons};
	width: 24px;
	height: 24px;
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	outline: 0;
	border: 0;
`;

export default InputSearch;
