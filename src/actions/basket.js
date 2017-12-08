import {
  BASKET_ADD_ITEM,
  BASKET_REMOVE_ITEM
} from "../consts";

export const addItemToBasket = (id) => ({
  type: BASKET_ADD_ITEM,
  payload: id,
});

export const removeItemFromBasket = id => ({
  type: BASKET_REMOVE_ITEM,
  payload: id,
})