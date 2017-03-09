import ActionTypes from '../actions/action-types.js'
import url from 'url';
/* eslint-disable */

const MESSAGES = {
 NO_PACKAGES_FOUND: "No packages were found.",
 SEARCH_ERROR: "There was an error. Try again."
}

const SORT_BY = {
  NAME: "name",
  OWNER: "owner",
  STARS: "stars"
}

const initialState = {
		message: "",
		list: [],
    orderedBy: ""
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
					message: "",
					list: action.packages,
          orderedBy: ""
			};
		case ActionTypes.GET_NO_PACKAGES:
			return {
					message: MESSAGES.NO_PACKAGES_FOUND,
					list: [],
          orderedBy: ""
			};
		case ActionTypes.GET_PACKAGES_FAILED:
				return {
						message: MESSAGES.SEARCH_ERROR,
						list: [],
            orderedBy: ""
				};
    case ActionTypes.SORT_BY_NAME:
			return {
					message: "",
					list: state.list.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return (state.orderedBy !== SORT_BY.NAME) ? -1 : 1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return (state.orderedBy !== SORT_BY.NAME) ? 1 : -1;
              }
          }),
          orderedBy: (state.orderedBy !== SORT_BY.NAME) ? SORT_BY.NAME : ""
			};
    case ActionTypes.SORT_BY_OWNER:
			return {
					message: "",
					list: state.list.sort((a, b) => {
              if (_getOwner(a) < _getOwner(b)) {
                  return (state.orderedBy !== SORT_BY.OWNER) ? -1 : 1;
              }
              if (_getOwner(a) > _getOwner(b)) {
                  return (state.orderedBy !== SORT_BY.OWNER) ? 1 : -1;
              }
          }),
          orderedBy: (state.orderedBy !== SORT_BY.OWNER) ? SORT_BY.OWNER : ""
			};
    case ActionTypes.SORT_BY_STARS:
			return {
					message: "",
					list: state.list.sort((a, b) => {
            if (a.stars < b.stars) {
                return (state.orderedBy !== SORT_BY.STARS) ? 1 : -1;
            }
            if (a.stars > b.stars) {
              return (state.orderedBy !== SORT_BY.STARS) ? -1 : 1;
            }
          }),
          orderedBy: (state.orderedBy !== SORT_BY.STARS) ? SORT_BY.STARS : ""
			};
		default:
			return state;
	}
}

export default packagesReducer;
