import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from '../consts';

const defaultState = {
  items: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
          }
        ]
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
      }
    default:
      return state;
  }
};