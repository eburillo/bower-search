import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import PaginationContainer from './PaginationContainer';
import * as BowerApi from '../api/Bower';

export class ListContainer extends Component {

  componentDidMount() {
      BowerApi.getPackages("");
  }

  state = {
    per_page: 5,
    counter: 0,
    page: 1
  }
  //
  // _handleClickNext() {
  //   if (this.state.page + 1 < this.props.packages.list.length / this.state.per_page)
  //     this.setState({page: this.state.page + 1});
  // }
  //
  // _handleClickPrev() {
  //   if (this.state.page > 0)
  //     this.setState({page: this.state.page - 1});
  // }

  render() {
    let {packages} = this.props;
    let list = packages.list.filter((item, i) => {
      return i < ((this.state.page + 1) * this.state.per_page) && (this.state.per_page * this.state.page) <= i })
		return (
      <div>
  			<List packages={list}></List>
        <PaginationContainer/>
      </div>
    );
	}

}

const mapStateToProps = function(store) {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ListContainer);
