import { combineReducers } from 'redux';
import cart from './cart';
import carousel from './carousel';
import items from "./items";

export default combineReducers({
  carousel,
  cart,
  items,
});