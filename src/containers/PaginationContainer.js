import React, { Component } from 'react';
import {connect} from 'react-redux';
import {goToPrevPag, goToNextPag, setPage} from '../actions/packages-actions.js';
import Pagination from '../components/Pagination';

export class PaginationContainer extends Component {

  render() {
    const perPage = 5;
    if (!this.props.packages || this.props.packages.list.length <= perPage) {
      return null;
    }
    const list = this.props.packages.list;
    const totalPages = [];
    for (let i = 1; i <= Math.ceil(list.length / perPage); i++) {
      totalPages.push(i);
    }

    return (
      <Pagination currentPage={this.props.currentPage} pages={totalPages} setPage={this.props.setPage}/>
    );
	}

}

const mapDispatchToProps = (dispatch) => {
  return ({
    setPage: (page) => {dispatch(setPage(page))}
  })
}

const mapStateToProps = function(store) {
	return ({
		packages: store.packages,
    currentPage: store.currentPage
	})
}

export default connect(mapStateToProps, mapDispatchToProps) (PaginationContainer);
