import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { LOCALSTORAGE } from "./consts";
import db from "./db.json";

const emptyState = {
  cart: {
    items: []
  },
  app: {}
}

const defaultState = localStorage[LOCALSTORAGE]
  ? JSON.parse(localStorage[LOCALSTORAGE])
  : emptyState;

const store = createStore(reducers, {
  ...defaultState,
  items: db.items,
}, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  const { cart, app } = store.getState();
  localStorage[LOCALSTORAGE] = JSON.stringify({ cart, app });
});

export default store;