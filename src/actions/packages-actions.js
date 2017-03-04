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
