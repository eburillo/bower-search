import store from '../store.js';
import {getPackagesSuccess, getNoPackages, getPackagesFailed} from '../actions/packages-actions.js';

export function getPackages(query) {
  fetch('https://libraries.io/api/bower-search?q=' + query)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
				store.dispatch(getPackagesSuccess(data));
			}
			else {
				store.dispatch(getNoPackages());
			}
    })
		.catch(function (error) {
			store.dispatch(getPackagesFailed());
		});
}
