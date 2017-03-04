import ActionTypes from '../actions/action-types.js'

const messages = {
 NO_PACKAGES_FOUND: "No packages were found.",
 SEARCH_ERROR: "There was an error. Try again."
}

const initialState = {
	packages: {
		message: "",
		list: []
	}
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
				}
			};
		case ActionTypes.GET_NO_PACKAGES:
			return {
				packages: {
					message: messages.NO_PACKAGES_FOUND,
					list: []
				}
			};
		case ActionTypes.GET_PACKAGES_FAILED:
				return {
					packages: {
						message: messages.SEARCH_ERROR,
						list: []
					}
				};
		default:
			return state;
	}
}

export default packagesReducer;
