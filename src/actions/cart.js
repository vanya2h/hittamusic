import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_OPTION,
  CART_CLEAR_CART
} from "../consts";

import promiseAction from "../utils/promiseAction";

export const addItemToCart = (id, option) => ({
  type: CART_ADD_ITEM,
  payload: {
    id,
    option
  }
});

export const removeItemFromCart = id => dispatch => promiseAction(
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
);


export const changeOption = (id, option) => ({
  type: CART_CHANGE_OPTION,
  payload: { id, option }
});

export const clearCart = () => ({
  type: CART_CLEAR_CART,
})