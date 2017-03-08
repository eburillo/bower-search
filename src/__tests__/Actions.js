import * as actions from '../actions/packages-actions';
import ActionTypes from '../actions/action-types';
import * as BowerApi from '../api/Bower.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const packages = [
      {
        "name": "Bootstrap"
      },
      {
        "name": "React"
      }
    ];
    const expectedAction = {
      type: ActionTypes.GET_PACKAGES_SUCCESS,
      packages
    }
    expect(actions.getPackagesSuccess(packages)).toEqual(expectedAction)
  })
})
