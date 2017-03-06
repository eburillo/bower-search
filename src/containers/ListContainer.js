import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import variables from '../styles/variables';
import List from '../components/List';
import * as BowerApi from '../api/Bower';

export class ListContainer extends Component {

  componentDidMount() {
      BowerApi.getPackages("");
  }

  state = {
    per_page: 5,
    counter: 0,
    page: 0
  }

  _handleClickNext() {
    if (this.state.page + 1 < this.props.packages.list.length / this.state.per_page)
      this.setState({page: this.state.page + 1});
  }

  _handleClickPrev() {
    if (this.state.page > 0)
      this.setState({page: this.state.page - 1});
  }

  render() {
    let {packages} = this.props;
    let list = packages.list.filter((item, i) => {
      return i < ((this.state.page + 1) * this.state.per_page) && (this.state.per_page * this.state.page) <= i })
		return (
      <div>
  			<List packages={list}></List>
        <PaginationControls>
          <StyledPaginationButton onClick={this._handleClickPrev.bind(this)}>Prev</StyledPaginationButton>
          <StyledPaginationButton onClick={this._handleClickNext.bind(this)}>Next</StyledPaginationButton>
        </PaginationControls>
      </div>
    );
	}

}

const MEDIAQUERIES = variables.mq;

const StyledPaginationButton = styled.button`
  width: 60px;
  height: 40px;
  display: inline-block;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid #999;
  border-radius: 6px;
`;

const PaginationControls = styled.div`
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    text-align: center;
  }
`;


const mapStateToProps = function(store) {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ListContainer);
