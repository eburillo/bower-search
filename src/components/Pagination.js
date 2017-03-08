import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';

export class Pagination extends Component {

  render() {
    const {currentPage, pages} = this.props;
    return (
      <PaginationControls>
        <StyledPaginationButton
          disabled={currentPage <= 1}
          onClick={this._setPage.bind(this, currentPage - 1)}>«</StyledPaginationButton>
        {
            pages.map((page) => {
              return <StyledPaginationButton
                key={page.toString()}
                active={currentPage === page}
                onClick={this._setPage.bind(this, page)}>{page}</StyledPaginationButton>
            } )
        }
        <StyledPaginationButton
          disabled={currentPage >= pages.length}
          onClick={this._setPage.bind(this, this.props.currentPage + 1)}>»</StyledPaginationButton>
      </PaginationControls>
    );
	}

  _setPage(page) {
    this.props.setPage(page);
  }

}

const MEDIAQUERIES = variables.mq;
const COLOURS = variables.colours;

const StyledPaginationButton = styled.button`
  color: ${props => props.active ? 'white' : COLOURS.packageTitle};
  background-color: ${props => props.active ? COLOURS.packageTitle : 'transparent'};
  padding: 8px 16px;
  float: left;
  border: none;
  &:hover {
    background-color: ${COLOURS.packageTitle};
    color: white;
    transition: 0.2s easy all;
  }
`;

const PaginationControls = styled.div`
  @media (max-width: ${MEDIAQUERIES.mobile}) {
    text-align: center;
  }
`;

export default Pagination;
