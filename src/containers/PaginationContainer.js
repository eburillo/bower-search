import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import variables from '../styles/variables';
import store from '../store.js';
import {goToPrevPag, goToNextPag, setPage} from '../actions/packages-actions.js';

export class ListContainer extends Component {

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
      <PaginationControls>
        {
            totalPages.map((page) => {
              return <StyledPaginationButton key={page.toString()} onClick={this._setPage}>{page}</StyledPaginationButton>
            } )
        }
      </PaginationControls>
    );
	}

  _setPage = page => {
    console.log("Page ", page);
    store.dispatch(setPage(page));
  }//props.onSetPage(page);

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     _handleClickPrev: () => {
//       dispatch(goToPrevPag())
//     },
//     _handleClickNext: () => {
//       dispatch(goToNextPag())
//     }
//   }
// }

const mapStateToProps = function(store) {
	return ({
		packages: store.packages
	})
}

export default connect(mapStateToProps) (ListContainer);
