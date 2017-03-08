import packagesReducer from '../reducers/packages-reducer'
import ActionTypes from '../actions/action-types';

describe('packages reducer', () => {
  it('should return the initial state', () => {
    expect(
      packagesReducer(undefined, {})
    ).toEqual(
      {
        packages: {
      		message: "",
      		list: []
      	},
        currentPage: 1
      }
    )
  })

  it('should handle GET_PACKAGES_SUCCESS', () => {
    expect(
      packagesReducer({}, {
        type: ActionTypes.GET_PACKAGES_SUCCESS,
        packages: [{name: "jquery"}, {name: "bootstrap"}]
      })
    ).toEqual(
        {
          packages: {
        		message: "",
        		list: [{name: "jquery"}, {name: "bootstrap"}]
        	},
          currentPage: 1
        }
    )
  })
})
