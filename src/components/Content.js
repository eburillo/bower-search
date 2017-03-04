import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import InputSearchContainer from '../containers/InputSearchContainer';

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <InputSearchContainer></InputSearchContainer>
        <ListContainer></ListContainer>
      </div>
    );
  }
}

export default Content;
