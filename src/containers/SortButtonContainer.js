import React, { Component } from 'react';
import store from '../store.js';
import {sortByName, sortByOwner, sortByStars} from '../actions/packages-actions.js';
import SortButton from '../components/SortButton';

export class SortButtonContainer extends Component {

  render() {
		return (
  			<SortButton type={this.props.type} onClick={this._sortPackages.bind(this)}></SortButton>
    );
	}

  _sortPackages() {
    switch (this.props.type) {
      case "name":
        store.dispatch(sortByName());
        break;
      case "owner":
        store.dispatch(sortByOwner());
        break;
      case "stars":
        store.dispatch(sortByStars());
        break;
      default:
    }

  }

}

export default SortButtonContainer;
