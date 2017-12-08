import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from "../consts";

export const addItemToCart = (id, option) => ({
  type: CART_ADD_ITEM,
  payload: {
    id,
    option
  }
});

export const removeItemFromCart = id => ({
  type: CART_REMOVE_ITEM,
  payload: id,
})