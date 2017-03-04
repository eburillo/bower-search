import {createStore} from 'redux';
import PackagesReducer from './reducers/packages-reducer.js';

const store = createStore(PackagesReducer);

export default store;
