import ActionTypes from '../actions/action-types.js';

const initialState = {
  currentPage: 1
}

const paginationReducer = function(state = initialState, action) {
	if (action.type === ActionTypes.SET_PAGE) {
		return {
      currentPage: action.currentPage
		}
  }
  else {
    return state;
  }
}

export default paginationReducer;
