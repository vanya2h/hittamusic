import {
  APP_SWITCH_CURRENCY,
  APP_SWITCH_LANGUAGE,
  LANGUAGE_US,
  LANGUAGE_RUS,
  CURRENCY_RUBLE,
  CURRENCY_DOLLAR,
} from '../consts';

const defaultState = {
  language: LANGUAGE_US,
  currency: CURRENCY_DOLLAR
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_SWITCH_CURRENCY:
      return {
        ...state,
        currency: action.payload
      }

    case APP_SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }

    default:
      return state;
  }
};