import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import * as BowerApi from '../api/Bower';

export class ListContainer extends Component {

  componentDidMount() {
      BowerApi.getPackages("");
  }

  render() {
    let {packages, currentPage} = this.props;
    if (!packages || packages.list.length === 0) {
      return null;
    }
    let list = packages.list.filter((item, i) => { return i < (currentPage * 5) && i >= 5 * (currentPage - 1)})
		return (
  			<List packages={list}></List>
    );
	}

}

const mapStateToProps = function(store) {
	return ({
		packages: store.packages,
    currentPage: store.currentPage
	})
}

export default connect(mapStateToProps) (ListContainer);
