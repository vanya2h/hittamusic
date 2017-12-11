import {
  APP_SWITCH_CURRENCY,
  APP_SWITCH_LANGUAGE,
} from '../consts';

export const appSwitchCurrency = currency => ({
  type: APP_SWITCH_CURRENCY,
  payload: currency,
});

export const appSwitchLanguage = language => ({
  type: APP_SWITCH_LANGUAGE,
  payload: language,
});