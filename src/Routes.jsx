import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import DefaultRoute from './containers/Default';
import PageRoute from './containers/Page';
import IndexPage from "./pages/Index";
import CartPage from "./pages/Cart";
import HowToPage from "./pages/HowTo";

export default () => (
  <BrowserRouter>
    <Switch>
      <DefaultRoute exact path="/" component={IndexPage} />
      <PageRoute exact path="/cart" component={CartPage} />
      <PageRoute exact path="/howto" component={HowToPage} />
    </Switch>
  </BrowserRouter>
);