import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '../components/List.js';
import * as BowerApi from '../api/Bower';

export class ListContainer extends Component {

  componentDidMount() {
      BowerApi.getPackages("");
  }

  render() {
    var {packages} = this.props;
		return (
  			<List packages={packages.list}></List>
    );
	}

}

const mapStateToProps = function(store) {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ListContainer);
