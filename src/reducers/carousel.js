import {
  CAROUSEL_SWITCH_ITEM
} from '../consts';

const defaultState = {
  selectedItem: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CAROUSEL_SWITCH_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }
    default:
      return state;
  }
};