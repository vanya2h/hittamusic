import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";
import translation from "./translation";

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
      appSwitchLanguage,
      currentLanguage,
      appSwitchCurrency,
      currentCurrency,
    } = this.props;

    return (
      <div className={classes.menu}>
        <div className="ui container">
          <div className="ui big secondary pointing menu">
            <NavLink exact activeClassName="active" to="/" className="item">
              {translation[currentLanguage]["beats"]}
            </NavLink>
            <a className="item">
              {translation[currentLanguage]["howto"]}
            </a>
            <div className="right menu">
              <div className="ui dropdown item">
                <div className="text">{currentCurrency}</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div onClick={() => {
                    appSwitchCurrency(CURRENCY_RUBLE)
                  }} className="item">
                    <i className="ru flag"></i>
                    {translation[currentLanguage]["ruble"]}
                  </div>
                  <div onClick={() => {
                    appSwitchCurrency(CURRENCY_DOLLAR)
                  }} className="item">
                    <i className="us flag"></i>
                    {translation[currentLanguage]["dollar"]}
                  </div>
                </div>
              </div>
              <div className="ui dropdown item">
                <div className="text">Language: {currentLanguage}</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div onClick={() => {
                    appSwitchLanguage(LANGUAGE_RUS)
                  }} className="item">
                    <i className="ru flag"></i>
                    Russian
                  </div>
                  <div onClick={() => {
                    appSwitchLanguage(LANGUAGE_US)
                  }} className="item">
                    <i className="us flag"></i>
                    US
                  </div>
                </div>
              </div>
              <NavLink activeclassName="active" to="/cart" className="ui item">
                {translation[currentLanguage]["cart"]}
                <div className="ui red label">{cartLength}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ cart, app }) => ({
  cartLength: cart.items.length,
  currentLanguage: app.language,
  currentCurrency: app.currency,
});

const mapDispatchToProps = dispatch => ({
  appSwitchLanguage: language => dispatch(appSwitchLanguage(language)),
  appSwitchCurrency: currency => dispatch(appSwitchCurrency(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Header, componentStyles)
);