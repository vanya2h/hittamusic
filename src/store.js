import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

import {
  LOCALSTORAGE,
  LANGUAGE_US,
  CURRENCY_DOLLAR
} from "./consts";

import db from "./db.json";

const emptyState = {
  cart: {
    items: []
  },
  app: {
    language: LANGUAGE_US,
    currency: CURRENCY_DOLLAR,
  },
  payment: {
    list: [],
  }
}

const defaultState = localStorage[LOCALSTORAGE]
  ? JSON.parse(localStorage[LOCALSTORAGE])
  : emptyState;

const store = createStore(reducers, {
  ...defaultState,
  items: db.items,
}, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  const { cart, app, payment } = store.getState();
  localStorage[LOCALSTORAGE] = JSON.stringify({ cart, app, payment });
});

export default store;