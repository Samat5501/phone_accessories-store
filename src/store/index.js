import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import {CartReducer} from './reducers/CartReducer'

const rootReducer = combineReducers({
  ProductsReducer,
  CartReducer
});

export const store = createStore(rootReducer, devToolsEnhancer());