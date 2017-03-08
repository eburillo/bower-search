import ActionTypes from '../actions/action-types.js'
import url from 'url';
/* eslint-disable */

const messages = {
 NO_PACKAGES_FOUND: "No packages were found.",
 SEARCH_ERROR: "There was an error. Try again."
}

const initialState = {
	packages: {
		message: "",
		list: []
	},
  currentPage: 1
}

const _getOwner = (obj) => {
  const path = url.parse(obj.repository_url).path;
  return path.slice(path.indexOf('/') + 1, path.lastIndexOf('/')).toLowerCase();
}

const packagesReducer = function(state = initialState, action) {
	if (typeof action === 'undefined') {
		return initialState;
	}
	switch (action.type) {
		case ActionTypes.GET_PACKAGES_SUCCESS:
			return {
				packages: {
					message: "",
					list: action.packages
				},
        currentPage: 1
			};
		case ActionTypes.GET_NO_PACKAGES:
			return {
				packages: {
					message: messages.NO_PACKAGES_FOUND,
					list: []
				},
        currentPage: 1
			};
		case ActionTypes.GET_PACKAGES_FAILED:
				return {
					packages: {
						message: messages.SEARCH_ERROR,
						list: []
					},
          currentPage: 1
				};
    case ActionTypes.SORT_BY_NAME:
			return {
				packages: {
					message: "",
					list: state.packages.list.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
              }
          })
				},
        currentPage: 1
			};
    case ActionTypes.SORT_BY_OWNER:
			return {
				packages: {
					message: "",
					list: state.packages.list.sort((a, b) => {
              if (_getOwner(a) < _getOwner(b)) {
                  return -1;
              }
              if (_getOwner(a) > _getOwner(b)) {
                  return 1;
              }
          })
				},
        currentPage: 1
			};
    case ActionTypes.SORT_BY_STARS:
			return {
				packages: {
					message: "",
					list: state.packages.list.sort((a, b) => {
              return b.stars - a.stars
          })
				},
        currentPage: 1
			};
    case ActionTypes.SET_PAGE:
			return {
				packages: state.packages,
        currentPage: action.currentPage
			};
		default:
			return state;
	}
}

export default packagesReducer;
