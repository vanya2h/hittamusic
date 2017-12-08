import { combineReducers } from 'redux';
import basket from './basket';
import carousel from './carousel';
import items from "./items";

export default combineReducers({
  carousel,
  basket,
  items,
});