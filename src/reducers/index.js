import { combineReducers } from 'redux';
import cart from './cart';
import carousel from './carousel';
import items from "./items";
import app from "./app";
import payment from "./payment";

export default combineReducers({
  carousel,
  payment,
  cart,
  items,
  app,
});