import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.js';

class InputSearch extends Component {

	render() {
		return (
		  <StyledInput
        type="text"
        onKeyDown={this.props.onKeyDown}
        onChange={this.props.onChange}
        placeholder="Search"
        />
		);
	}

}

const COLOURS = variables.colours;
const MEDIAQUERIES = variables.mq;

const StyledInput = styled.input`
	min-height: 34px;
	padding: 6px 8px;
	font-size: 14px;
	line-height: 20px;
	color: ${COLOURS.inputColor};
	vertical-align: middle;
	background-color: #fff;
	background-repeat: no-repeat;
	background-position: right 8px center;
	border: 1px solid #d1d5da;
	border-radius: 3px;
	outline: none;
	box-shadow: inset 0 1px 2px ${COLOURS.inputShadow};
	width: 90%;
	@media (max-width: ${MEDIAQUERIES.mobile}) {
    width: 100%;
  }
`;

export default InputSearch;
