import {
  ADD_ITEMS
} from "../consts";

export const addItems = items => ({
  type: ADD_ITEMS,
  payload: items
});