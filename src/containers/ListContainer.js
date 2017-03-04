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
      <div>
  			<List packages={packages.list}></List>
        {packages.list.length == 0 && this._renderErrorMessage()}
      </div>
    );
	}

  _renderErrorMessage = (message) => {
    return (
    <p>{this.props.packages.message}</p>
    )
  }

}

const mapStateToProps = function(store) {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ListContainer);
