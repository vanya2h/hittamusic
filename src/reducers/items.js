import {
  ADD_ITEMS
} from '../consts';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return [
        ...state,
        ...action.payload,
      ]
    default:
      return state;
  }
};