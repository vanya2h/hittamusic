import React from 'react';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import DefaultRoute from './containers/Default';
import IndexPage from "./pages/Index";
import BasketPage from "./pages/Basket";

export default () => (
  <HashRouter>
    <Switch>
      <DefaultRoute exact path="/" component={IndexPage} />
      <DefaultRoute exact path="/basket" component={BasketPage} />
    </Switch>
  </HashRouter>
);