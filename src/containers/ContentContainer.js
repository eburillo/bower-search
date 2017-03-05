import React, { Component } from 'react';
import {connect} from 'react-redux';
import Content from '../components/Content';

class ContentContainer extends Component {
  render() {
    return (
      <Content />
    );
  }
}

const mapStateToProps = (store) => {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ContentContainer);
