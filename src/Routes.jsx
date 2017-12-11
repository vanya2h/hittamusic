import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import DefaultRoute from './containers/Default';
import IndexPage from "./pages/Index";
import CartPage from "./pages/Cart";

export default () => (
  <BrowserRouter>
    <Switch>
      <DefaultRoute exact path="/" component={IndexPage} />
      <DefaultRoute exact path="/cart" component={CartPage} />
    </Switch>
  </BrowserRouter>
);