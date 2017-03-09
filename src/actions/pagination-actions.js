import ActionTypes from './action-types.js'

export function setPage(page) {
	return {
		type: ActionTypes.SET_PAGE,
		currentPage: page
	}
}
