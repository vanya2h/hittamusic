import React from 'react';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import DefaultRoute from './containers/Default';
import IndexPage from "./pages/Index";
import CartPage from "./pages/Cart";

export default () => (
  <HashRouter>
    <Switch>
      <DefaultRoute exact path="/" component={IndexPage} />
      <DefaultRoute exact path="/cart" component={CartPage} />
    </Switch>
  </HashRouter>
);