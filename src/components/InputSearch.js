import React, { Component } from 'react';

class InputSearch extends Component {

	render() {
		return (
		  <input
        type="text"
        onKeyDown={this.props.onKeyDown}
        onChange={this.props.onChange}
        placeholder="Search"
        />
		);
	}

}

export default InputSearch;
