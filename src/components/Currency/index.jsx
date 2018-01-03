import React from "react";
import { connect } from "react-redux";
import { CURRENCY_RUBLE, CURRENCY_DOLLAR } from "../../consts";
import t from "./translation";
import { appSwitchCurrency } from "../../actions/app";

class Currency extends React.Component {
  componentDidMount() {
    this.dropdownReset();
  }

  dropdownReset() {
    require("../../../dist/semantic/dist/semantic.min.js");
    $(".dropdown").dropdown();
  }

  render() {
    const {
      language,
      currency,
      appSwitchCurrency
    } = this.props;

    return <div className="ui dropdown item">
      <div className="text">{currency}</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div onClick={() => {
          appSwitchCurrency(CURRENCY_RUBLE)
        }} className="item">
          <i className="ru flag"></i>
          {t[language]["ruble"]}
        </div>
        <div onClick={() => {
          appSwitchCurrency(CURRENCY_DOLLAR)
        }} className="item">
          <i className="us flag"></i>
          {t[language]["dollar"]}
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
  currency: app.currency
})

const mapDispatchToProps = dispatch => ({
  appSwitchCurrency: currency => dispatch(appSwitchCurrency(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Currency);