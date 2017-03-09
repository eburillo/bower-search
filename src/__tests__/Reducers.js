import packagesReducer from '../reducers/packages-reducer';
import paginationReducer from '../reducers/pagination-reducer';
import ActionTypes from '../actions/action-types';

describe('packages reducer', () => {
  it('should return the initial state', () => {
    expect(
      packagesReducer(undefined, {})
    ).toEqual(
      {
    		message: "",
  		  list: [],
        orderedBy: ""
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
      		message: "",
      		list: [{name: "jquery"}, {name: "bootstrap"}],
          orderedBy: ""
        }
    )
  })
})

describe('pagination reducer', () => {
  it('should return the initial state', () => {
    expect(
      paginationReducer(undefined, {})
    ).toEqual(
      {
    		currentPage: 1
      }
    )
  })

  it('should handle SET_PAGE', () => {
    expect(
      paginationReducer({}, {
        type: ActionTypes.SET_PAGE,
        currentPage: 2
      })
    ).toEqual(
        {
      		currentPage: 2
        }
    )
  })
})
