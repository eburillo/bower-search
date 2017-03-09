import React, { Component } from 'react';
import {connect} from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';

class MessageContainer extends Component {
  render() {
    return (
      <div>
        {
          this._renderErrorMessage() &&
          <ErrorMessage text={this.props.packages.message} />
        }
      </div>
    );
  }

  _renderErrorMessage = () => {
    return (
      this.props.packages.message &&
      !this.props.packages.list.length > 0);
  }
}

const mapStateToProps = (store) => {
	return ({
		packages: store.PackagesReducer
	})
}

export default connect(mapStateToProps) (MessageContainer);
