import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_OPTION,
  CART_CLEAR_CART
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
          { ...action.payload, }
        ]
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => 
          item.id !== action.payload
        ),
      }

    case CART_CLEAR_CART:
      return {
        ...state,
        items: [],
      }

    case CART_CHANGE_OPTION:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              option: action.payload.option,
            }
          } else {
            return {
              ...item
            };
          }
        })
      }
      
    default:
      return state;
  }
};