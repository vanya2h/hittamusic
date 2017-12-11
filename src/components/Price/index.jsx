import React from "react";
import { connect } from "react-redux";
import config from "../../config.json";

import {
  CURRENCY_RUBLE,
  CURRENCY_DOLLAR,
} from "../../consts";

const Price = ({ price, currency }) => {
  if (currency === CURRENCY_RUBLE) {
    return (
      <span>{price * config.ratio} руб.</span>
    );
  } else if (currency === CURRENCY_DOLLAR) {
    return (
      <span>${price}</span>
    );
  } else {
    return (
      <span>Ошибка</span>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  currency: app.currency,
});

export default connect(mapStateToProps)(Price);