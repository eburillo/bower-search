import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import variables from '../styles/variables';

export class Pagination extends Component {

  render() {
    const {currentPage, pages} = this.props;
    return (
      <PaginationControls>
        <StyledPaginationButton disabled={currentPage <= 1} onClick={this._setPage.bind(this, currentPage - 1)}>Prev</StyledPaginationButton>
        {
            pages.map((page) => {
              return <StyledPaginationButton key={page.toString()} onClick={this._setPage.bind(this, page)}>{page}</StyledPaginationButton>
            } )
        }
        <StyledPaginationButton disabled={currentPage >= pages.length} onClick={this._setPage.bind(this, this.props.currentPage + 1)}>Next</StyledPaginationButton>
      </PaginationControls>
    );
	}

  _setPage(page) {
    this.props.setPage(page);
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

export default Pagination;
