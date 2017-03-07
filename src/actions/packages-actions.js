import ActionTypes from './action-types.js'

export function getPackagesSuccess(packages) {
	return {
		type: ActionTypes.GET_PACKAGES_SUCCESS,
		packages: packages
	}
}

export function getNoPackages() {
	return {
		type: ActionTypes.GET_NO_PACKAGES
	}
}

export function getPackagesFailed() {
	return {
		type: ActionTypes.GET_PACKAGES_FAILED
	}
}

export function sortByName() {
	return {
		type: ActionTypes.SORT_BY_NAME
	}
}

export function sortByOwner() {
	return {
		type: ActionTypes.SORT_BY_OWNER
	}
}

export function sortByStars() {
	return {
		type: ActionTypes.SORT_BY_STARS
	}
}

export function goToPrevPag() {
	return {
		type: ActionTypes.GO_TO_PREV_PAG
	}
}

export function goToNextPag() {
	return {
		type: ActionTypes.GO_TO_NEXT_PAG
	}
}

export function setPage(page) {
	return {
		type: ActionTypes.SET_PAGE,
		currentPage: page
	}
}
