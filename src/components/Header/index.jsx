import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";
import translation from "./translation";
import Currency from "../Currency";
import Language from "../Language";

import {
  appSwitchLanguage,
  appSwitchCurrency
} from "../../actions/app";

import {
  LANGUAGE_RUS,
  LANGUAGE_US,
  CURRENCY_RUBLE,
  CURRENCY_DOLLAR
} from "../../consts";

class Header extends React.Component {
  componentDidMount() {
    this.dropdownReset();
  }

  dropdownReset() {
    require("../../../dist/semantic/dist/semantic.min.js");
    $(".dropdown").dropdown();
  }

  render() {
    const {
      classes,
      cartLength,
      paymentsLength,
      appSwitchLanguage,
      payments,
      language,
      appSwitchCurrency,
    } = this.props;

    return (
      <div className={classes.menu}>
        <div className="ui container">
          <div className="ui big secondary pointing menu">
            <NavLink exact activeClassName="active" to="/" className="item">
              {translation[language]["beats"]}
            </NavLink>
            <NavLink exact activeClassName="active" to="/howto" className="item">
              {translation[language]["howto"]}
            </NavLink>
            <div className="right menu">
              <Currency />
              <Language />
              {!!paymentsLength &&
                <NavLink exact activeClassName="active" to="/payments" className="item">
                  {translation[language]["payments"]} <div className="ui label">{paymentsLength}</div>
                </NavLink>
              }
              <NavLink activeclassName="active" to="/cart" className="ui item">
                {translation[language]["cart"]}
                <div className="ui red label">{cartLength}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ cart, app, payment }) => ({
  cartLength: cart.items.length,
  language: app.language,
  payments: payment.list,
  paymentsLength: payment.list.length,
});

const mapDispatchToProps = dispatch => ({
  appSwitchLanguage: language => dispatch(appSwitchLanguage(language)),
  appSwitchCurrency: currency => dispatch(appSwitchCurrency(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Header, componentStyles)
);