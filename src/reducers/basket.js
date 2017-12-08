import {
  BASKET_ADD_ITEM,
  BASKET_REMOVE_ITEM
} from '../consts';

const defaultState = {
  items: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case BASKET_ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    case BASKET_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    default:
      return state;
  }
};