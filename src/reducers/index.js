import { combineReducers } from 'redux';
import cart from './cart';
import carousel from './carousel';
import items from "./items";
import app from "./app";

export default combineReducers({
  carousel,
  cart,
  items,
  app,
});