import React from 'react';
//import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import DefaultRoute from './containers/Default';
import PageRoute from './containers/Page';
import IndexPage from "./pages/Index";
import CartPage from "./pages/Cart";
import HowToPage from "./pages/HowTo";
import PaymentPage from "./pages/Payment";
import PaymentsPage from "./pages/Payments";

export default () => (
  //<BrowserRouter>
  <HashRouter>
    <Switch>
      <DefaultRoute exact path="/" component={IndexPage} />
      <PageRoute exact path="/cart" component={CartPage} />
      <PageRoute exact path="/howto" component={HowToPage} />
      <PageRoute exact path="/payment" component={PaymentPage} />
      <PageRoute exact path="/payments" component={PaymentsPage} />
    </Switch>
  </HashRouter>
  // </BrowserRouter>
);