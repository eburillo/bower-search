import React, { Component } from 'react';
import InputSearch from '../components/InputSearch';
import * as BowerApi from '../api/Bower';

const ENTER_KEY = 13;

class InputSearchContainer extends Component {

	state = {
    text: ""
  }

	render() {
		return (
			<InputSearch
				onKeyDown={this._handlerKeyDown.bind(this)}
				onChange={this._handleChange.bind(this)}
			>
			</InputSearch>
		);
	}

	_handleChange = (e) => {
    this.setState({text: e.target.value})
  }

	_handlerKeyDown(e) {
		if (e.keyCode === ENTER_KEY)
			BowerApi.getPackages(this.state.text);
	}

}

export default InputSearchContainer;
