import {combineReducers, createStore} from "redux";
import PackagesReducer from './reducers/packages-reducer';
import PaginationReducer from "./reducers/pagination-reducer";

const RootReducer = combineReducers({
    PackagesReducer,
    PaginationReducer
});

const store = createStore(RootReducer);
export default store;
